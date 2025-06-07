"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import type React from "react"
import { useEffect } from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Cpu,
  Monitor,
  Keyboard,
  Headphones,
  Mouse,
  HardDrive,
  Mic,
  Speaker,
  RectangleHorizontal,
  Armchair,
  Upload,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

function SetupViewer() {
  const [activeImage, setActiveImage] = useState(0)
  const [activeComponent, setActiveComponent] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Simple components with just position
  const setupComponents = [
    {
      id: "monitors",
      name: "ASUS TUF VG279QM",
      description: "27-inch 1080p monitor with 280hz refresh rate for crystal clear visuals and smooth performance.",
      price: "~$250",
      position: { top: "17%", left: "63%" },
      icon: <Monitor className="h-4 w-4" />,
      link: "https://amzn.to/3ZSsEaY",
    },
    {
      id: "monitors2",
      name: "AOC VG279QM",
      description: "24-inch 1080p monitor with 180hz refresh rate for a side monitor, could be a great gaming monitor.",
      price: "~$180",
      position: { top: "16%", left: "43%" },
      icon: <Monitor className="h-4 w-4" />,
      link: "https://amzn.to/45JCbVC",
    },
    {
      id: "keyboard",
      name: "BOYI 66 PRO",
      description: "Cheap keyboard with HE features.",
      price: "$60",
      position: { top: "50%", left: "50%" },
      icon: <Keyboard className="h-4 w-4" />,
      link: "https://amzn.to/45MesnH",
    },
    {
      id: "mouse",
      name: "Logitech G-PRO x Superlight",
      description: "Wireless ergonomic mouse with precision tracking and customizable buttons.",
      price: "$149",
      position: { top: "57%", left: "62%" },
      icon: <Mouse className="h-4 w-4" />,
      link: "https://amzn.to/3Tb5TeC",
    },
    {
      id: "pc",
      name: "Custom PC Build",
      description: "High-performance PC with a Ryzen 5 5600X and a RTX 3060TI in a minimalist case.",
      price: "~$700",
      position: { top: "93%", left: "75%" },
      icon: <Cpu className="h-4 w-4" />,
      link: "https://share-a-cart.com/get/ZUQN1",
    },
    {
      id: "headphones",
      name: "Chronicle Zero",
      description: "Studio-quality In Ear Monitors.",
      price: "$65",
      position: { top: "55%", left: "70%" },
      icon: <Headphones className="h-4 w-4" />,
      link: "https://amzn.to/4dSrja9",
    },
    {
      id: "storage",
      name: "Samsung T7",
      description: "2TB external SSD with USB-C connectivity for fast data transfer and backup.",
      price: "$179",
      position: { top: "90%", left: "85%" },
      icon: <HardDrive className="h-4 w-4" />,
      link: "https://amzn.to/3HphLHB",
    },
    {
      id: "microphone",
      name: "Maono PD200x",
      description: "Professional USB microphone with cardioid pickup pattern for streaming and recording.",
      price: "$70",
      position: { top: "14%", left: "85%" },
      icon: <Mic className="h-4 w-4" />,
      link: "https://amzn.to/4kpV4S0",
    },
    {
      id: "alexa",
      name: "Amazon Echo Dot",
      description: "Smart speaker with Alexa voice assistant for hands-free control and music streaming.",
      price: "$49",
      position: { top: "60%", left: "90%" },
      icon: <Speaker className="h-4 w-4" />,
      link: "https://amzn.to/4mPXmvt",
    },
    {
      id: "mousepad",
      name: "Tekkusai Singularity",
      description: "Glass Mousepad for fast movements.",
      price: "$29",
      position: { top: "58%", left: "79%" },
      icon: <RectangleHorizontal className="h-4 w-4" />,
      link: "https://tekkus.ai/products/singularity",
    },
    {
      id: "chair",
      name: "Herman Miller Aeron",
      description: "Ergonomic gaming chair with lumbar support and adjustable height for long gaming sessions.",
      price: "~$1600",
      position: { top: "55%", left: "20%" },
      icon: <Armchair className="h-4 w-4" />,
      link: "https://amzn.to/43w1Rng",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const setupImages = [
    {
      src: "https://i.imgur.com/upcJHzI.jpeg",
      alt: "Full desk setup view",
      label: "Full View",
    },
    {
      src: "",
      alt: "Close-up of computer and monitors",
      label: "Workstation",
    },
    {
      src: "",
      alt: "Peripherals and accessories",
      label: "Peripherals",
    },
  ]

  return (
    <div
      className={`mx-auto max-w-5xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 mb-4 group hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        <Image
          src={setupImages[activeImage].src || "/placeholder.svg"}
          alt={setupImages[activeImage].alt}
          fill
          className="object-cover"
          crossOrigin="anonymous"
        />

        {activeImage === 0 &&
          setupComponents.map((component) => (
            <Dialog key={component.id}>
              <DialogTrigger asChild>
                <button
                  className={`absolute z-10 w-6 h-6 rounded-full border-2 transition-all duration-300 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                    activeComponent === component.id
                      ? "border-purple-400 bg-purple-500 shadow-lg shadow-purple-500/50 scale-125"
                      : "border-purple-600/50 bg-purple-600/20 hover:border-purple-400 hover:bg-purple-500/40 hover:scale-110"
                  }`}
                  style={{
                    top: component.position.top,
                    left: component.position.left,
                  }}
                  onMouseEnter={() => setActiveComponent(component.id)}
                  onMouseLeave={() => setActiveComponent(null)}
                >
                  {/* Icon in center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white">
                    {component.icon}
                  </div>

                  {/* Component name label */}
                  <div
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap transition-all duration-300 ${
                      activeComponent === component.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {component.name}
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800 text-white animate-in fade-in-0 zoom-in-95 duration-300">
                <DialogHeader>
                  <DialogTitle className="text-xl animate-in slide-in-from-top-2 duration-300">
                    {component.name}
                  </DialogTitle>
                  <DialogDescription className="text-zinc-400 animate-in slide-in-from-top-4 duration-500">
                    {component.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-purple-400 font-bold">{component.price}</span>
                  </div>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
                    onClick={() => window.open(component.link, "_blank")}
                  >
                    View Details
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {setupImages.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-[16/9] overflow-hidden rounded-md border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              activeImage === index
                ? "border-purple-500 shadow-lg shadow-purple-500/25 scale-105"
                : "border-zinc-800 hover:border-purple-400"
            }`}
            onClick={() => setActiveImage(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              crossOrigin="anonymous"
            />
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 ${
                activeImage === index ? "bg-transparent" : "hover:bg-black/20"
              }`}
            >
              <span
                className={`text-sm font-medium text-white transition-all duration-300 ${
                  activeImage === index ? "scale-110 text-purple-300" : ""
                }`}
              >
                {image.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 md:hidden">
        <div className="space-y-2">
          {setupComponents.map((component, index) => (
            <Dialog key={component.id}>
              <DialogTrigger asChild>
                <button
                  className="flex w-full items-center justify-between rounded-md border border-zinc-800 bg-zinc-900 p-3 text-left hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600/20 text-purple-500 transition-all duration-300 hover:bg-purple-600/30 hover:scale-110">
                      {component.icon}
                    </div>
                    <span className="transition-colors duration-300 hover:text-purple-300">{component.name}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-zinc-500 transition-all duration-300 hover:text-purple-400 hover:translate-x-1" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800 text-white animate-in fade-in-0 zoom-in-95 duration-300">
                <DialogHeader>
                  <DialogTitle className="text-xl animate-in slide-in-from-top-2 duration-300">
                    {component.name}
                  </DialogTitle>
                  <DialogDescription className="text-zinc-400 animate-in slide-in-from-top-4 duration-500">
                    {component.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-purple-400 font-bold">{component.price}</span>
                  </div>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
                    onClick={() => window.open(component.link, "_blank")}
                  >
                    View Details
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}

function AskAI() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([])
  const [usingFallback, setUsingFallback] = useState(false)
  const [analysisStatus, setAnalysisStatus] = useState<"success" | "fallback" | "error" | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setUploadedImage(result)
        analyzeSetup(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeSetup = async (imageData: string) => {
    setIsAnalyzing(true)
    setMessages([{ role: "user", content: "Uploaded setup image for analysis" }])
    setAnalysisStatus(null)

    try {
      const response = await fetch("/api/analyze-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageData }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setAnalysis(data.analysis)
      setMessages((prev) => [...prev, { role: "assistant", content: data.analysis }])
      setUsingFallback(data.usingFallback || false)
      setAnalysisStatus(data.usingFallback ? "fallback" : "success")
    } catch (error) {
      console.error("Error analyzing setup:", error)
      setUsingFallback(true)
      setAnalysisStatus("error")

      const fallbackAnalysis =
        "# Setup Analysis Error\n\n" +
        "I encountered an issue while analyzing your image. Here are some general recommendations:\n\n" +
        "• **Lighting**: Consider bias lighting or RGB strips for ambiance\n" +
        "• **Cable Management**: Organize cables with sleeves or under-desk solutions\n" +
        "• **Desk Organization**: Add stands, organizers, or storage solutions\n" +
        "• **Ergonomics**: Ensure proper monitor height and seating position\n" +
        "• **Personalization**: Add plants, artwork, or decorative elements\n\n" +
        "**Note**: There was a technical issue with the image analysis. Please check your API key configuration."

      setAnalysis(fallbackAnalysis)
      setMessages((prev) => [...prev, { role: "assistant", content: fallbackAnalysis }])
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-purple-500" />
          Ask AI Setup Advisor
        </h2>
        <p className="text-zinc-400">Upload your setup image and get personalized recommendations!</p>
      </div>

      {!uploadedImage ? (
        <div className="border-2 border-dashed border-zinc-700 rounded-lg p-12 text-center hover:border-purple-500/50 transition-colors duration-300">
          <Upload className="h-16 w-16 text-zinc-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upload Your Setup</h3>
          <p className="text-zinc-400 mb-6">Drop your setup image here or click to browse</p>
          <Button onClick={() => fileInputRef.current?.click()} className="bg-purple-600 hover:bg-purple-700">
            Choose Image
          </Button>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Uploaded Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-zinc-800">
            <Image src={uploadedImage || "/placeholder.svg"} alt="Your setup" fill className="object-cover" />
          </div>

          {/* Chat Interface */}
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-purple-500" />
              <h3 className="text-lg font-semibold">AI Analysis</h3>
              {analysisStatus === "success" && (
                <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">Real AI Analysis</span>
              )}
              {analysisStatus === "fallback" && (
                <span className="text-xs bg-amber-900/30 text-amber-400 px-2 py-1 rounded">Generic Mode</span>
              )}
              {analysisStatus === "error" && (
                <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded">Error</span>
              )}
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user" ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-100"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <div className="whitespace-pre-line">{message.content}</div>
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))}

              {isAnalyzing && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 text-zinc-100 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-500"></div>
                      Analyzing your setup...
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {(usingFallback || analysisStatus === "error") && (
            <div className="mt-4 p-3 bg-amber-900/20 border border-amber-800/30 rounded-md">
              <div className="flex items-center gap-2 text-amber-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-alert-triangle"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <span>
                  {analysisStatus === "error"
                    ? "Error occurred during analysis. Check your API key setup."
                    : "Using generic recommendations (no image analysis). For personalized analysis, add an OpenAI API key."}
                </span>
              </div>
            </div>
          )}

          {/* Upload New Image Button */}
          <div className="text-center">
            <Button
              onClick={() => {
                setUploadedImage(null)
                setAnalysis(null)
                setMessages([])
                setUsingFallback(false)
                setAnalysisStatus(null)
                if (fileInputRef.current) {
                  fileInputRef.current.value = ""
                }
              }}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Upload New Image
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState<"setup" | "ai">("setup")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    // Let the form submit naturally to Formspree
    // After a short delay, show success popup and clear form
    setTimeout(() => {
      setShowSuccess(true)
      if (formRef.current) {
        formRef.current.reset()
      }
      // Hide popup after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/5 via-black to-purple-900/5 animate-pulse" />

      <header className="border-b border-zinc-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50 transition-all duration-300 hover:border-purple-500/30">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 group">
            <Cpu className="h-6 w-6 text-purple-500 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" />
            <span className="text-lg font-bold transition-all duration-300 group-hover:text-purple-300">vo1d</span>
          </div>
        </div>
      </header>

      <section className="py-32 relative">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-20 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
            <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-6xl animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              vo1d's <span className="text-purple-500 animate-pulse">tech</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-12 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
              Explore my setup or get AI recommendations for yours
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                <button
                  onClick={() => setActiveTab("setup")}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === "setup" ? "bg-purple-600 text-white shadow-lg" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  My Setup
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === "ai" ? "bg-purple-600 text-white shadow-lg" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Ask AI
                </button>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
            {activeTab === "setup" ? <SetupViewer /> : <AskAI />}
          </div>

          {activeTab === "setup" && (
            <div className="mt-16 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1000">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:animate-none"
                  onClick={() => window.open("https://share-a-cart.com/get/UIYX8", "_blank")}
                >
                  Get This Setup
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800 relative animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1200">
        <div className="container">
          <div className="mx-auto max-w-md text-center">
            <h2 className="mb-8 text-2xl font-bold animate-in fade-in-0 slide-in-from-top-4 duration-700">
              Get in Touch
            </h2>
            <form
              ref={formRef}
              action="https://formspree.io/f/manjqara"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-6 duration-700 delay-300"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-zinc-600 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/10"
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={3}
                className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-zinc-600 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/10"
              />
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-1500">
        <div className="container text-center">
          <p className="text-zinc-400 transition-colors duration-300 hover:text-purple-300">© vo1d 2025</p>
        </div>
      </footer>

      {/* Enhanced Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-300">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-sm mx-4 animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 shadow-2xl shadow-green-500/20">
            <div className="text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2 animate-pulse">Sent!</h3>
              <p className="text-zinc-400">Your message has been sent successfully. I'll get back to you soon!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
