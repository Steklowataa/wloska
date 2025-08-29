"use client";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { useOrder } from "@/app/context/OrderContext";
import { useRouter } from "next/navigation";

const SendMessageToButton = () => {
  const { customer } = useOrder();
  const { items } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {    
    setLoading(true);
    
    try {
      const totalPrice = items.reduce((sum, i) => sum + i.totalPrice, 0);

      const orderData = {
        items,
        totalPrice: totalPrice,
        customer: {
          name: customer.name,
          phone: customer.phone,
          email: customer.email,
          streetName: customer.streetName,
          streetNumber: customer.streetNumber,
          flatNumber: customer.flatNumber,
          payment: customer.payment,
          message: customer.message,
          change: customer.change,
          promoCode: customer.promoCode
        },
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData),
      });


      if (!response.ok) {
        console.error("Response not ok:", response.status, response.statusText);
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        const summaryUrl = `/basket/summary?orderNumber=${encodeURIComponent(result.orderNumber)}`;
        router.push(summaryUrl);
      } else {
        //TODO
        alert(`❌ Wystąpił błąd: ${result.error || "Nieznany błąd"}`);
      }
    } catch (error) {
      alert(`❌ Błąd połączenia: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { handleCheckout, loading };
};

export default SendMessageToButton;