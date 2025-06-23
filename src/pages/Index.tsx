import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Shield, Brain, Users, MapPin, Activity, ChevronRight, Play, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import ChatbotWidget from "@/components/Chatbot/ChatbotWidget";
const Index = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const features = [{
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze coastal patterns and predict changes"
  }, {
    icon: Waves,
    title: "Real-time Monitoring",
    description: "24/7 surveillance of coastal conditions with instant alerts and notifications"
  }, {
    icon: Shield,
    title: "Threat Detection",
    description: "Early warning system for erosion, flooding, and environmental hazards"
  }, {
    icon: MapPin,
    title: "Geospatial Mapping",
    description: "Interactive maps with satellite imagery and coastal zone visualization"
  }];
  const stats = [{
    value: "500+",
    label: "Coastlines Monitored"
  }, {
    value: "99.8%",
    label: "Accuracy Rate"
  }, {
    value: "24/7",
    label: "Real-time Monitoring"
  }, {
    value: "50+",
    label: "Partner Organizations"
  }];
  const quotes = [{
    text: "The sea, once it casts its spell, holds one in its net of wonder forever.",
    author: "Jacques Cousteau"
  }, {
    text: "We know more about the movement of celestial bodies than about the soil underfoot.",
    author: "Leonardo da Vinci"
  }, {
    text: "The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul.",
    author: "Robert Wyland"
  }];
  const [currentQuote, setCurrentQuote] = useState(0);

  // Auto-rotate quotes every 5 seconds
  useState(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  });
  return <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                Coastrakshak.AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                    User Login
                  </Button>
                </Link>
                <Link to="/admin-login">
                  <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                    Admin Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Beach Background */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative min-h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2070&q=80')`
    }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              AI-Powered Coastal Monitoring
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Protect Our Coastlines with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                Advanced AI
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Monitor, analyze, and protect coastal environments using cutting-edge artificial intelligence. 
              Real-time insights for sustainable coastal management and disaster prevention.
            </p>
            
            {/* Inspirational Quote */}
            <div className="mb-8 max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-blue-300 mx-auto mb-4" />
                  <blockquote className="text-lg text-white/95 italic mb-3">
                    "{quotes[currentQuote].text}"
                  </blockquote>
                  <cite className="text-sm text-blue-200">
                    — {quotes[currentQuote].author}
                  </cite>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 shadow-lg">
                  Start Monitoring
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-slate-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats with improved visibility */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section with Ocean Background */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2070&q=80')`
    }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Coastal Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Harness the power of AI to monitor, analyze, and protect our precious coastlines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Coastline?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the future of coastal monitoring with AI-powered insights and real-time protection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Get Started Now
              </Button>
            </Link>
            <Link to="/admin-login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Admin Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Coastrakshak.AI</span>
            </div>
            <div className="text-gray-400">
              © 2024 Coastrakshak.AI. Protecting coastlines with intelligence.
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>;
};
export default Index;