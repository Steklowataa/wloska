"use client";
import React from "react";


type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={`w-[252px] h-[48px] rounded-[12px] bg-black border border-white p-4 placeholder:text-[14px] ${className ?? ""}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
