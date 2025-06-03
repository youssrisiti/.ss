import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter, Grid, List, Heart, Star } from "lucide-react"

export default function ShoesPage() {
  const products = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: "$79.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 2,
      name: "Running Shoes",
      price: "$129.99",
      originalPrice: "$159.99",
      image: "/placeholder.svg?height=400&width=300",
      sale: true,
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 3,
      name: "High Heels",
      price: "$99.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.3,
      reviews: 67,
    },
    {
      id: 4,
      name: "Ankle Boots",
      price: "$149.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      reviews: 43,
    },
    {
      id: 5,
      name: "Sandals",
      price: "$59.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 6,
      name: "Dress Shoes",
      price: "$189.99",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.5,
      reviews: 34,
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
            <span className="text-black font-medium">Shoes</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-64 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Shoes Collection</h1>
            <p className="text-lg text-gray-600">Step up your style with our premium footwear</p>
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
                  <Link href="/shoes/sneakers" className="text-gray-600 hover:text-black">
                    Sneakers (124)
                  </Link>
                </li>
                <li>
                  <Link href="/shoes/boots" className="text-gray-600 hover:text-black">
                    Boots (67)
                  </Link>
                </li>
                <li>
                  <Link href="/shoes/heels" className="text-gray-600 hover:text-black">
                    Heels (89)
                  </Link>
                </li>
                <li>
                  <Link href="/shoes/sandals" className="text-gray-600 hover:text-black">
                    Sandals (45)
                  </Link>
                </li>
                <li>
                  <Link href="/shoes/formal" className="text-gray-600 hover:text-black">
                    Formal (34)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {["5", "6", "7", "8", "9", "10", "11", "12", "13"].map((size) => (
                  <Button key={size} variant="outline" size="sm" className="h-8">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Brand</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Nike (45)
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Adidas (38)
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Converse (29)
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Vans (23)
                  </label>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">267 items</span>
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
