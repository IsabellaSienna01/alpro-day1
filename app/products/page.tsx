"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"

export default function ProductsPage() {
  const { data, isLoading } = useProducts()

  if (isLoading)
    return (
      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-6
        "
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )

  return (
    <div
      className="
      grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5
      gap-6
      "
    >
      {data?.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}