"use client"

import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"
import { products } from "@/fakedata/fakeproduct"
import { useProducts } from "@/hooks/useProducts"
import Link from "next/link"

export default function HomePage() {
  const {data, isLoading} = useProducts()
  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center mt-25">Welcome to 
        <span className="text-(--primary) cursor-pointer hover:underline"> AlproShop</span>
        !
      </h1>
      {/* <div className="flex justify-center mt-5 gap-3">
        <Link href="/products" className="flex text-center mt-4 text-white text-lg font-medium rounded bg-(--primary) px-6 py-3">
          View All Products
        </Link>
        <Link href="/cart" className="flex text-center mt-4 text-white text-lg font-medium rounded bg-(--primary) px-6 py-3">
          View Cart
        </Link>
        
      </div> */}
      <div className="flex justify-center mt-10 gap-3">
          {isLoading
        ? Array.from({length: 5}).map((_, i) => (<ProductCardSkeleton key={i} />))
        : data?.slice(0, 5).map((p) => <ProductCard key={p.id} product={p} />
        )}
      </div>
    </div>
  )
}