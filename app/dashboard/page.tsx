"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BarChart2, Calendar, Clock, MessageSquare, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Factory images - using AI-generated factory images
const factoryImages = [
  {
    url: "/factory-image-1.png",
    alt: "Advanced robotic assembly line with automated arms working on manufacturing components",
  },
  {
    url: "/factory-image-2.png",
    alt: "Smart factory floor with IoT-connected machines and digital monitoring displays",
  },
  {
    url: "/factory-image-3.png",
    alt: "Precision manufacturing equipment with AI-powered quality control systems",
  },
]

// Sample AI assistant responses for manufacturing questions
const aiResponses: Record<string, string> = {
  "production efficiency":
    "Based on today's data, your production efficiency is at 87%, which is 5% higher than last week. The improvement appears to be related to the recent adjustments to Line 3's conveyor speed.",
  "maintenance schedule":
    "Your next scheduled maintenance is for Machine Unit B7 on Friday at 2:00 PM. Based on vibration sensor data, I also recommend checking Unit A4's bearings within the next 72 hours.",
  bottlenecks:
    "Current production bottlenecks are occurring at Station 4, where processing time is 23% longer than optimal. Analysis suggests recalibrating the precision sensors could resolve this issue.",
  "inventory levels":
    "Raw material inventory is currently at 78% capacity. Based on current production rates, you'll need to reorder aluminum components within 5 days to avoid production delays.",
  "quality issues":
    "Quality control has flagged a 2.3% increase in defects from Assembly Line 2 over the past 24 hours. The vision system indicates potential misalignment in the positioning mechanism.",
  "shift performance":
    "The morning shift is currently outperforming the evening shift by 12% in units per hour. The difference appears to be related to machine warmup procedures that could be standardized.",
  "energy usage":
    "Factory energy consumption is 8% higher than last month. The largest increase is coming from the cooling systems. I recommend scheduling an inspection of the HVAC efficiency.",
  downtime:
    "Total downtime this week is 4.3 hours, primarily due to changeovers on Line 1. This is within expected parameters but could be optimized by sequencing similar products together.",
  "production forecast":
    "Based on current trends and historical data, I project next month's production to reach 28,500 units, approximately 4% higher than this month.",
  "machine learning":
    "Our machine learning models have identified a pattern in the quality control data that suggests a correlation between ambient temperature and precision in Assembly Station 3.",
  "predictive maintenance":
    "Predictive maintenance algorithms indicate that Pump System 2 may require servicing within the next 14 days based on changes in power consumption patterns and vibration signatures.",
  optimization:
    "I've analyzed your production sequences and can suggest an optimized order that could reduce changeover times by approximately 18%, potentially adding 45 minutes of productive time per shift.",
}

export default function Dashboard() {
  const [question, setQuestion] = useState("")
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content:
        "Hello! I'm your ManufactureAI assistant. Ask me anything about your factory operations, production metrics, or maintenance schedules.",
    },
  ])

  const handleSendQuestion = () => {
    if (!question.trim()) return

    // Add user question to chat
    setChatHistory((prev) => [...prev, { role: "user", content: question }])

    // Generate AI response based on keywords in the question
    setTimeout(() => {
      let response =
        "I don't have specific data on that topic yet. Would you like me to analyze this area for your factory?"

      // Check if any keywords match our predefined responses
      for (const [keyword, answer] of Object.entries(aiResponses)) {
        if (question.toLowerCase().includes(keyword)) {
          response = answer
          break
        }
      }

      setChatHistory((prev) => [...prev, { role: "assistant", content: response }])
    }, 500)

    setQuestion("")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-bold">ManufactureAI</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Export Data
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800" size="sm">
              Settings
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Production Overview</CardTitle>
              <CardDescription>Daily manufacturing output</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284 units</div>
              <p className="text-xs text-green-500">↑ 12% from yesterday</p>
              <div className="mt-4 h-[80px] w-full bg-gray-100 rounded-md"></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Efficiency Rate</CardTitle>
              <CardDescription>Overall equipment effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.3%</div>
              <p className="text-xs text-green-500">↑ 3.2% from last week</p>
              <div className="mt-4 h-[80px] w-full bg-gray-100 rounded-md"></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Maintenance</CardTitle>
              <CardDescription>Upcoming scheduled maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 machines</div>
              <p className="text-xs text-amber-500">Next: Line B in 2 days</p>
              <div className="mt-4 h-[80px] w-full bg-gray-100 rounded-md"></div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList>
            <TabsTrigger value="overview">
              <BarChart2 className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="schedule">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </TabsTrigger>
            <TabsTrigger value="realtime">
              <Clock className="mr-2 h-4 w-4" />
              Real-time
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {factoryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-[200px] object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-medium">Factory Zone {index + 1}</h3>
                    <p className="text-sm text-gray-500 mt-1">{image.alt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Production Schedule</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Production Line {item}</p>
                        <p className="text-sm text-gray-500">Product: SKU-{1000 + item * 23}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          {8 + item}:00 - {12 + item}:00
                        </p>
                        <p className="text-sm text-gray-500">Target: {item * 120} units</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="realtime" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Real-time Monitoring</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="rounded-lg border p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Machine {String.fromCharCode(64 + item)}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${item % 3 === 0 ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}
                        >
                          {item % 3 === 0 ? "Warning" : "Operational"}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Temperature</span>
                          <span>{60 + item * 5}°C</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Vibration</span>
                          <span>{0.5 + item * 0.2} mm/s</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Output</span>
                          <span>{20 + item * 8} units/hr</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                AI Assistant
              </CardTitle>
              <CardDescription>Ask questions about your manufacturing data and get instant insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] overflow-y-auto mb-4 space-y-4 p-4 border rounded-md bg-gray-50">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === "user" ? "bg-black text-white" : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Ask about production efficiency, maintenance schedules, bottlenecks..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendQuestion()
                    }
                  }}
                  className="flex-1"
                />
                <Button onClick={handleSendQuestion} className="bg-black text-white hover:bg-gray-800">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
