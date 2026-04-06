import { ArrowRight, Play, Cpu,Sprout ,Package ,Drone , Satellite, Droplets,  Leaf, CheckCircle, Sparkles, TrendingUp, Droplet, CloudSun, BarChart3 } from "lucide-react";
import agriIot from '@/../public/assets/agri-iot.png'
import droneIot from '@/../public/assets/drone-iot.png'
import FAAS from '@/../public/assets/faas.png'
import Satelite from '@/../public/assets/weather-agri.png'
import SensorProbe from '@/../public/assets/sensor-probe.png'
import infarm from '@/../public/assets/infarm.png'
export const stats = [
  { value: "500+", label: "Farms Empowered", icon: TrendingUp },
  { value: "50K+", label: "Acres Monitored", icon: CloudSun },
  { value: "30%", label: "Water Savings", icon: Droplet },
  { value: "25%", label: "Increase in Yields", icon: BarChart3 },
];

export const solutions = [
  {
    icon: Cpu ,
    image: SensorProbe, // Add your actual image path
    title: "Sensor & IoT Solutions",
    desc: "Real-time soil, weather, and crop monitoring.",
    stat: "24/7 Monitoring",
  },
  {
    icon: Satellite,
    image: Satelite, // Add your actual image path
    title: "Satellite Intelligence",
    desc: "AI-powered crop health monitoring and NDVI mapping.",
    stat: "Precision Analytics",
  },
  {
    icon: Droplets,
    image: agriIot, // Add your actual image path
    title: "Smart Irrigation",
    desc: "Reduce water waste by up to 30% with automated controls.",
    stat: "Save up to 30%",
  },
  {
    icon: Sprout,
    image: FAAS, // Add your actual image path
    title: "Farm as a Service",
    desc: "End-to-end agronomic advisory and support.",
    stat: "Expand farmers' access to expertise",
  },
    {
    icon: Drone,
    image: droneIot, // Add your actual image path
    title: "Drone & Aerial Solutions",
    desc: "End-to-end agronomic advisory and support.",
    stat: "Expand Drone' access to expertise",
  },
     {
    icon: Package,
    image: infarm, // Add your actual image path
    title: "Infarm as a Service",
    desc: "End-to-end package for indoor farming solutions.",
    stat: "Expand Indoor Farming Access",
  },
];

export const products = [
  {
    name: "Crop2X Sensor Probes",
    desc: "Advanced soil monitoring probes measuring moisture, temperature, pH, EC, and nutrient levels in real-time.",
    image: "/assets/sensor-probe.png",
    highlight: "Real-time data",
  },
  {
    name: "Weather Station",
    desc: "Solar-powered micro weather stations providing hyper-local weather data for precise farm planning.",
    image: "/assets/weather-tracker.png",
    highlight: "Hyper-local forecasts",
  },
  {
    name: "Satellite Intelligence Platform",
    desc: "AI-powered Ag5X platform delivering NDVI analysis and predictive insights.",
    image: "/assets/satellite-platform.jpg",
    highlight: "AI-driven insights",
  },
];