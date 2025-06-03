import { Search, ShoppingBag, User, Heart, Menu, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4">
              <span>Free delivery on orders over $50</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/help" className="hover:underline">
                Help & FAQs
              </Link>
              <Link href="/student" className="hover:underline">
                Student Discount
              </Link>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <Link href="/" className="text-3xl font-bold">
                YS
              </Link>
              <nav className="hidden lg:flex items-center gap-8">
                <Link href="/women" className="font-medium hover:underline">
                  WOMEN
                </Link>
                <Link href="/men" className="font-medium hover:underline">
                  MEN
                </Link>
                <Link href="/shoes" className="font-medium hover:underline">
                  SHOES
                </Link>
                <Link href="/accessories" className="font-medium hover:underline">
                  ACCESSORIES
                </Link>
                <Link href="/brands" className="font-medium hover:underline">
                  BRANDS
                </Link>
                <Link href="/sale" className="font-medium hover:underline text-red-600">
                  SALE
                </Link>
                <Link href="/how-to-deploy" className="font-medium hover:underline text-green-600">
                  HOW TO DEPLOY
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center relative">
                <Search className="absolute left-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search for items and brands" className="pl-10 w-80" />
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/account">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  2
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold mb-4">
              New Season
              <br />
              <span className="text-purple-600">Arrivals</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the latest trends in fashion. From casual wear to formal attire, find your perfect style with YS.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800" asChild>
                <Link href="/women">Shop Women</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/men">Shop Men</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Fashion Model"
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dresses", image: "/placeholder.svg?height=300&width=250", href: "/women/dresses" },
              { name: "Tops", image: "/placeholder.svg?height=300&width=250", href: "/women/tops" },
              { name: "Jeans", image: "/placeholder.svg?height=300&width=250", href: "/women/jeans" },
              { name: "Shoes", image: "/placeholder.svg?height=300&width=250", href: "/shoes" },
            ].map((category) => (
              <Card key={category.name} className="group cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Link href={category.href}>
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={250}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/products">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Floral Summer Dress",
                price: "$89.99",
                originalPrice: "$129.99",
                image: "/placeholder.svg?height=400&width=300",
                sale: true,
              },
              { name: "Classic White Sneakers", price: "$79.99", image: "/placeholder.svg?height=400&width=300" },
              { name: "Denim Jacket", price: "$119.99", image: "/placeholder.svg?height=400&width=300" },
              {
                name: "Silk Blouse",
                price: "$69.99",
                originalPrice: "$99.99",
                image: "/placeholder.svg?height=400&width=300",
                sale: true,
              },
            ].map((product, index) => (
              <Card key={index} className="group cursor-pointer">
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
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">(24)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Now</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden h-96">
                <CardContent className="p-0 relative h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Trending Collection"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-3xl font-bold mb-4">Summer Essentials</h3>
                      <p className="mb-6">Up to 50% off selected items</p>
                      <Button className="bg-white text-black hover:bg-gray-100" asChild>
                        <Link href="/sale">Shop Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <Card className="overflow-hidden h-44">
                <CardContent className="p-0 relative h-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Accessories"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="text-xl font-bold mb-2">Accessories</h4>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href="/accessories">Explore</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden h-44">
                <CardContent className="p-0 relative h-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="New Arrivals"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="text-xl font-bold mb-2">New Arrivals</h4>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href="/new-arrivals">Discover</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive offers, and fashion tips. Join our newsletter and never
            miss out on the latest trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="bg-white text-black" />
            <Button className="bg-white text-black hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">YS</h3>
              <p className="text-gray-400 mb-4">Your style, your story. Discover fashion that speaks to you.</p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="text-white hover:text-gray-300">
                  Facebook
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-gray-300">
                  Instagram
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-gray-300">
                  Twitter
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="hover:text-white">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About YS</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
