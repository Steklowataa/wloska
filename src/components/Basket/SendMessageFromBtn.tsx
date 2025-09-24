// "use client";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { orderSchema, type OrderInputValues } from "@/utils/zodSchema";

const SendMessageToButton = () => {
  const { items } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async (formValues?: OrderInputValues) => {
    if (!formValues) return;
    const parsed = orderSchema.safeParse(formValues);
    if (!parsed.success) {
      alert("❌ Formularz zawiera błędy. Popraw dane.");
      return;
    }
    const values = parsed.data; // conforms to OrderValues (post-transform)
    setLoading(true);
    try {
      const totalPrice = items.reduce((sum, i) => sum + i.totalPrice, 0);

      const orderData = {
        items,
        totalPrice,
        customer: {
          name: values.name,
          phone: values.phone,
          email: values.email,
          streetName: values.streetName,
          streetNumber: values.streetNumber,
          flatNumber: values.flatNumber,
          floorNumber: values.floorNumber,
          staircase: values.staircase,
          payment: values.payment,
          message: values.message,
          change: values.change,
          promoCode: values.promoCode,
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
      alert(`❌ Błąd połączenia: ${error instanceof Error ? error.message : 'Nieznany błąd'}`);
    } finally {
      setLoading(false);
    }
  };

  return { handleCheckout, loading };
};

export default SendMessageToButton;