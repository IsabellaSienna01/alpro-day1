"use client"

import { useQuery } from "@tanstack/react-query"
import { ProductAPI } from "@/lib/api/product"

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: ProductAPI.getCategories,
  })
}