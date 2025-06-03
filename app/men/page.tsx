import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter, Grid, List, Heart, Star } from "lucide-react"

export default function MenPage() {
  const products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: "$29.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.5,
      reviews: 42,
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$119.99",
      originalPrice: "$149.99",
      image: "/placeholder.svg?height=400&width=300",
      sale: true,
      rating: 4.7,
      reviews: 28,
    },
    {
      id: 3,
      name: "Chino Pants",
      price: "$69.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.3,
      reviews: 35,
    },
    {
      id: 4,
      name: "Polo Shirt",
      price: "$49.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.6,
      reviews: 19,
    },
    {
      id: 5,
      name: "Hoodie",
      price: "$79.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      reviews: 52,
    },
    {
      id: 6,
      name: "Dress Shirt",
      price: "$89.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.4,
      reviews: 23,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Men</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-64 bg-gradient-to-r from-blue-100 to-gray-100">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Men's Fashion</h1>
            <p className="text-lg text-gray-600">Elevate your style with our curated collection</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/men/shirts" className="text-gray-600 hover:text-black">
                    Shirts (89)
                  </Link>
                </li>
                <li>
                  <Link href="/men/pants" className="text-gray-600 hover:text-black">
                    Pants (67)
                  </Link>
                </li>
                <li>
                  <Link href="/men/jackets" className="text-gray-600 hover:text-black">
                    Jackets (45)
                  </Link>
                </li>
                <li>
                  <Link href="/men/suits" className="text-gray-600 hover:text-black">
                    Suits (23)
                  </Link>
                </li>
                <li>
                  <Link href="/men/casual" className="text-gray-600 hover:text-black">
                    Casual (78)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Under $50 (34)
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    $50 - $100 (78)
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    $100 - $200 (56)
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Over $200 (24)
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <Button key={size} variant="outline" size="sm" className="h-8">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">302 items</span>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <select className="border rounded px-3 py-1">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
                <div className="flex border rounded">
                  <Button variant="ghost" size="sm" className="border-r">
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.sale && <Badge className="absolute top-2 left-2 bg-red-600">SALE</Badge>}
                      <Button
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        variant="secondary"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
