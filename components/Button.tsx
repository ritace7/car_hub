"use client";

//components
import Image from "next/image";

//types
import { ButtonProps } from "@/types";


const Button = ({title, btnType, containerStyles, handleClick, textStyles, rightIcon, isDisabled}: ButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
          {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image       
              src={rightIcon}
              alt="right icon"
              fill
              className="object-contain"
            />
          </div>
        )}
    </button>
  )
}

export default Button