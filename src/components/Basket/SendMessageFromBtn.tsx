"use client";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { useOrder } from "@/app/context/OrderContext";
import { useRouter } from "next/navigation"; // ← Fixed import (not next/router)

const SendMessageToButton = () => {
  const { customer } = useOrder();
  const { items } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {    
    setLoading(true);
    
    try {
      const orderData = {
        items,
        totalPrice: items.reduce((sum, i) => sum + i.totalPrice, 0),
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
      }

      const result = await response.json();

      if (result.success) {
        console.log("✅ Order successful!");
        // alert("✅ Zamówienie zostało wysłane do kuchni!");
        router.push(`/basket/summary?orderNumber=${result.orderNumber}`);
      } else {
        console.error("❌ Order failed:", result);
        alert(`❌ Wystąpił błąd: ${result.error || "Nieznany błąd"}`);
      }
    } catch (error) {
      console.error("💥 Network/parsing error:", error);
      alert(`❌ Błąd połączenia: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { handleCheckout, loading };
};

export default SendMessageToButton;