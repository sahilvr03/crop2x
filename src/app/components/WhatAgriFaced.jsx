// components/ProblemSolutionSection.jsx
import { useState, useEffect } from "react";
import {
  Droplet,
  CloudRain,
  Bug,
  Database,
  Satellite,
  Brain,
  LineChart,
  Leaf,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react";
import BackImage from "@/../public/assets/problem-back.png";
export default function WhatAgriFaced() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    { icon: Droplet, title: "Water Scarcity", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", description: "Declining water resources affect crop yields" },
    { icon: CloudRain, title: "Climate Variability", color: "text-gray-300", bg: "bg-gray-500/10", border: "border-gray-500/20", description: "Unpredictable weather patterns threaten harvests" },
    { icon: Bug, title: "Pest & Disease Risks", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", description: "Crop losses due to outbreaks" },
    { icon: Database, title: "Lack of Real-Time Data", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", description: "Delayed decisions impact productivity" }
  ];

  const solutions = [
    { icon: Satellite, title: "IoT Sensors & Satellites",color: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-500/20", description: "Real-time monitoring from field to space" },
    { icon: Brain, title: "AI-Powered Analytics",color: "text-gray-300", bg: "bg-gray-500/10", border: "border-gray-500/20", description: "Predictive insights for better decisions" },
    { icon: LineChart, title: "Data Insights & Predictions", color: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-500/20", description: "Actionable intelligence for farmers" },
    { icon: Leaf, title: "Expert Agronomic Advisory", color: "text-green-300", bg: "bg-green-500/10", border: "border-green-500/20", description: "End-to-end agronomic support" }
  ];

  const workflowSteps = [
    { title: "Data Collection", icon: Satellite, color: "from-blue-600 to-blue-400" },
    { title: "AI Analysis", icon: Brain, color: "from-purple-600 to-purple-400" },
    { title: "Smart Insights", icon: LineChart, color: "from-yellow-600 to-yellow-400" },
    { title: "Better Yield", icon: TrendingUp, color: "from-green-600 to-green-400" }
  ];

  return (
    <section 
      className="relative w-full  py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&h=900&fit=crop")' ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/ via-gray-800/90 to-gray-900/95"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading with animation */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500"></div>
              <span className="text-green-400 text-sm font-semibold tracking-wider">THE CHALLENGE</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Agriculture Faces Growing Challenges
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Climate change, resource scarcity, and data gaps threaten global food security
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* LEFT - Problems */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">
                Current <span className="text-red-400">Challenges</span>
              </h3>
            </div>

            <div className="space-y-4">
              {problems.map((problem, idx) => (
                <div
                  key={idx}
                  className={`group bg-gradient-to-r ${problem.bg} backdrop-blur-sm border ${problem.border} rounded-xl p-5 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${problem.bg} group-hover:scale-110 transition-transform`}>
                      <problem.icon className={`w-6 h-6 ${problem.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg mb-1 ${problem.color}`}>
                        {problem.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{problem.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics Card */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">40%</div>
                  <div className="text-xs text-gray-400">Crop Loss Due to Pests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">70%</div>
                  <div className="text-xs text-gray-400">Water Used by Agriculture</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Solutions */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">
                Crop2X <span className="text-green-400">Solutions</span>
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className={`group bg-gradient-to-r ${solution.bg} backdrop-blur-sm border ${solution.border} rounded-xl p-5 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${solution.bg} group-hover:scale-110 transition-transform`}>
                      <solution.icon className={`w-6 h-6 ${solution.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg mb-1 ${solution.color}`}>
                        {solution.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{solution.description}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Badge */}
            <div className="mt-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-5 border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-green-400 font-semibold">IMPACT</div>
                  <div className="text-2xl font-bold text-white">30% Increase</div>
                  <div className="text-xs text-gray-400">in crop yield with Crop2X</div>
                </div>
                <Shield className="w-12 h-12 text-green-500 opacity-50" />
              </div>
            </div>
          </div>
        </div>

        {/* FLOW DIAGRAM - Improved */}
        <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-300">HOW IT WORKS</span>
            </div>
            <h3 className="text-3xl font-bold mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              From Data to Harvest
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className="group relative">
                  <div className={`bg-gradient-to-r ${step.color} p-4 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-semibold text-gray-300">{step.title}</span>
                  </div>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-500 animate-pulse hidden md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-xs text-gray-400">Real-time Monitoring</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-blue-400">30%</div>
              <div className="text-xs text-gray-400">Water Savings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-purple-400">95%</div>
              <div className="text-xs text-gray-400">Prediction Accuracy</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-yellow-400">50K+</div>
              <div className="text-xs text-gray-400">Farmers Empowered</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}