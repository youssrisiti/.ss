import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, CheckCircle, ArrowRight, Download, ExternalLink, Zap } from "lucide-react"

export default function DeployPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              YS
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
              <Link href="/account" className="text-gray-600 hover:text-black">
                Account
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Deploy YS to me.ma</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your YS e-commerce website live with a free .me.ma domain and hosting
          </p>
        </div>

        {/* Deployment Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle className="text-xl">Deploy to me.ma</CardTitle>
                  <CardDescription>Free .me.ma subdomain with hosting</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">What you get:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Free subdomain (ys.me.ma)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Free hosting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    No coding required
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Mobile optimized
                  </li>
                </ul>
              </div>
              <Button className="w-full" asChild>
                <a href="https://me.ma" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Go to me.ma
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle className="text-xl">Deploy to Vercel</CardTitle>
                  <CardDescription>Professional hosting with custom domain</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">What you get:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Custom domain support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Global CDN
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Automatic deployments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Analytics included
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Deploy to Vercel
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Step-by-Step Guide */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Deployment Steps</h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-600 text-white text-lg px-3 py-1">1</Badge>
                  <CardTitle>Download Your Website Files</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  First, download all your YS website files. Click the button below to get the complete website package.
                </p>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download YS Website
                </Button>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-600 text-white text-lg px-3 py-1">2</Badge>
                  <CardTitle>Sign Up on me.ma</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Visit me.ma and create your free account. Choose your desired subdomain name (e.g., ys.me.ma).
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Suggested domain names:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• ys.me.ma</li>
                    <li>• ysfashion.me.ma</li>
                    <li>• ysstore.me.ma</li>
                    <li>• ysboutique.me.ma</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-600 text-white text-lg px-3 py-1">3</Badge>
                  <CardTitle>Upload Your Files</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Use me.ma's file manager or FTP to upload your website files to the public_html directory.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important:</h4>
                  <p className="text-yellow-700 text-sm">
                    Make sure to upload the index.html file to the root directory for your site to work properly.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-600 text-white text-lg px-3 py-1">4</Badge>
                  <CardTitle>Your Site is Live!</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Once uploaded, your YS e-commerce website will be accessible at your chosen .me.ma domain.
                </p>
                <div className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">Congratulations!</h4>
                    <p className="text-green-700 text-sm">Your YS website is now live and accessible worldwide.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Hosting Features Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Feature</th>
                  <th className="border border-gray-300 p-3 text-center">me.ma</th>
                  <th className="border border-gray-300 p-3 text-center">Vercel</th>
                  <th className="border border-gray-300 p-3 text-center">Netlify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Free Hosting</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Custom Domain</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">SSL Certificate</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Bandwidth</td>
                  <td className="border border-gray-300 p-3 text-center">Unlimited</td>
                  <td className="border border-gray-300 p-3 text-center">100GB</td>
                  <td className="border border-gray-300 p-3 text-center">100GB</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Storage</td>
                  <td className="border border-gray-300 p-3 text-center">1GB</td>
                  <td className="border border-gray-300 p-3 text-center">Unlimited</td>
                  <td className="border border-gray-300 p-3 text-center">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch YS?</h3>
              <p className="text-gray-600 mb-6">
                Choose your preferred hosting platform and get your e-commerce website live in minutes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://me.ma" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-5 w-5 mr-2" />
                    Deploy to me.ma
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Back to YS
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
