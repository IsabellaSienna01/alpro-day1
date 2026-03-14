"use client"

import React from "react"

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="
      px-5 py-2
      rounded-lg
      font-medium
      text-white
      bg-(--primary)
      hover:brightness-110
      transition
      shadow-sm
      "
    >
      {children}
    </button>
  )
}