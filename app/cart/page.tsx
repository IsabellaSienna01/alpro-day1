"use client"

import { useCart } from "@/context/CartContext"
import Swal from "sweetalert2"
import Image from "next/image"

export default function CartPage() {
  const { items, removeItem } = useCart()

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h1 className="text-5xl text-white font-bold text-center mb-10">Cart</h1>

      {items.length === 0 ? (
        <p className="text-white text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="
                  flex items-center justify-between
                  bg-white rounded-xl p-4 shadow-sm
                "
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />

                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-gray-500">
                      ${item.price} x {item.quantity}
                    </p>
                    <p className="font-semibold text-[var(--primary)]">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "Remove this item from cart?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonText: "Yes, remove it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        removeItem(item.id)

                        Swal.fire({
                          title: "Removed!",
                          text: `${item.title} removed`,
                          icon: "success",
                          timer: 1500,
                          showConfirmButton: false,
                        })
                      }
                    })
                  }}
                  className="bg-red-500 text-white px-3 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div
            className="
              mt-8
              bg-white
              rounded-xl
              p-6
              shadow-sm
              flex justify-between items-center
            "
          >
            <h2 className="text-xl font-bold">Total</h2>
            <p className="text-2xl font-bold text-[var(--primary)]">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  )
}