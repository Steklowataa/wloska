"use client";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SendMessageToButton = () => {
  const { items } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async (formValues) => {
    setLoading(true);
    try {
      const totalPrice = items.reduce((sum, i) => sum + i.totalPrice, 0);

      const orderData = {
        items,
        totalPrice,
        customer: {
          name: formValues.name,
          phone: formValues.phone,
          email: formValues.email,
          streetName: formValues.streetName,
          streetNumber: formValues.streetNumber,
          flatNumber: formValues.flatNumber,
          floorNumber: formValues.floorNumber,
          staircase: formValues.staircase,
          payment: formValues.payment,
          message: formValues.message,
          change: formValues.change,
          promoCode: formValues.promoCode,
        },
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        router.push(`/basket/summary?orderNumber=${encodeURIComponent(result.orderNumber)}`);
      } else {
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