"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"
import {ArrowLeft} from "lucide-react"

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
    <div className="flex flex-col gap-6">
      <button className="flex w-fit items-center gap-1 text-sm text-(--primary) hover:text-(--secondary)"
      onClick={() => window.history.back()}
      > 
        <ArrowLeft size={16}/>
        Back to Home
      </button>
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
  </div>
  )
}