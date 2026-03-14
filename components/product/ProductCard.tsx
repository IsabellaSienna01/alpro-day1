"use client"

import { Product } from "@/types/product"
import Link from "next/link"
import Image from "next/image"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="
        bg-white
        rounded-xl
        border
        p-4
        hover:shadow-lg
        hover:-translate-y-1
        transition
        cursor-pointer
        "
      >
        <div className="flex justify-center">
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.title}
            className="
            h-40
            object-contain
            "
          />
        </div>

        <h3
          className="
          mt-3
          text-sm
          font-medium
          line-clamp-2
          "
        >
          {product.title}
        </h3>

        <p
          className="
          mt-2
          text-lg
          font-bold
          text-(--primary)
          "
        >
          ${product.price}
        </p>
      </div>
    </Link>
  )
}