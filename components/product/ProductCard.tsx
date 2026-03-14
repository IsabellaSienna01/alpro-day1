"use client"

import { Product } from "@/types/product"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="
        relative
        bg-white
        rounded-xl
        border
        p-4
        hover:shadow-lg
        hover:-translate-y-1
        transition
        cursor-pointer
        justify-center
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
          font-bold
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
          <div className="flex items-center gap-1">
            <Star size={16} fill="gold" stroke="gold" />
            <span className="text-sm text-gray-600">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
          <div className="mt-1">
            ${product.price}
          </div>
        </p>
      </div>
    </Link>
  )
}