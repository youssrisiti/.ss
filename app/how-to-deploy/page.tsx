import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Upload,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  Folder,
  Monitor,
  Smartphone,
} from "lucide-react"

export default function HowToDeployPage() {
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
              <Link href="/deploy" className="text-gray-600 hover:text-black">
                Deploy
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How to Deploy YS to me.ma</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow this step-by-step guide to get your YS e-commerce website live on me.ma in under 10 minutes
          </p>
        </div>

        {/* Quick Overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">What You'll Need</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Your YS website files</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>me.ma account (free)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>10 minutes of your time</span>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="space-y-8">
          {/* Step 1: Download Files */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600 text-white text-lg px-3 py-1">1</Badge>
                <div>
                  <CardTitle className="text-xl">Download Your YS Website</CardTitle>
                  <CardDescription>Get all the files needed for your website</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                First, you need to download your complete YS website. Click the "Download Code" button at the top right
                of this page.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">What you'll get:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-blue-600" />
                    Complete website folder
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-green-600" />
                    HTML, CSS, and JavaScript files
                  </li>
                  <li className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-purple-600" />
                    All pages (Home, Women, Men, Shoes, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-orange-600" />
                    Mobile-responsive design
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Important:</h4>
                <p className="text-yellow-700 text-sm">
                  Make sure to extract the downloaded ZIP file to see all your website files.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Sign Up on me.ma */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-600 text-white text-lg px-3 py-1">2</Badge>
                <div>
                  <CardTitle className="text-xl">Create Your me.ma Account</CardTitle>
                  <CardDescription>Sign up for free hosting and choose your domain</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Button asChild>
                  <a href="https://me.ma" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Go to me.ma
                  </a>
                </Button>
                <span className="text-gray-600">Click "Sign Up" on their homepage</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Fill out the registration form:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Your name</li>
                    <li>• Email address</li>
                    <li>• Password</li>
                    <li>• Choose your subdomain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Suggested domain names:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <Globe className="h-3 w-3 text-blue-600" />
                      <code>ys.me.ma</code>
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-3 w-3 text-blue-600" />
                      <code>ysfashion.me.ma</code>
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-3 w-3 text-blue-600" />
                      <code>ysstore.me.ma</code>
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-3 w-3 text-blue-600" />
                      <code>ysboutique.me.ma</code>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Pro Tip:</h4>
                <p className="text-green-700 text-sm">
                  Choose a short, memorable domain name that represents your brand. Avoid numbers and hyphens if
                  possible.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Access File Manager */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 text-white text-lg px-3 py-1">3</Badge>
                <div>
                  <CardTitle className="text-xl">Access Your Hosting Control Panel</CardTitle>
                  <CardDescription>Navigate to the file manager</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                After signing up, you'll receive login details via email. Log into your me.ma control panel.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">In your control panel, look for:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-blue-600" />
                    "File Manager" or "Files"
                  </li>
                  <li className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-green-600" />
                    "Upload Files" option
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-purple-600" />
                    "public_html" folder
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Important:</h4>
                <p className="text-blue-700 text-sm">
                  Always upload your files to the "public_html" folder - this is where your website files need to go to
                  be visible on the internet.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Upload Files */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-orange-600 text-white text-lg px-3 py-1">4</Badge>
                <div>
                  <CardTitle className="text-xl">Upload Your Website Files</CardTitle>
                  <CardDescription>Transfer all YS files to your hosting</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Upload Process:</h4>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        1
                      </span>
                      Open File Manager
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      Navigate to public_html folder
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      Click "Upload" or drag & drop
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        4
                      </span>
                      Select all YS website files
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        5
                      </span>
                      Wait for upload to complete
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Files to upload:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      index.html (main page)
                    </li>
                    <li className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-green-600" />
                      css/ folder
                    </li>
                    <li className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-yellow-600" />
                      js/ folder
                    </li>
                    <li className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-purple-600" />
                      images/ folder
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-red-600" />
                      All other HTML pages
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Critical:</h4>
                <p className="text-red-700 text-sm">
                  Make sure index.html is in the root of public_html folder, not in a subfolder. This file is what loads
                  when people visit your domain.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 5: Test Your Website */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-600 text-white text-lg px-3 py-1">5</Badge>
                <div>
                  <CardTitle className="text-xl">Test Your Live Website</CardTitle>
                  <CardDescription>Verify everything works correctly</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Once uploaded, visit your domain (e.g., ys.me.ma) to see your live website!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Test these features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Homepage loads correctly
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Navigation menu works
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      All pages accessible
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Images display properly
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Mobile responsive design
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common issues & fixes:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Images not showing? Check file paths</li>
                    <li>• Page not found? Verify file names</li>
                    <li>• Styling broken? Upload CSS folder</li>
                    <li>• Links not working? Check HTML links</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">Congratulations!</h4>
                    <p className="text-green-700 text-sm">
                      Your YS e-commerce website is now live and accessible worldwide at your .me.ma domain!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Troubleshooting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Common Problems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">Website shows "Index of /" page</h4>
                  <p className="text-sm text-gray-600">Solution: Make sure index.html is in public_html root folder</p>
                </div>
                <div>
                  <h4 className="font-semibold">Images not displaying</h4>
                  <p className="text-sm text-gray-600">Solution: Upload images folder and check file paths in HTML</p>
                </div>
                <div>
                  <h4 className="font-semibold">Styling looks broken</h4>
                  <p className="text-sm text-gray-600">Solution: Upload CSS folder and verify stylesheet links</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Quick Fixes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">Clear browser cache</h4>
                  <p className="text-sm text-gray-600">Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac) to refresh</p>
                </div>
                <div>
                  <h4 className="font-semibold">Check file permissions</h4>
                  <p className="text-sm text-gray-600">
                    Ensure files have proper read permissions (644 for files, 755 for folders)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Wait for propagation</h4>
                  <p className="text-sm text-gray-600">Sometimes it takes 5-10 minutes for changes to appear</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">🎉 Your YS Website is Live!</h3>
              <p className="text-gray-600 mb-6">
                Share your new e-commerce website with the world and start building your online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://me.ma" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-5 w-5 mr-2" />
                    Visit me.ma
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
