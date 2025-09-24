"use client";
import ButtonWithQuantity from "./ButtonWithQuantity";
import SetWithQuantity from "./SetWithQuantity";

export default function ModalQuantity({
  type,
  name,
  price,
  productQuantity,
  setProductQuantity,
  setQuantity,
  setSetQuantity,
}: {
  type: "pizza" | "burger" | "smashburger" | "extras" | "drinks" | "sos";
  name: string;
  price: number;
  productQuantity: number;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
  setQuantity: number;
  setSetQuantity: (value: number) => void;
}) {
  return (
    <div>
      {(type === "pizza" || type === "extras" || type === "drinks" || type === "sos") && (
        <ButtonWithQuantity
          price={price}
          quantity={productQuantity}
          setQuantity={setProductQuantity}
        />
      )}

      {(type === "burger" || type === "smashburger") && (
        <>
          <ButtonWithQuantity
            price={price}
            quantity={productQuantity}
            setQuantity={setProductQuantity}
            allowZero={true}
          />
          <SetWithQuantity
            name={name}
            price={price}
            quantity={setQuantity}
            setQuantity={setSetQuantity}
          />
        </>
      )}
    </div>
  );
}
