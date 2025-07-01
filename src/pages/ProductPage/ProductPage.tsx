"use client"

import type React from "react"
import { useState } from "react"
import ProductGallery from "./components/ProductGallery/ProductGallery"
import ProductInfo from "./components/ProductInfo/ProductInfo"
import ProductTabs from "./components/ProductTabs/ProductTabs"
import Breadcrumb from "./components/Breadcrumb/Breadcrumb"
import "./ProductPage.scss"

interface Product {
  id: string
  name: string
  price: number
  rating: number
  reviewCount: number
  images: string[]
  colors: Array<{ name: string; value: string }>
  sizes: string[]
  description: string
  materials: string
  reviews: Array<{
    id: string
    author: string
    rating: number
    date: string
    text: string
    avatar: string
  }>
}

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("green")
  const [selectedSize, setSelectedSize] = useState<string>("NB")
  const [quantity, setQuantity] = useState<number>(1)
  const [activeTab, setActiveTab] = useState<string>("description")

  const product: Product = {
    id: "1",
    name: "Woven Dungarees & Headband - Green",
    price: 16.5,
    rating: 4.6,
    reviewCount: 12,
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    colors: [
      { name: "Green", value: "green" },
      { name: "Purple", value: "purple" },
      { name: "Light Purple", value: "light-purple" },
    ],
    sizes: ["NB", "3M", "6M", "9M", "12M", "18M", "24M"],
    description: `Outfits to embolden her as she grows from a baby into an exploring, inquisitive toddler! This girls' collection is designed to be easily dressed up or down, giving you freedom to create a flexible wardrobe of casual day-to-day and special occasion outfits. Patterns are subtle – intertwining foliage, delicate trailing floral, trellis motifs; colours are fresh - leafy greens, soft pinks and a hint of delicate heather; and finishing touches are intricately embroidered for a subtle but lasting impression.

A complete outfit! Textured woven dungarees with matching headband set. Dungarees with adjustable button fastening on strap, patch pocket and stylish turned up cuffs. Matching bow headband, features elasticated and velcro fastening, so is easy to adjust and comfy to wear.

Our Baby to Toddler collection features stylish and comfy elevated basics and day-to-day clothing that can be co-ordinated or worn as separates, for a wardrobe that's easy to wear and looks adorable. A thoughtful range with attention to detail in every piece, fabrics and fastenings have been well considered, to be ultra-comfortable, wearable, effortless and easy to care for. The ultimate collection of quality timeless pieces that will let your little one explore the world in comfort and style.`,
    materials: "Material: 100% Cotton, with button details.",
    reviews: [
      {
        id: "1",
        author: "Joshua",
        rating: 5,
        date: "08.05.2023",
        text: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "2",
        author: "Joshua",
        rating: 5,
        date: "08.05.2023",
        text: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "3",
        author: "Joshua",
        rating: 5,
        date: "08.05.2023",
        text: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to h...",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  }

  const breadcrumbItems = [
    { label: "PickaBuy", href: "/" },
    { label: "Baby Clothing", href: "/baby-clothing" },
    { label: "Woven Dungarees & Headband - Green", href: "#" },
  ]

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity,
    })
  }

  return (
    <div className="product-page">
      <div className="product-page__container">
        <Breadcrumb items={breadcrumbItems} />

        <div className="product-page__content">
          <div className="product-page__gallery">
            <ProductGallery images={product.images} />
          </div>

          <div className="product-page__info">
            <ProductInfo
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              quantity={quantity}
              onColorChange={setSelectedColor}
              onSizeChange={setSelectedSize}
              onQuantityChange={setQuantity}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>

        <ProductTabs product={product} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}

export default ProductPage
