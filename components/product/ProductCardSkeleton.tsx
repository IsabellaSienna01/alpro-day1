"use client"

export function ProductCardSkeleton() {
  return (
    <div
      className="
      bg-white
      rounded-xl
      border
      p-4
      animate-pulse
      "
    >
      <div className="h-40 bg-gray-200 rounded-md mb-3" />
      <div className="h-4 bg-gray-200 mb-2 rounded" />
      <div className="h-4 bg-gray-200 w-1/2 rounded" />
    </div>
  )
}