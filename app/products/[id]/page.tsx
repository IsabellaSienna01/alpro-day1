"use client"
import { useParams } from "next/navigation"
import Image from "next/image"
import { useProduct } from "@/hooks/useProduct"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/context/CartContext"
import { X } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import { Star } from "lucide-react"
import {useRouter} from "next/navigation"
import Swal from "sweetalert2"
import { title } from "process"

export default function ProductDetailPage() {
  const { id } = useParams()
  const { data } = useProduct(id as string)
  const { addItem } = useCart()
  const router = useRouter()

  if (!data) return <div>Loading...</div>

  return (
    <div
      className="
      relative
      max-w-6xl
      mx-auto
      mt-20
      grid
      md:grid-cols-2
      gap-10
      bg-white
      p-8
      rounded-xl
      shadow-sm
      "
    >
      <div className="flex justify-center">
        <Image 
          src={data.image}
          alt={data.title}
          width={320}
          height={320}
          className="h-80 object-contain"
        />
      </div>

      <button 
      onClick={() => router.back()}
      className="absolute top-4 right-4 p-1 rounded hover:bg-gray-100">
        <X size={18} />
      </button>

      <div>
        <h1 className="text-2xl font-bold">{data.title}</h1>

        <p className="text-gray-600 mt-4">{data.description}</p>

      <div className="flex items-center gap-2 mt-4">
          <Star size={18} fill="gold" stroke="gold" />
          <span className="text-gray-600">
            {data.rating.rate} ({data.rating.count} reviews)
          </span>
      </div>

        <p className="mt-6 text-3xl font-bold text-(--primary)">
          ${data.price}
        </p>

        <div className="mt-8">
          <Button
            onClick={() => {
              addItem({
                id: data.id,
                title: data.title,
                price: data.price,
                image: data.image,
                quantity: 1,
              })
              Swal.fire({
                title: "Success!",
                text: `Product ${data.title} added to cart`,
                icon: "success",
              })
            }}
          >
            <span className="flex items-center gap-2">
              <ShoppingCart size={18} />
              Add to Cart
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}