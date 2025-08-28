import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    
    const orderNumber = `#${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      console.error("Missing Telegram credentials");
      return NextResponse.json({ 
        success: false, 
        error: "Missing Telegram configuration"
      }, { status: 500 });
    }


    const formatOrderItems = (items) => {
      return items?.map((item) => {
        let itemText = `• ${item.name}`;
         
        // sosy
        if (item.sauces && item.sauces.length > 0) {
          const sauceNames = item.sauces.map(s => s.name).join(', ');
          itemText += `\n  🥫 Sosy: ${sauceNames}`;
        }
        
        // dodatki 
        if (item.extras && item.extras.length > 0) {
          const extraNames = item.extras.map(e => e.name).join(', ');
          itemText += `\n  🍄 Dodatki: ${extraNames}`;
        }
        
        // suma z sosem/dodatkami
        itemText += `\n  💰 ${item.totalPrice}zł`;
        
        return itemText;
      }).join('\n\n') || "Brak produktów";
    };


    //TODO dodac promocode

    const text = `🍕 Nowe zamówienie ${orderNumber}:

    👤 Klient: ${data.customer?.name || "N/A"}
    📞 Telefon: ${data.customer?.phone || "N/A"}
    📧 Email: ${data.customer?.email || "N/A"}
    🏠 Adres: ${data.customer?.streetName || ""} ${data.customer?.streetNumber || ""}/${data.customer?.flatNumber || ""}
    💳 Płatność: ${data.customer?.payment || "N/A"}
    💵 Reszta z: ${data.customer?.change || "N/A"}
    📝 Uwagi: ${data.customer?.message || "brak"}
    
    

    🛒 Zamówienie:
    ${formatOrderItems(data.items)}

    💰 SUMA CAŁKOWITA: ${data.totalPrice || 0}zł`;

    console.log("📝 Message to send:", text);
    
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const payload = {
      chat_id: chatId,
      text: text
    };

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload),
    });

    const telegramResult = await telegramResponse.json();
    
    if (!telegramResponse.ok) {
      console.error("Telegram API Error:", telegramResult);
      return NextResponse.json({ 
        success: false, 
        error: "Failed to send Telegram message",
        telegramError: telegramResult 
      }, { status: 500 });
    }

    console.log("Message sent to Telegram successfully!");
    
    return NextResponse.json({ 
      success: true, 
      orderNumber,
      telegramMessageId: telegramResult.message_id 
    });

  } catch (error) {
    console.error("💥 Error processing order:", error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || "Internal server error"
    }, { status: 500 });
  }
}