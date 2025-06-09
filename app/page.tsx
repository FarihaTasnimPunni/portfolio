import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Star,
  Heart,
  Sparkles,
  Palette,
  Users,
  Award,
  Coffee,
  BookOpen,
  Target,
  Zap,
  Globe,
  Camera,
  MessageCircle,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#F3E8FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-full opacity-20 blur-xl animate-pulse dark:opacity-10" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] rounded-full opacity-30 blur-lg animate-bounce dark:opacity-10" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-[#E8D5FF] to-[#FFD4C4] rounded-full opacity-15 blur-2xl animate-pulse dark:opacity-10" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-[#F8BBD9]/20 dark:border-gray-800 shadow-sm">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#6B46C1] to-[#F8BBD9] bg-clip-text text-transparent">
              Fariha Punni
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-[#6B46C1] dark:text-gray-200 hover:text-[#F8BBD9] dark:hover:text-[#F8BBD9] transition-all duration-300 font-medium">
              About
            </Link>
            <Link
              href="#services"
              className="text-[#6B46C1] dark:text-gray-200 hover:text-[#F8BBD9] dark:hover:text-[#F8BBD9] transition-all duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-[#6B46C1] dark:text-gray-200 hover:text-[#F8BBD9] dark:hover:text-[#F8BBD9] transition-all duration-300 font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="#achievements"
              className="text-[#6B46C1] dark:text-gray-200 hover:text-[#F8BBD9] dark:hover:text-[#F8BBD9] transition-all duration-300 font-medium"
            >
              Achievements
            </Link>
            <Link
              href="#contact"
              className="text-[#6B46C1] dark:text-gray-200 hover:text-[#F8BBD9] dark:hover:text-[#F8BBD9] transition-all duration-300 font-medium"
            >
              Contact
            </Link>
            <ThemeToggle />
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle className="md:hidden" />
            <Button className="bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] text-white hover:from-[#E8D5FF] hover:to-[#F8BBD9] shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="w-4 h-4 mr-2" /> Resume
            </Button>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden md:py-32">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] text-white border-none">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Available for new projects
                  </Badge>
                  <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                    <span className="bg-gradient-to-r from-[#6B46C1] via-[#F8BBD9] to-[#E8D5FF] bg-clip-text text-transparent">
                      Hi, I'm Fariha
                    </span>
                  </h1>
                  <p className="text-2xl text-[#6B46C1]/80 font-light">
                    Crafting beautiful digital experiences through
                    <span className="font-semibold text-[#F8BBD9]"> UI/UX Design</span>
                  </p>
                </div>
                <p className="text-lg text-[#6B46C1]/70 leading-relaxed">
                  I'm a Information Technology and Management student at Daffodil International University, specializing in creating
                  intuitive and visually stunning digital experiences that users love.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] text-white hover:from-[#E8D5FF] hover:to-[#F8BBD9] shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Palette className="w-5 h-5 mr-2" />
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#F8BBD9] text-[#6B46C1] hover:bg-[#F8BBD9] hover:text-white transition-all duration-300"
                  >
                    <Coffee className="w-5 h-5 mr-2" />
                    Let's Chat
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#6B46C1]">50+</div>
                    <div className="text-sm text-[#6B46C1]/60">Projects</div>
                  </div>
                  <div className="w-px h-12 bg-[#F8BBD9]/30" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#6B46C1]">3+</div>
                    <div className="text-sm text-[#6B46C1]/60">Years Learning</div>
                  </div>
                  <div className="w-px h-12 bg-[#F8BBD9]/30" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#6B46C1]">100%</div>
                    <div className="text-sm text-[#6B46C1]/60">Passion</div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <div className="relative w-80 h-80 overflow-hidden rounded-full border-8 border-white shadow-2xl">
                    <Image
                      src="/photo.png"
                      alt="Fariha Tasnim Punni"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#E8D5FF] to-[#F8BBD9] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8BBD9]/20 to-[#E8D5FF]/20 rounded-full blur-3xl scale-110" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#E8D5FF] to-[#FFD4C4] text-[#6B46C1] dark:text-gray-200 border-none mb-4">
                <Users className="w-3 h-3 mr-1" />
                Get to know me
              </Badge>
              <h2 className="text-4xl font-bold text-[#6B46C1] dark:text-gray-200 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] mx-auto rounded-full" />
            </div>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#6B46C1] dark:text-gray-200 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[#F8BBD9]" />
                  My Story
                </h3>
                <p className="text-[#6B46C1]/80 dark:text-gray-300 leading-relaxed">
                  Hello! I'm Fariha Tasnim Punni, a passionate design enthusiast currently pursuing Information
                  Technology and Management at Daffodil International University. My journey into UI/UX design began
                  with a simple fascination: how can we make technology more human?
                </p>
                <p className="text-[#6B46C1]/80 dark:text-gray-300 leading-relaxed">
                  I believe that great design is not just about making things look pretty—it's about creating meaningful
                  connections between people and technology. Every pixel, every interaction, and every user journey
                  tells a story, and I'm here to make sure it's a beautiful one.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#F8BBD9]/10 to-[#E8D5FF]/10 dark:from-gray-800 dark:to-gray-700 border border-[#F8BBD9]/20 dark:border-gray-700">
                    <BookOpen className="w-8 h-8 text-[#F8BBD9] mb-2" />
                    <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200">Always Learning</h4>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#F8BBD9]/10 to-[#E8D5FF]/10 dark:from-gray-800 dark:to-gray-700 border border-[#F8BBD9]/20 dark:border-gray-700">
                    <Target className="w-8 h-8 text-[#F8BBD9] mb-2" />
                    <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200">Goal Oriented</h4>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#6B46C1] dark:text-gray-200 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#F8BBD9]" />
                  My Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#F8BBD9]/10 to-[#E8D5FF]/10 dark:from-gray-800 dark:to-gray-700 border border-[#F8BBD9]/20 dark:border-gray-700">
                    <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">UI Design</h4>
                    <p className="text-sm text-[#6B46C1]/80 dark:text-gray-300">Creating beautiful and intuitive interfaces</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#F8BBD9]/10 to-[#E8D5FF]/10 dark:from-gray-800 dark:to-gray-700 border border-[#F8BBD9]/20 dark:border-gray-700">
                    <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">UX Design</h4>
                    <p className="text-sm text-[#6B46C1]/80 dark:text-gray-300">Crafting seamless user experiences</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#F8BBD9]/10 to-[#E8D5FF]/10 dark:from-gray-800 dark:to-gray-700 border border-[#F8BBD9]/20 dark:border-gray-700">
                    <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">Prototyping</h4>
                    <p className="text-sm text-[#6B46C1]/80 dark:text-gray-300">Building interactive prototypes</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#F8BBD9]/10 to-[#E8D5FF]/10 dark:from-gray-800 dark:to-gray-700 border border-[#F8BBD9]/20 dark:border-gray-700">
                    <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">Research</h4>
                    <p className="text-sm text-[#6B46C1]/80 dark:text-gray-300">User research and analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#F3E8FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] text-[#6B46C1] dark:text-gray-200 border-none mb-4">
                <Palette className="w-3 h-3 mr-1" />
                What I do
              </Badge>
              <h2 className="text-4xl font-bold text-[#6B46C1] dark:text-gray-200 mb-4">My Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] mx-auto rounded-full" />
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-xl flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">UI Design</h3>
                  <p className="text-[#6B46C1]/80 dark:text-gray-300">
                    Creating beautiful and intuitive interfaces that users love to interact with.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E8D5FF] to-[#FFD4C4] rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">UX Design</h3>
                  <p className="text-[#6B46C1]/80 dark:text-gray-300">
                    Crafting seamless user experiences that solve real problems and delight users.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">Prototyping</h3>
                  <p className="text-[#6B46C1]/80 dark:text-gray-300">
                    Building interactive prototypes to test and validate design solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#E8D5FF] to-[#F8BBD9] text-white border-none mb-4">
                <Star className="w-3 h-3 mr-1" />
                My expertise
              </Badge>
              <h2 className="text-4xl font-bold text-[#6B46C1] mb-4">Skills & Tools</h2>
            </div>
            <Tabs defaultValue="design" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/80 backdrop-blur-sm border border-[#F8BBD9]/20">
                <TabsTrigger
                  value="design"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F8BBD9] data-[state=active]:to-[#E8D5FF] data-[state=active]:text-white"
                >
                  Design Skills
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F8BBD9] data-[state=active]:to-[#E8D5FF] data-[state=active]:text-white"
                >
                  Tools & Software
                </TabsTrigger>
                <TabsTrigger
                  value="soft"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F8BBD9] data-[state=active]:to-[#E8D5FF] data-[state=active]:text-white"
                >
                  Soft Skills
                </TabsTrigger>
              </TabsList>
              <TabsContent value="design" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { skill: "UI Design", level: 95, color: "from-[#F8BBD9] to-[#E8D5FF]" },
                    { skill: "UX Research", level: 88, color: "from-[#E8D5FF] to-[#FFD4C4]" },
                    { skill: "Wireframing", level: 92, color: "from-[#FFD4C4] to-[#F8BBD9]" },
                    { skill: "Prototyping", level: 90, color: "from-[#F8BBD9] to-[#FFD4C4]" },
                    { skill: "User Testing", level: 85, color: "from-[#E8D5FF] to-[#F8BBD9]" },
                    { skill: "Visual Design", level: 93, color: "from-[#FFD4C4] to-[#E8D5FF]" },
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-lg font-semibold text-[#6B46C1]">{item.skill}</h3>
                          <span className="text-sm font-medium text-[#F8BBD9]">{item.level}%</span>
                        </div>
                        <div className="w-full h-3 bg-[#F8BBD9]/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { tool: "Figma", level: 95, icon: "🎨" },
                    { tool: "Adobe XD", level: 88, icon: "🎯" },
                    { tool: "Sketch", level: 82, icon: "✏️" },
                    { tool: "Photoshop", level: 90, icon: "🖼️" },
                    { tool: "Illustrator", level: 85, icon: "🎭" },
                    { tool: "InVision", level: 87, icon: "🔗" },
                    { tool: "Principle", level: 80, icon: "⚡" },
                    { tool: "Framer", level: 75, icon: "🚀" },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-[#6B46C1] mb-2">{item.tool}</h3>
                        <div className="w-full h-2 bg-[#F8BBD9]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-[#F8BBD9] mt-2 block">{item.level}%</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="soft" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { skill: "Communication", level: 95, icon: "💬" },
                    { skill: "Teamwork", level: 92, icon: "🤝" },
                    { skill: "Problem Solving", level: 90, icon: "🧩" },
                    { skill: "Creativity", level: 98, icon: "✨" },
                    { skill: "Time Management", level: 88, icon: "⏰" },
                    { skill: "Adaptability", level: 93, icon: "🌟" },
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{item.icon}</span>
                          <h3 className="text-lg font-semibold text-[#6B46C1]">{item.skill}</h3>
                        </div>
                        <div className="w-full h-3 bg-[#F8BBD9]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-[#F8BBD9] mt-2 block text-right">{item.level}%</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#E8D5FF] to-[#FFD4C4] text-[#6B46C1] dark:text-gray-200 border-none mb-4">
                <Palette className="w-3 h-3 mr-1" />
                My Work
              </Badge>
              <h2 className="text-4xl font-bold text-[#6B46C1] dark:text-gray-200 mb-4">Portfolio</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] mx-auto rounded-full" />
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-[#F8BBD9]/20 dark:border-gray-700">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#F8BBD9] data-[state=active]:text-white dark:data-[state=active]:bg-gray-700">
                  All
                </TabsTrigger>
                <TabsTrigger value="ui" className="data-[state=active]:bg-[#F8BBD9] data-[state=active]:text-white dark:data-[state=active]:bg-gray-700">
                  UI Design
                </TabsTrigger>
                <TabsTrigger value="ux" className="data-[state=active]:bg-[#F8BBD9] data-[state=active]:text-white dark:data-[state=active]:bg-gray-700">
                  UX Design
                </TabsTrigger>
                <TabsTrigger value="branding" className="data-[state=active]:bg-[#F8BBD9] data-[state=active]:text-white dark:data-[state=active]:bg-gray-700">
                  Branding
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="group overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={`/portfolio-${item}.jpg`}
                          alt={`Portfolio item ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-semibold text-white mb-2">Project Title {item}</h3>
                          <p className="text-white/80 text-sm mb-4">UI/UX Design • Branding</p>
                          <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                            View Project
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="ui" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="group overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={`/portfolio-${item}.jpg`}
                          alt={`UI Design ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-semibold text-white mb-2">UI Design {item}</h3>
                          <p className="text-white/80 text-sm mb-4">User Interface Design</p>
                          <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                            View Project
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="ux" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[4, 5, 6].map((item) => (
                  <Card key={item} className="group overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={`/portfolio-${item}.jpg`}
                          alt={`UX Design ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-semibold text-white mb-2">UX Design {item}</h3>
                          <p className="text-white/80 text-sm mb-4">User Experience Design</p>
                          <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                            View Project
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="branding" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="group overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={`/portfolio-${item}.jpg`}
                          alt={`Branding ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-semibold text-white mb-2">Branding {item}</h3>
                          <p className="text-white/80 text-sm mb-4">Brand Identity Design</p>
                          <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                            View Project
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#F3E8FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] text-[#6B46C1] dark:text-gray-200 border-none mb-4">
                <Award className="w-3 h-3 mr-1" />
                My Journey
              </Badge>
              <h2 className="text-4xl font-bold text-[#6B46C1] dark:text-gray-200 mb-4">Achievements</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] mx-auto rounded-full" />
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">Google UX Design</h3>
                  <p className="text-[#6B46C1]/80 dark:text-gray-300">
                    Professional Certificate in UX Design from Google
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E8D5FF] to-[#FFD4C4] rounded-xl flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">Design Awards</h3>
                  <p className="text-[#6B46C1]/80 dark:text-gray-300">
                    Multiple awards for innovative UI/UX design solutions
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6B46C1] dark:text-gray-200 mb-2">Client Success</h3>
                  <p className="text-[#6B46C1]/80 dark:text-gray-300">
                    Successfully delivered 50+ projects for satisfied clients
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] text-white border-none mb-4">
                <MessageCircle className="w-3 h-3 mr-1" />
                Kind words
              </Badge>
              <h2 className="text-4xl font-bold text-[#6B46C1] mb-4">What People Say</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Sarah Ahmed",
                  role: "Professor, DIU",
                  content:
                    "Fariha consistently demonstrates exceptional creativity and technical skills in her design work. Her attention to user experience is remarkable.",
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Rahul Hassan",
                  role: "Senior Designer, TechCorp",
                  content:
                    "Working with Fariha on our university project was amazing. She brings fresh perspectives and always delivers high-quality designs.",
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Marium Khan",
                  role: "UX Lead, StartupXYZ",
                  content:
                    "Fariha's design thinking process is impressive. She truly understands user needs and translates them into beautiful, functional designs.",
                  avatar: "/placeholder.svg?height=60&width=60",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFD4C4] text-[#FFD4C4]" />
                      ))}
                    </div>
                    <p className="text-[#6B46C1]/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#6B46C1]">{testimonial.name}</h4>
                        <p className="text-sm text-[#F8BBD9]">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#E8D5FF] to-[#FFD4C4] text-[#6B46C1] dark:text-gray-200 border-none mb-4">
                <MessageCircle className="w-3 h-3 mr-1" />
                Get in Touch
              </Badge>
              <h2 className="text-4xl font-bold text-[#6B46C1] dark:text-gray-200 mb-4">Contact Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] mx-auto rounded-full" />
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#6B46C1] dark:text-gray-200">Let's Work Together</h3>
                  <p className="text-[#6B46C1]/80 dark:text-gray-300">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200">Email</h4>
                      <p className="text-[#6B46C1]/80 dark:text-gray-300">fariha@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#E8D5FF] to-[#FFD4C4] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200">Phone</h4>
                      <p className="text-[#6B46C1]/80 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#6B46C1] dark:text-gray-200">Location</h4>
                      <p className="text-[#6B46C1]/80 dark:text-gray-300">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-full flex items-center justify-center text-white hover:from-[#E8D5FF] hover:to-[#F8BBD9] transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-[#E8D5FF] to-[#FFD4C4] rounded-full flex items-center justify-center text-white hover:from-[#FFD4C4] hover:to-[#E8D5FF] transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-[#FFD4C4] to-[#F8BBD9] rounded-full flex items-center justify-center text-white hover:from-[#F8BBD9] hover:to-[#FFD4C4] transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-[#F8BBD9]/20 dark:border-gray-700">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[#6B46C1] dark:text-gray-200">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-[#F8BBD9]/20 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-[#6B46C1] dark:text-gray-200 placeholder:text-[#6B46C1]/50 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8BBD9] dark:focus:ring-gray-700"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[#6B46C1] dark:text-gray-200">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-[#F8BBD9]/20 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-[#6B46C1] dark:text-gray-200 placeholder:text-[#6B46C1]/50 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8BBD9] dark:focus:ring-gray-700"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-[#6B46C1] dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-[#F8BBD9]/20 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-[#6B46C1] dark:text-gray-200 placeholder:text-[#6B46C1]/50 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8BBD9] dark:focus:ring-gray-700"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] text-white hover:from-[#E8D5FF] hover:to-[#F8BBD9] shadow-lg hover:shadow-xl transition-all duration-300">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#F3E8FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#F8BBD9] to-[#E8D5FF] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#6B46C1] to-[#F8BBD9] bg-clip-text text-transparent">
                Fariha Punni
              </span>
            </div>
            <p className="text-center text-[#6B46C1]/80 dark:text-gray-300 md:text-left">
              © 2024 Fariha Tasnim Punni. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
