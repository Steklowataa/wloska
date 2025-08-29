"use client";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, onBlur, placeholder }, ref) => {
    return (
      <input
        className="w-[252px] h-[48px] rounded-[12px] bg-black border border-white p-4 placeholder:text-[14px]"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        placeholder={placeholder}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
