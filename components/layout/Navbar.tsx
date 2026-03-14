"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { Package, ShoppingCart } from "lucide-react"

export function Navbar() {
  const { items } = useCart()

  return (
    <nav
      className="
      sticky top-0 z-50
      bg-white
      border-b
      shadow-sm
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-6
        py-4
        "
      >
        <Link
          href="/"
          className="
          text-xl
          font-bold
          text-(--primary)
          cursor-pointer
          hover:underline
          "
        >
          AlproShop
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/products">
          <Package className="inline-block mr-1" size={16} />
          Products
          </Link>

          <Link
            href="/cart"
            className="
            bg-(--secondary)
            px-3 py-1
            rounded-md
            "
          >
            <ShoppingCart className="inline-block md:mr-2" size={16} />
            Cart ({items.length})
          </Link>

        </div>
      </div>
    </nav>
  )
}