import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BadgeCheck, Camera, Video, Sparkles, Instagram, MessageCircle, 
  FileText, Users, Clock, MapPin, Phone, Mail, Star, Heart, 
  HandHeart, Eye, Moon, Sun, Bookmark, Award, BarChart3, 
  TrendingUp, Target, Shield
} from "lucide-react";
import ThreeBackground from "./ThreeBackground";

// Advanced Glass morphism component with premium effects
const Glass = ({ className = "", children, variant = "default", isDark = false }: { 
  className?: string; 
  children: React.ReactNode;
  variant?: "default" | "card" | "hero" | "accent" | "premium";
  isDark?: boolean;
}) => {
  const variants = {
    default: isDark 
      ? "bg-gradient-to-br from-white/8 to-white/3 border-white/20 backdrop-blur-2xl shadow-xl" 
      : "bg-gradient-to-br from-white/40 to-white/20 border-white/30 backdrop-blur-2xl shadow-xl",
    card: isDark 
      ? "bg-gradient-to-br from-gray-900/40 to-slate-900/20 border-white/10 backdrop-blur-3xl shadow-2xl" 
      : "bg-gradient-to-br from-white/60 to-white/30 border-white/40 backdrop-blur-3xl shadow-2xl",
    hero: isDark 
      ? "bg-gradient-to-br from-slate-800/50 to-gray-900/30 border-white/20 backdrop-blur-3xl shadow-2xl" 
      : "bg-gradient-to-br from-white/70 to-rose-50/40 border-white/50 backdrop-blur-3xl shadow-2xl",
    accent: isDark 
      ? "bg-gradient-to-br from-rose-900/30 to-pink-900/20 border-rose-400/20 backdrop-blur-2xl shadow-xl" 
      : "bg-gradient-to-br from-rose-100/60 to-pink-50/40 border-rose-200/40 backdrop-blur-2xl shadow-xl",
    premium: isDark
      ? "bg-gradient-to-br from-amber-900/20 to-yellow-900/10 border-amber-400/20 backdrop-blur-2xl shadow-xl"
      : "bg-gradient-to-br from-amber-50/60 to-yellow-50/40 border-amber-200/40 backdrop-blur-2xl shadow-xl"
  };
  
  return (
    <div className={`rounded-3xl border ${variants[variant]} ${className} relative overflow-hidden`}>
      {/* Premium overlay gradient */}
      <div className={`absolute inset-0 rounded-3xl ${
        variant === "premium" 
          ? isDark 
            ? "bg-gradient-to-br from-amber-400/5 to-transparent" 
            : "bg-gradient-to-br from-amber-300/10 to-transparent"
          : variant === "hero"
            ? isDark
              ? "bg-gradient-to-br from-rose-400/5 to-transparent"
              : "bg-gradient-to-br from-rose-300/8 to-transparent"
            : "bg-gradient-to-br from-white/5 to-transparent"
      }`} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Enhanced chip component
const Chip = ({ icon, children, variant = "default", isDark = false }: { 
  icon?: React.ReactNode; 
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "premium";
  isDark?: boolean;
}) => {
  const variants = {
    default: isDark 
      ? "border-rose-400/30 bg-rose-950/40 text-rose-200" 
      : "border-rose-200/50 bg-rose-50/60 text-rose-800",
    accent: isDark 
      ? "border-rose-400/40 bg-gradient-to-r from-rose-950/50 to-pink-950/50 text-rose-200" 
      : "border-rose-300/60 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800",
    success: isDark 
      ? "border-emerald-400/30 bg-emerald-950/40 text-emerald-200" 
      : "border-emerald-200/50 bg-emerald-50/60 text-emerald-800",
    premium: isDark 
      ? "border-amber-400/30 bg-gradient-to-r from-amber-950/50 to-yellow-950/50 text-amber-200" 
      : "border-amber-200/50 bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800"
  };
  
  return (
    <motion.span 
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${variants[variant]}`}
    >
      {icon} {children}
    </motion.span>
  );
};

// Professional section title with better typography
const SectionTitle = ({ title, subtitle, accent, isDark = false }: { 
  title: string; 
  subtitle?: string;
  accent?: string;
  isDark?: boolean;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="mb-8 text-center"
  >
    <div className="relative inline-block">
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight relative z-10 ${
        isDark 
          ? "text-white drop-shadow-lg" 
          : "text-gray-900 drop-shadow-sm"
      }`}>
        {title}
        {accent && <span className={isDark ? "text-rose-300" : "text-rose-700"}> {accent}</span>}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400"
      />
    </div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`mt-3 max-w-2xl mx-auto ${
          isDark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

/**
 * Professional Influencer Rate Card — Beauty Theme
 * --------------------------------------------------
 * • Tech: React + TypeScript + Tailwind + Framer Motion
 * • Inspired by modern portfolio designs with advanced animations
 * • Glass morphism effects and sophisticated micro-interactions
 * • Optimized for sharing and professional presentation
 */

const DATA = {
  influencer: {
    name: "Aping",
    tagline: "Nano | Beauty, mom & kids | Honest reviews & creative content 🌸",
    // Using your uploaded profile image
    avatar: "/images/profile.jpg",
    location: "Indonesia", 
    phone: "+62 878-7866-6066",
    email: "villy.purnama26@gmail.com",
    specialties: ["Honest Beauty Reviews", "Creative Content", "Mom & Kids Content", "Product Testing & Unboxing"],
    handles: {
      instagram: "@apingxxvi",
      tiktok: "@apingzaynn"
    }
  },
  metrics: {
    instagram: {
      followers: "3.7K", 
      posts: "252", 
      engagement: "4.2%", 
      audience: "87% F • 13% M",
      avgViews: "850", 
      topGeo: ["Jakarta", "Bandung", "Surabaya"],
      status: "aktif", // Real account status
    },
    tiktok: {
      followers: "2.5K", // Real data: 2,479 followers
      engagement: "4.2%",
      audience: "92% F • 8% M",
      avgViews: "1.2K", // Adjusted based on follower count
      topGeo: ["Jakarta", "Medan", "Semarang"],
      totalLikes: "18.9K" // Real data: 18.9K total likes
    },
  },
  achievements: [
    { metric: "3.7K+", label: "Instagram Followers" }, // Real data: 3,654 followers
    { metric: "2.5K+", label: "TikTok Followers" }, // Updated to real data
    { metric: "252", label: "Instagram Posts" }, // Real data: 252 posts
    { metric: "4.2%", label: "Avg Engagement Rate" },
    { metric: "25+", label: "Brand Collaborations" }, // Adjusted for nano influencer
    { metric: "18.9K+", label: "Total TikTok Likes" } // Real data
  ],
  usp: [
    { icon: <Sparkles className="w-4 h-4" />, text: "Authentic product reviews & skincare tips", highlight: true },
    { icon: <BadgeCheck className="w-4 h-4" />, text: "Consistent posting schedule & engagement" },
    { icon: <Users className="w-4 h-4" />, text: "Beauty-focused audience with purchase intent" },
    { icon: <Eye className="w-4 h-4" />, text: "Growing micro-influencer with authentic content" },
  ],
  packages: [
    {
      id: "tiktok-review",
      title: "TikTok Product Review",
      price: "Rp 400.000",
      originalPrice: "Rp 500.000",
      deliverables: [
        "1x TikTok video review (30-60s)",
        "Authentic product testing & honest opinion",
        "Trending audio & hashtag strategy",
        "Raw footage available upon request",
        "1x revision round included"
      ],
      suits: ["Product launches", "Skincare reviews", "Beauty tutorials", "Unboxing content"],
      icon: <Video className="w-5 h-5" />,
      best: true,
      timeline: "3-5 business days",
      features: ["HD Quality", "Natural Lighting", "Authentic Reviews"]
    },
    {
      id: "ig-stories",
      title: "Instagram Stories Package",
      price: "Rp 250.000",
      deliverables: [
        "3-5x Instagram story frames",
        "Product showcase with swipe-up",
        "Behind-the-scenes content",
        "Story highlights inclusion",
      ],
      suits: ["Daily use products", "Quick reviews", "Brand awareness", "Product trials"],
      icon: <Camera className="w-5 h-5" />,
      timeline: "2-3 business days",
      features: ["Multiple Angles", "Natural Scenarios", "Story Templates"]
    },
    {
      id: "dual-platform",
      title: "Dual Platform Content",
      price: "Rp 600.000",
      deliverables: [
        "1x TikTok video (30-45s)",
        "3x Instagram story frames",
        "Cross-platform hashtag strategy",
        "Content adaptation for each platform"
      ],
      suits: ["Maximum reach", "Multi-platform campaigns", "Product launches", "Brand partnerships"],
      icon: <MessageCircle className="w-5 h-5" />,
      timeline: "4-6 business days",
      features: ["Platform Optimization", "Cross-Posting", "Extended Reach"]
    },
  ],
  addons: [
    { label: "Commercial Usage Rights (30 days)", price: "+ Rp 150.000", popular: true },
    { label: "Exclusive Partnership (15 days no‑compete)", price: "+ Rp 250.000" },
    { label: "Raw Footage Package", price: "+ Rp 100.000" },
    { label: "Custom Script Development", price: "+ Rp 100.000" },
    { label: "Rush Delivery (24h turnaround)", price: "+ Rp 150.000" },
    { label: "Additional Platform Adaptation", price: "+ Rp 150.000" }
  ],
  terms: [
    "All rates exclude 11% VAT (applicable for registered businesses).",
    "2x minor revisions included within 5 business days of first draft delivery.",
    "Payment terms: 50% advance to secure booking, 50% upon content approval.",
    "Products must be shipped minimum 10 days before scheduled shoot date.",
    "Honest review policy applies — authentic opinions guaranteed.",
    "Content timeline may vary based on current booking schedule.",
    "📊 Note: Follower & engagement data updated monthly. Real-time metrics available upon request.",
    "🔄 Current data: Instagram 3.7K followers (252 posts), TikTok 2.5K followers, 18.9K total likes (last updated: Aug 2025)."
  ],
  brands: [
    { 
      name: "Wardah", 
      logo: "/images/brands/wardah.png",
      category: "Beauty"
    },
    { 
      name: "Emina", 
      logo: "/images/brands/emina.png",
      category: "Skincare"
    },
    { 
      name: "Pixy", 
      logo: "/images/brands/pixy.png",
      category: "Makeup"
    },
    { 
      name: "Somethinc", 
      logo: "/images/brands/somethinc.png",
      category: "Skincare"
    },
    { 
      name: "Azarine", 
      logo: "/images/brands/azarine.png",
      category: "Skincare"
    },
    { 
      name: "Y.O.U", 
      logo: "/images/brands/you.png",
      category: "Beauty"
    },
    { 
      name: "Implora", 
      logo: "/images/brands/implora.png",
      category: "Makeup"
    },
    { 
      name: "BLP Beauty", 
      logo: "/images/brands/blp.png",
      category: "Beauty"
    },
    { 
      name: "Skintific", 
      logo: "/images/brands/skintific.png",
      category: "Skincare"
    },
    { 
      name: "Maybelline", 
      logo: "/images/brands/maybeline.png",
      category: "Makeup"
    },
    { 
      name: "L'Oreal", 
      logo: "/images/brands/loreal.png",
      category: "Beauty"
    },
    { 
      name: "Sephora", 
      logo: "/images/brands/sephora.png",
      category: "Beauty"
    },
    { 
      name: "Innisfree", 
      logo: "/images/brands/innisfree.png",
      category: "Skincare"
    }
  ]
};

// Advanced animation configurations
const fadeUpAdvanced = (delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      delay
    } 
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const slideIn = (direction: "left" | "right" | "up" | "down" = "up", delay = 0) => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 }
  };
  
  return {
    hidden: {
      ...directions[direction],
      opacity: 0,
      scale: 0.8
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        delay
      }
    }
  };
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// Enhanced Package Card with advanced animations
const PackageCard = ({ pack, index, isDarkMode }: { 
  pack: (typeof DATA.packages)[number]; 
  index: number;
  isDarkMode: boolean;
}) => (
  <motion.div 
    variants={fadeUpAdvanced(index * 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ 
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className="relative group h-full"
  >
    {pack.best && (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", damping: 25, stiffness: 120 }}
        className="absolute -top-3 -right-3 z-10"
      >
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          <Star className="w-3 h-3 inline mr-1" />
          Best Value
        </div>
      </motion.div>
    )}
    
    <Glass 
      variant="card" 
      isDark={isDarkMode}
      className="p-6 h-full relative overflow-hidden group-hover:shadow-2xl transition-all duration-500 flex flex-col"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="p-3 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 text-rose-700"
            >
              {pack.icon}
            </motion.div>
            <div>
              <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{pack.title}</h3>
              <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{pack.timeline}</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-bold ${isDarkMode ? "text-rose-300" : "text-rose-700"}`}>{pack.price}</span>
            {pack.originalPrice && (
              <span className={`text-sm line-through ${isDarkMode ? "text-rose-500" : "text-rose-400"}`}>{pack.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Features */}
        {pack.features && (
          <div className="mb-4 flex flex-wrap gap-1">
            {pack.features.map((feature, i) => (
              <Chip key={i} variant="success" icon={<BadgeCheck className="w-3 h-3" />}>
                {feature}
              </Chip>
            ))}
          </div>
        )}

        {/* Content that grows */}
        <div className="flex-grow">
          {/* Deliverables */}
          <ul className={`mb-4 space-y-2 text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            {pack.deliverables.map((d, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2"
              >
                <BadgeCheck className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                {d}
              </motion.li>
            ))}
          </ul>

          {/* Suitable for */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {pack.suits.map((s, i) => (
              <Chip key={i} icon={<Sparkles className="w-3 h-3" />}>
                {s}
              </Chip>
            ))}
          </div>
        </div>

        {/* WhatsApp Button - Always at bottom */}
        <motion.a
          href={`https://wa.me/6287878666066?text=Halo! Saya tertarik dengan package "${pack.title}". Bisakah Anda berikan informasi lebih lanjut?`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-medium text-sm transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg hover:shadow-emerald-500/25"
              : "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg hover:shadow-emerald-500/25"
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          Order via WhatsApp
        </motion.a>
      </div>
    </Glass>
  </motion.div>
);

export default function RateCardBeauty() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [highlightedUSPIndex, setHighlightedUSPIndex] = useState(0);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Save theme preference and apply to document
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { influencer, metrics, achievements, usp, packages, addons, terms, brands } = DATA;

  // Cycle through USP highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedUSPIndex((prev) => (prev + 1) % usp.length);
    }, 3000); // Change highlight every 3 seconds

    return () => clearInterval(interval);
  }, [usp.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`min-h-screen w-full transition-colors duration-500 overflow-hidden relative ${
        isDarkMode 
          ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" 
          : "bg-gradient-to-br from-rose-50 via-white to-pink-50"
      }`}
    >
      {/* Three.js Interactive Background */}
      <ThreeBackground isDark={isDarkMode} />
      
      {/* Premium background texture */}
      <div className={`absolute inset-0 z-10 ${
        isDarkMode 
          ? "bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] opacity-30"
          : "bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)] opacity-40"
      }`} />
      
      {/* Premium noise texture */}
      <div className={`absolute inset-0 z-10 opacity-[0.02] ${
        isDarkMode 
          ? "bg-gradient-to-br from-slate-800/20 to-gray-900/10" 
          : "bg-gradient-to-br from-rose-100/20 to-pink-100/10"
      }`} style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed top-6 right-6 z-50 p-4 rounded-2xl backdrop-blur-2xl border transition-all duration-300 shadow-xl ${
          isDarkMode 
            ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 text-amber-400 hover:from-white/15 hover:to-white/10 hover:border-white/30" 
            : "bg-gradient-to-br from-white/80 to-white/60 border-white/40 text-slate-700 hover:from-white/90 hover:to-white/70 hover:border-white/50"
        }`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 0 : 180 }}
          transition={{ duration: 0.5, type: "spring", damping: 15 }}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.div>
      </motion.button>



      {/* Hero Section with Premium Effects */}
      <section className="relative min-h-screen flex items-center z-20">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 z-10">
          {/* Main gradient orbs */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl ${
              isDarkMode ? "bg-gradient-to-br from-rose-600/20 to-pink-600/10" : "bg-gradient-to-br from-rose-300/30 to-pink-300/20"
            }`} 
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className={`absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
              isDarkMode ? "bg-gradient-to-br from-purple-600/15 to-rose-600/10" : "bg-gradient-to-br from-purple-300/20 to-rose-300/15"
            }`} 
          />
          
          {/* Central premium glow */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [0.8, 1.1, 0.8] 
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
              isDarkMode 
                ? "bg-gradient-to-br from-rose-900/20 via-pink-900/10 to-purple-900/15" 
                : "bg-gradient-to-br from-rose-100/40 via-pink-100/30 to-purple-100/25"
            }`} 
          />
          
          {/* Floating accent elements */}
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 12, repeat: Infinity }}
            className={`absolute top-1/3 right-1/3 w-32 h-32 rounded-full blur-2xl ${
              isDarkMode ? "bg-amber-600/10" : "bg-amber-300/20"
            }`}
          />
          <motion.div
            animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
            transition={{ duration: 15, repeat: Infinity }}
            className={`absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full blur-2xl ${
              isDarkMode ? "bg-emerald-600/10" : "bg-emerald-300/20"
            }`}
          />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 py-20">
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="show" 
            className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
          >
            {/* Left Content */}
            <motion.div variants={slideIn("left")} className="space-y-8">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-2 rounded-2xl border backdrop-blur-2xl px-5 py-3 text-sm font-medium shadow-xl ${
                  isDarkMode 
                    ? "border-rose-400/30 bg-gradient-to-r from-white/10 to-white/5 text-rose-300" 
                    : "border-rose-200/60 bg-gradient-to-r from-white/90 to-white/70 text-rose-700"
                }`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                Professional Beauty Content Creator
                <div className={`w-2 h-2 rounded-full ${
                  isDarkMode ? "bg-rose-400" : "bg-rose-500"
                } animate-pulse`} />
              </motion.div>

              {/* Main Title */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
                >
                  <span className={`${isDarkMode ? "text-white drop-shadow-lg" : "text-gray-900 drop-shadow-sm"} relative`}>
                    {influencer.name}
                    {/* Premium text glow */}
                    <span className={`absolute inset-0 blur-2xl ${
                      isDarkMode ? "text-rose-400/30" : "text-rose-500/20"
                    }`}>
                      {influencer.name}
                    </span>
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent relative">
                    Rate Card
                    {/* Premium shimmer effect */}
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 opacity-30"
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className={`text-lg max-w-2xl leading-relaxed ${
                    isDarkMode ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  {influencer.tagline}. Creating authentic beauty content with professional lighting, 
                  consistent aesthetic, and shop‑ready framing for your brand's success.
                </motion.p>
              </div>

              {/* USP Cards */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {usp.map((u, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      scale: i === highlightedUSPIndex ? 1.02 : 1
                    }}
                    transition={{ 
                      delay: 0.7 + i * 0.1,
                      scale: { duration: 0.7, ease: "easeOut" }
                    }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`flex items-center gap-3 p-5 rounded-2xl border backdrop-blur-2xl shadow-lg transition-all duration-700 ${
                      i === highlightedUSPIndex 
                        ? isDarkMode
                          ? 'bg-gradient-to-r from-rose-900/40 to-pink-900/30 border-rose-400/30 shadow-rose-500/20 shadow-xl' 
                          : 'bg-gradient-to-r from-rose-100/80 to-pink-100/60 border-rose-300/40 shadow-rose-500/20 shadow-xl'
                        : isDarkMode
                          ? 'bg-gradient-to-r from-white/10 to-white/5 border-white/20'
                          : 'bg-gradient-to-r from-white/80 to-white/60 border-white/40'
                    }`}
                  >
                    <motion.div 
                      whileHover={{ rotate: 10 }}
                      animate={{ 
                        scale: i === highlightedUSPIndex ? 1.1 : 1,
                        rotate: i === highlightedUSPIndex ? [0, 5, -5, 0] : 0
                      }}
                      transition={{ 
                        scale: { duration: 0.7 },
                        rotate: { duration: 0.8, repeat: i === highlightedUSPIndex ? Infinity : 0, repeatDelay: 2 }
                      }}
                      className={`p-3 rounded-xl ${
                        isDarkMode 
                          ? "bg-rose-500/20 text-rose-400" 
                          : "bg-rose-500/10 text-rose-600"
                      }`}
                    >
                      {u.icon}
                    </motion.div>
                    <span className={`text-sm font-medium ${
                      isDarkMode ? "text-rose-200" : "text-rose-800"
                    }`}>{u.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                <Chip variant="accent" isDark={isDarkMode} icon={<MapPin className="w-3 h-3" />}>
                  {influencer.location}
                </Chip>
                <Chip variant="default" isDark={isDarkMode} icon={<Phone className="w-3 h-3" />}>
                  {influencer.phone}
                </Chip>
                <Chip variant="default" isDark={isDarkMode} icon={<Mail className="w-3 h-3" />}>
                  {influencer.email}
                </Chip>
                <motion.a 
                  href="https://instagram.com/apingxxvi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-transform"
                >
                  <Chip variant="premium" isDark={isDarkMode} icon={<Instagram className="w-3 h-3" />}>
                    {influencer.handles.instagram}
                  </Chip>
                </motion.a>
                <motion.a 
                  href="https://tiktok.com/@apingzaynn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-transform"
                >
                  <Chip variant="premium" isDark={isDarkMode} icon={<MessageCircle className="w-3 h-3" />}>
                    {influencer.handles.tiktok}
                  </Chip>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Premium Right Visual */}
            <motion.div 
              variants={slideIn("right", 0.2)} 
              className="relative"
            >
              {/* Premium Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute -top-8 -left-8 w-24 h-24 rounded-3xl blur-xl ${
                  isDarkMode ? "bg-gradient-to-br from-rose-600/30 to-pink-600/20" : "bg-gradient-to-br from-rose-400/40 to-pink-400/30"
                }`}
              />
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl blur-lg ${
                  isDarkMode ? "bg-gradient-to-br from-purple-600/25 to-rose-600/20" : "bg-gradient-to-br from-purple-400/35 to-rose-400/30"
                }`}
              />

              <Glass variant="hero" isDark={isDarkMode} className="p-8 relative overflow-hidden group">
                {/* Premium inner glow */}
                <div className={`absolute inset-0 rounded-3xl ${
                  isDarkMode 
                    ? "bg-gradient-to-br from-rose-400/5 via-transparent to-pink-400/5" 
                    : "bg-gradient-to-br from-rose-200/20 via-transparent to-pink-200/15"
                }`} />
                
                {/* Profile Image Container */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="aspect-[4/5] w-full overflow-hidden rounded-3xl relative group"
                  >
                    {/* Premium border ring with elegant gradient */}
                    <div className={`absolute inset-0 rounded-3xl p-1 ${
                      isDarkMode 
                        ? "bg-gradient-to-br from-rose-400/50 via-pink-400/40 to-amber-400/40" 
                        : "bg-gradient-to-br from-rose-300/70 via-pink-300/60 to-amber-300/50"
                    }`}>
                      <div className={`w-full h-full rounded-[calc(1.5rem-4px)] overflow-hidden relative ${
                        isDarkMode ? "bg-slate-900" : "bg-white"
                      }`}>
                        <img 
                          src={influencer.avatar} 
                          alt="Aping - Professional Hijab Beauty & Lifestyle Influencer | Skincare Expert & Content Creator" 
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "data:image/svg+xml,%3Csvg width='400' height='500' viewBox='0 0 400 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fef7f0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fed7d7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23bg)'/%3E%3Ccircle cx='200' cy='180' r='60' fill='%23f687b3'/%3E%3Cpath d='M120 320 Q200 280 280 320 L280 400 Q200 360 120 400 Z' fill='%23f687b3'/%3E%3Ctext x='200' y='450' text-anchor='middle' font-family='Arial' font-size='28' font-weight='bold' fill='%23744210'%3EAping%3C/text%3E%3Ctext x='200' y='475' text-anchor='middle' font-family='Arial' font-size='16' fill='%23975a16'%3EBeauty Influencer%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        
                        {/* Professional overlay gradient */}
                        <div className={`absolute inset-0 ${
                          isDarkMode 
                            ? "bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" 
                            : "bg-gradient-to-t from-rose-900/20 via-transparent to-transparent"
                        }`} />
                        
                        {/* Premium light reflection */}
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-30"
                        />
                        
                        {/* Professional corner accent */}
                        <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${
                          isDarkMode 
                            ? "bg-rose-400/80 shadow-lg shadow-rose-400/40" 
                            : "bg-rose-500/80 shadow-lg shadow-rose-500/40"
                        }`} />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Professional Name Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="mt-6"
                  >
                    <Glass variant="card" isDark={isDarkMode} className="p-4 text-center">
                      <motion.h3 
                        className={`text-lg font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {influencer.name}
                      </motion.h3>
                      <p className={`text-xs leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Authentic Beauty & Modest Fashion
                      </p>
                      <div className="flex justify-center items-center gap-2 mt-2">
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-rose-400" : "bg-rose-500"}`} />
                        <span className={`text-xs font-medium ${isDarkMode ? "text-rose-300" : "text-rose-600"}`}>
                          Hijab Content Creator
                        </span>
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-rose-400" : "bg-rose-500"}`} />
                      </div>
                    </Glass>
                  </motion.div>
                  
                  {/* Premium Floating Stats */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 1.2, type: "spring", damping: 20, stiffness: 120 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="absolute -bottom-6 -right-6"
                  >
                    <Glass variant="premium" isDark={isDarkMode} className="p-4 shadow-2xl">
                      <div className="text-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.5, type: "spring" }}
                          className={`text-xl font-bold ${isDarkMode ? "text-amber-400" : "text-rose-700"}`}
                        >
                          {metrics.instagram.engagement}
                        </motion.div>
                        <div className={`text-xs font-medium ${isDarkMode ? "text-amber-300/80" : "text-rose-600"}`}>
                          Avg Engagement
                        </div>
                        <div className={`flex justify-center mt-1`}>
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.7 + i * 0.1 }}
                              className={`w-1 h-1 rounded-full mx-0.5 ${
                                isDarkMode ? "bg-amber-400" : "bg-rose-500"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </Glass>
                  </motion.div>
                </div>

                {/* Premium Social Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 grid grid-cols-3 gap-4"
                >
                  {[
                    { icon: Instagram, metric: metrics.instagram.followers, label: "Instagram", color: "from-pink-500 to-rose-500" },
                    { icon: MessageCircle, metric: metrics.tiktok.followers, label: "TikTok", color: "from-purple-500 to-pink-500" },
                    { icon: Heart, metric: metrics.tiktok.totalLikes, label: "Total Likes", color: "from-rose-500 to-red-500" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                      className={`text-center p-4 rounded-2xl backdrop-blur-xl border ${
                        isDarkMode 
                          ? "bg-white/5 border-white/10" 
                          : "bg-white/60 border-white/30"
                      } shadow-lg`}
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} p-2 shadow-lg`}
                      >
                        <stat.icon className="w-full h-full text-white" />
                      </motion.div>
                      <div className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {stat.metric}
                      </div>
                      <div className={`text-xs ${isDarkMode ? "text-rose-300" : "text-rose-600"}`}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </Glass>
            </motion.div>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                variants={slideIn("up", i * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="text-center"
              >
                <Glass variant="accent" isDark={isDarkMode} className="p-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring", damping: 25, stiffness: 120 }}
                    className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    {achievement.metric}
                  </motion.div>
                  <div className={`text-sm mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {achievement.label}
                  </div>
                </Glass>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selected Brand Collaborations */}
      <section className="relative mx-auto max-w-6xl px-4 pb-10 md:pb-14 z-20">
        <SectionTitle title="Selected Brand Collaborations" subtitle="Trusted partnerships and successful campaigns" isDark={isDarkMode} />
        
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <Glass isDark={isDarkMode} className="p-6 md:p-8 overflow-hidden">
            {/* Moving Brand Carousel */}
            <div className="relative overflow-hidden rounded-2xl h-32 mb-6">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex gap-8 items-center h-full"
                style={{ width: "200%" }}
              >
                {/* First set of brands */}
                {brands.map((brand, i) => (
                  <motion.div
                    key={`first-${i}`}
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    onMouseEnter={() => setHoveredBrand(`first-${brand.name}`)}
                    onMouseLeave={() => setHoveredBrand(null)}
                    className={`flex-shrink-0 w-32 h-24 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
                      isDarkMode 
                        ? "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30" 
                        : "bg-white/80 border-white/60 hover:bg-white/95 hover:border-white/80"
                    } flex items-center justify-center p-3 group relative shadow-lg hover:shadow-xl cursor-pointer`}
                    style={{
                      zIndex: hoveredBrand && hoveredBrand.startsWith('first-') && hoveredBrand !== `first-${brand.name}` ? 10 : 30
                    }}
                  >
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} brand logo`}
                      className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,%3Csvg width='128' height='96' viewBox='0 0 128 96' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='128' height='96' fill='%23${isDarkMode ? 'f8fafc' : 'e2e8f0'}' rx='12'/%3E%3Ccircle cx='64' cy='48' r='18' fill='%23${isDarkMode ? '94a3b8' : '64748b'}'/%3E%3C/svg%3E`;
                      }}
                    />
                    
                    {/* Enhanced glow effect on hover */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-all duration-500 ${
                      isDarkMode 
                        ? "bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-rose-400/30" 
                        : "bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-rose-200/40"
                    } blur-sm`} />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out`} />
                    </div>
                    
                    {/* Enhanced Tooltip */}
                    {hoveredBrand === `first-${brand.name}` && (
                      <motion.div
                        initial={{ opacity: 0, x: -10, scale: 0.8, y: -5 }}
                        animate={{ opacity: 1, x: 0, scale: 1, y: 0 }}
                        exit={{ opacity: 0, x: -10, scale: 0.8, y: -5 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30,
                          duration: 0.2 
                        }}
                        className={`absolute top-1/2 -right-28 transform -translate-y-1/2 z-50 ${
                          isDarkMode 
                            ? "bg-slate-900/95 border-white/20 text-white shadow-2xl shadow-purple-500/20" 
                            : "bg-white/95 border-gray-200 text-gray-900 shadow-2xl shadow-purple-500/10"
                        } border backdrop-blur-lg rounded-xl px-4 py-3 text-sm font-medium whitespace-nowrap pointer-events-none`}
                      >
                        <div className="font-semibold text-base mb-1">{brand.name}</div>
                        <div className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          Brand Partner ✨
                        </div>
                        
                        {/* Enhanced arrow with gradient */}
                        <div className={`absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-transparent ${
                          isDarkMode ? "border-r-slate-900/95" : "border-r-white/95"
                        }`} />
                        
                        {/* Subtle glow effect */}
                        <div className={`absolute inset-0 rounded-xl -z-10 blur-md ${
                          isDarkMode ? "bg-purple-500/20" : "bg-purple-500/10"
                        }`} />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {brands.map((brand, i) => (
                  <motion.div
                    key={`second-${i}`}
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    onMouseEnter={() => setHoveredBrand(`second-${brand.name}`)}
                    onMouseLeave={() => setHoveredBrand(null)}
                    className={`flex-shrink-0 w-32 h-24 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
                      isDarkMode 
                        ? "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30" 
                        : "bg-white/80 border-white/60 hover:bg-white/95 hover:border-white/80"
                    } flex items-center justify-center p-3 group relative shadow-lg hover:shadow-xl cursor-pointer`}
                    style={{
                      zIndex: hoveredBrand && hoveredBrand.startsWith('second-') && hoveredBrand !== `second-${brand.name}` ? 10 : 30
                    }}
                  >
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} brand logo`}
                      className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,%3Csvg width='128' height='96' viewBox='0 0 128 96' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='128' height='96' fill='%23${isDarkMode ? 'f8fafc' : 'e2e8f0'}' rx='12'/%3E%3Ccircle cx='64' cy='48' r='18' fill='%23${isDarkMode ? '94a3b8' : '64748b'}'/%3E%3C/svg%3E`;
                      }}
                    />
                    
                    {/* Enhanced glow effect on hover */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-all duration-500 ${
                      isDarkMode 
                        ? "bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-rose-400/30" 
                        : "bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-rose-200/40"
                    } blur-sm`} />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out`} />
                    </div>
                    
                    {/* Enhanced Tooltip */}
                    {hoveredBrand === `second-${brand.name}` && (
                      <motion.div
                        initial={{ opacity: 0, x: -10, scale: 0.8, y: -5 }}
                        animate={{ opacity: 1, x: 0, scale: 1, y: 0 }}
                        exit={{ opacity: 0, x: -10, scale: 0.8, y: -5 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30,
                          duration: 0.2 
                        }}
                        className={`absolute top-1/2 -right-28 transform -translate-y-1/2 z-50 ${
                          isDarkMode 
                            ? "bg-slate-900/95 border-white/20 text-white shadow-2xl shadow-purple-500/20" 
                            : "bg-white/95 border-gray-200 text-gray-900 shadow-2xl shadow-purple-500/10"
                        } border backdrop-blur-lg rounded-xl px-4 py-3 text-sm font-medium whitespace-nowrap pointer-events-none`}
                      >
                        <div className="font-semibold text-base mb-1">{brand.name}</div>
                        <div className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          Brand Partner ✨
                        </div>
                        
                        {/* Enhanced arrow with gradient */}
                        <div className={`absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-transparent ${
                          isDarkMode ? "border-r-slate-900/95" : "border-r-white/95"
                        }`} />
                        
                        {/* Subtle glow effect */}
                        <div className={`absolute inset-0 rounded-xl -z-10 blur-md ${
                          isDarkMode ? "bg-purple-500/20" : "bg-purple-500/10"
                        }`} />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Enhanced gradient fade edges */}
              <div className={`absolute left-0 top-0 w-10 h-full ${
                isDarkMode 
                  ? "bg-gradient-to-r from-slate-800/90 via-slate-800/60 to-transparent" 
                  : "bg-gradient-to-r from-rose-50/95 via-rose-50/70 to-transparent"
              } z-10`} />
              <div className={`absolute right-0 top-0 w-10 h-full ${
                isDarkMode 
                  ? "bg-gradient-to-l from-slate-800/90 via-slate-800/60 to-transparent" 
                  : "bg-gradient-to-l from-rose-50/95 via-rose-50/70 to-transparent"
              } z-10`} />
            </div>
            
            {/* Campaign Performance Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className={`rounded-xl p-4 text-center ${isDarkMode ? "bg-white/5" : "bg-white/60"}`}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  25+
                </motion.div>
                <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Total Collaborations</p>
              </div>
              <div className={`rounded-xl p-4 text-center ${isDarkMode ? "bg-white/5" : "bg-white/60"}`}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                  className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  4.8x
                </motion.div>
                <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Avg Campaign ROI</p>
              </div>
              <div className={`rounded-xl p-4 text-center ${isDarkMode ? "bg-white/5" : "bg-white/60"}`}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.6 }}
                  className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  96%
                </motion.div>
                <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Client Satisfaction</p>
              </div>
              <div className={`rounded-xl p-4 text-center ${isDarkMode ? "bg-white/5" : "bg-white/60"}`}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.8 }}
                  className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  3.2%
                </motion.div>
                <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Avg CTR</p>
              </div>
            </div>
            
            <p className={`mt-6 text-sm text-center ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
              Complete case studies with metrics, engagement analytics, and conversion data available upon request.
            </p>
          </Glass>
        </motion.div>
      </section>

      {/* Packages */}
      <section className="relative mx-auto max-w-6xl px-4 py-10 md:py-14 z-20">
        <SectionTitle title="Core Packages" subtitle="Pick what fits your campaign. Custom bundles available." isDark={isDarkMode} />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 md:grid-cols-3">
          {packages.map((p, i) => (
            <PackageCard key={p.id} pack={p} index={i} isDarkMode={isDarkMode} />
          ))}
        </motion.div>

        {/* Add‑ons */}
        <motion.div variants={fadeUp(0.2)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-7">
          <Glass isDark={isDarkMode} className="p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className={`text-base md:text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Add‑ons</h3>
              <div className="flex flex-wrap gap-2">
                {addons.map((a, i) => (
                  <span key={i} className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs ${
                    isDarkMode 
                      ? "border-rose-400/30 bg-rose-950/40 text-rose-300" 
                      : "border-rose-200 bg-rose-50 text-rose-700"
                  }`}>
                    <Heart className="w-3 h-3" /> {a.label}
                    <span className="ml-1 font-semibold">{a.price}</span>
                  </span>
                ))}
              </div>
            </div>
          </Glass>
        </motion.div>
      </section>

      {/* Audience Analytics */}
      <section className="relative mx-auto max-w-6xl px-4 pb-10 md:pb-14 z-20">
        <SectionTitle title="Audience Analytics" subtitle="Comprehensive audience insights for brand partnerships" isDark={isDarkMode} />
        
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <Glass isDark={isDarkMode} className="p-6 md:p-8">
            
            {/* Key Performance Metrics - Header Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Avg Engagement Rate", value: "4.2%", icon: Heart, color: "rose", trend: "+0.6%", benchmark: "Above avg" },
                { label: "Story Completion", value: "78%", icon: Eye, color: "purple", trend: "+12%", benchmark: "Excellent" },
                { label: "Save Rate", value: "5.8%", icon: Bookmark, color: "emerald", trend: "+2.1%", benchmark: "Top 15%" },
                { label: "Brand Mentions ROI", value: "3.2x", icon: Award, color: "amber", trend: "+0.8x", benchmark: "Premium" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-4 border relative overflow-hidden ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}
                >
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-5 ${
                    metric.color === 'rose' ? 'from-rose-500 to-pink-600' :
                    metric.color === 'purple' ? 'from-purple-500 to-indigo-600' :
                    metric.color === 'emerald' ? 'from-emerald-500 to-teal-600' :
                    'from-amber-500 to-orange-600'
                  }`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className={`w-5 h-5 text-${metric.color}-500`} />
                      <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? "bg-emerald-900/30 text-emerald-300" : "bg-emerald-100 text-emerald-700"}`}>
                        {metric.trend}
                      </span>
                    </div>
                    <div className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {metric.value}
                    </div>
                    <div className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {metric.label}
                    </div>
                    <div className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {metric.benchmark}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Brand Campaign Performance - New Section */}
            <div className="mb-8">
              <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                <TrendingUp className={`w-5 h-5 ${isDarkMode ? "text-rose-400" : "text-rose-600"}`}/>
                Brand Campaign Performance
              </h4>
              
              <div className="grid gap-4 md:grid-cols-3">
                {/* CPM & Cost Efficiency */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Cost Efficiency</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>CPM (Cost per Mille)</span>
                      <span className={`font-bold ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>$2.40</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Cost per Engagement</span>
                      <span className={`font-bold ${isDarkMode ? "text-emerald-300" : "text-emerald-600"}`}>$0.08</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Brand Lift</span>
                      <span className={`font-bold ${isDarkMode ? "text-purple-300" : "text-purple-600"}`}>+15%</span>
                    </div>
                  </div>
                </div>

                {/* Content Performance Types */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Camera className="w-4 h-4 text-rose-500" />
                    <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Top Content Types</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { type: "Skincare Reviews", engagement: 85, color: "from-rose-500 to-pink-500" },
                      { type: "Makeup Tutorials", engagement: 72, color: "from-purple-500 to-indigo-500" },
                      { type: "Product Unboxing", engagement: 68, color: "from-emerald-500 to-teal-500" }
                    ].map((content, index) => (
                      <div key={content.type} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{content.type}</span>
                          <span className={isDarkMode ? "text-white" : "text-gray-900"}>{content.engagement}%</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${content.engagement}%` }}
                            transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
                            className={`h-full bg-gradient-to-r ${content.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand Safety & Authenticity */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Brand Safety</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Content Quality Score</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-12 h-1.5 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                          />
                        </div>
                        <span className={`text-xs font-bold ${isDarkMode ? "text-emerald-300" : "text-emerald-600"}`}>9.5/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Authenticity Rate</span>
                      <span className={`font-bold ${isDarkMode ? "text-emerald-300" : "text-emerald-600"}`}>98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Brand Alignment</span>
                      <span className={`font-bold ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              
              {/* Platform Performance */}
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  <BarChart3 className={`w-5 h-5 ${isDarkMode ? "text-rose-400" : "text-rose-600"}`}/> 
                  Platform Performance
                </h4>
                
                {/* Instagram Stats */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-5 h-5 text-pink-500" />
                      <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Instagram</span>
                    </div>
                    <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{metrics.instagram.engagement} avg</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{metrics.instagram.followers}</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>followers</span>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <span className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{metrics.instagram.posts}</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>posts</span>
                    </div>
                    
                    {/* Engagement Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Engagement Rate</span>
                        <span className={isDarkMode ? "text-rose-300" : "text-rose-600"}>{metrics.instagram.engagement}</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "42%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                        />
                      </div>
                    </div>
                    
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Avg Views: {metrics.instagram.avgViews}
                    </div>
                  </div>
                </div>

                {/* TikTok Stats */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-purple-500" />
                      <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>TikTok</span>
                    </div>
                    <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{metrics.tiktok.engagement} avg</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{metrics.tiktok.followers}</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>followers</span>
                    </div>
                    
                    {/* Engagement Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Engagement Rate</span>
                        <span className={isDarkMode ? "text-purple-300" : "text-purple-600"}>{metrics.tiktok.engagement}</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "42%" }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                    
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"} flex justify-between`}>
                      <span>Avg Views: {metrics.tiktok.avgViews}</span>
                      <span>Total Likes: {metrics.tiktok.totalLikes}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demographics Chart */}
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  <BarChart3 className={`w-5 h-5 ${isDarkMode ? "text-rose-400" : "text-rose-600"}`}/> 
                  Demographics
                </h4>
                
                {/* Gender Distribution */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <h5 className={`font-medium mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Audience Split</h5>
                  
                  {/* Animated Pie Chart Representation */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className={isDarkMode ? "stroke-white/10" : "stroke-gray-200"}
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <motion.path
                          initial={{ strokeDasharray: "0 100" }}
                          whileInView={{ strokeDasharray: "89 100" }}
                          transition={{ duration: 2, delay: 0.5 }}
                          className="stroke-rose-500"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-xs font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>89%</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                        <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Female (89%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${isDarkMode ? "bg-white/20" : "bg-gray-300"}`}></div>
                        <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Male (11%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Age Distribution */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <h5 className={`font-medium mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Age Groups</h5>
                  
                  <div className="space-y-3">
                    {[
                      { range: "18-24", percentage: 35, color: "from-purple-500 to-pink-500" },
                      { range: "25-34", percentage: 45, color: "from-rose-500 to-pink-500" },
                      { range: "35-44", percentage: 15, color: "from-pink-500 to-rose-400" },
                      { range: "45+", percentage: 5, color: "from-rose-400 to-pink-400" }
                    ].map((age, index) => (
                      <div key={age.range} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{age.range}</span>
                          <span className={isDarkMode ? "text-white" : "text-gray-900"}>{age.percentage}%</span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${age.percentage}%` }}
                            transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${age.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audience Quality & Purchasing Power */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <h5 className={`font-medium mb-3 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    <Star className="w-4 h-4 text-amber-500" />
                    Audience Quality
                  </h5>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>High Purchasing Power</span>
                      <span className={`font-bold ${isDarkMode ? "text-emerald-300" : "text-emerald-600"}`}>73%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Beauty Enthusiasts</span>
                      <span className={`font-bold ${isDarkMode ? "text-rose-300" : "text-rose-600"}`}>91%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Active Shoppers</span>
                      <span className={`font-bold ${isDarkMode ? "text-purple-300" : "text-purple-600"}`}>85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Brand Loyalists</span>
                      <span className={`font-bold ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>67%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographic & Timing Data */}
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Geographic & Timing
                </h4>
                
                {/* Top Cities */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <h5 className={`font-medium mb-3 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    <MapPin className="w-4 h-4" />
                    Top Cities
                  </h5>
                  
                  <div className="space-y-3">
                    {metrics.instagram.topGeo.map((city, index) => (
                      <div key={city} className="flex items-center justify-between">
                        <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{city}</span>
                        <div className="flex items-center gap-2">
                          <div className={`w-16 h-1.5 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${[45, 30, 25][index]}%` }}
                              transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                            />
                          </div>
                          <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {[45, 30, 25][index]}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best Posting Times */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <h5 className={`font-medium mb-3 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    <Clock className="w-4 h-4" />
                    Peak Engagement
                  </h5>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>11:00 - 13:00 WIB</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-12 h-1.5 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                          />
                        </div>
                        <span className={`text-xs ${isDarkMode ? "text-amber-300" : "text-amber-600"}`}>Peak</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>19:00 - 21:00 WIB</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-12 h-1.5 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "75%" }}
                            transition={{ duration: 1.5, delay: 1.0 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                        <span className={`text-xs ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>High</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competitive Analysis */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <h5 className={`font-medium mb-3 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    <BarChart3 className="w-4 h-4 text-purple-500" />
                    Market Position
                  </h5>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>vs Beauty Micro-influencers</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-12 h-1.5 rounded-full ${isDarkMode ? "bg-white/10" : "bg-gray-200"}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "78%" }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                          />
                        </div>
                        <span className={`text-xs font-bold ${isDarkMode ? "text-emerald-300" : "text-emerald-600"}`}>Top 22%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Engagement vs Industry</span>
                      <span className={`font-bold ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>+28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Content Quality Score</span>
                      <span className={`font-bold ${isDarkMode ? "text-purple-300" : "text-purple-600"}`}>9.2/10</span>
                    </div>
                  </div>
                </div>

                {/* Growth Metrics */}
                <div className={`rounded-2xl p-4 border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/50"}`}>
                  <h5 className={`font-medium mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Growth Trend</h5>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className={`text-xs mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Monthly Growth</div>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}>+12.5%</span>
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileInView={{ rotate: 360 }}
                          transition={{ duration: 2, delay: 1.2 }}
                        >
                          <Sparkles className="w-4 h-4 text-emerald-500" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", delay: 1.5 }}
                        className="text-white text-xs font-bold"
                      >
                        ↗
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Data Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`mt-6 p-4 rounded-xl border ${
                isDarkMode 
                  ? "bg-amber-900/20 border-amber-400/30 text-amber-200" 
                  : "bg-amber-50/80 border-amber-200/60 text-amber-800"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${isDarkMode ? "bg-amber-800/30" : "bg-amber-100"}`}>
                  <Clock className={`w-4 h-4 ${isDarkMode ? "text-amber-300" : "text-amber-600"}`} />
                </div>
                <div className="space-y-2">
                  <h5 className={`font-semibold text-sm ${isDarkMode ? "text-amber-200" : "text-amber-800"}`}>
                    📊 Real Account Data Status
                  </h5>
                  <div className={`text-xs space-y-1 ${isDarkMode ? "text-amber-300/90" : "text-amber-700"}`}>
                    <p><strong>Current Data:</strong> TikTok @apingzaynn - 2.5K followers, 18.9K total likes</p>
                    <p><strong>Instagram:</strong> @apingxxvi - Data verification in progress</p>
                    <p><strong>Update Frequency:</strong> Monthly manual updates • Real-time API integration available for premium campaigns</p>
                    <p><strong>Last Updated:</strong> August 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Glass>
        </motion.div>
      </section>

      {/* Terms & CTA */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 z-20">
        <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr]">
          <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Glass className="p-5 md:p-6 h-full">
              <h3 className="text-lg font-semibold text-rose-900 flex items-center gap-2"><FileText className="w-5 h-5 text-rose-600"/> Terms & Notes</h3>
              <ul className="mt-3 space-y-2 text-sm text-rose-900/80 list-disc list-inside">
                {terms.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </Glass>
          </motion.div>

          <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Glass className="p-5 md:p-6 h-full">
              <h3 className="text-lg font-semibold text-rose-900 flex items-center gap-2"><HandHeart className="w-5 h-5 text-rose-600"/> Book a Slot</h3>
              <p className="mt-2 text-sm text-rose-900/80">Send brief, timeline, and sample references. I’ll reply within 24 hours.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`mailto:${influencer.email}?subject=Collab%20Inquiry%20-%20Rate%20Card`} className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow transition ${
                  isDarkMode ? "bg-rose-600 text-white hover:bg-rose-700" : "bg-rose-600 text-white hover:bg-rose-700"
                }`}>
                  Email Me
                </a>
                <a href={`https://wa.me/6287878666066?text=Hi%20${encodeURIComponent(influencer.name)}%2C%20I%20want%20to%20collab!`} className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                  isDarkMode ? "border-rose-400/30 bg-white/5 text-rose-300 hover:bg-white/10" : "border-rose-200 bg-white text-rose-700 hover:bg-rose-50"
                }`}>
                  WhatsApp
                </a>
                <button onClick={() => window.print()} className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                  isDarkMode ? "border-rose-400/30 bg-white/5 text-rose-300 hover:bg-white/10" : "border-rose-200 bg-white text-rose-700 hover:bg-rose-50"
                }`}>
                  Print / Save PDF
                </button>
              </div>
            </Glass>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className={`relative border-t backdrop-blur-2xl overflow-hidden z-20 ${
        isDarkMode 
          ? "border-white/10 bg-gradient-to-r from-slate-900/80 to-gray-900/60" 
          : "border-rose-100/60 bg-gradient-to-r from-white/80 to-rose-50/40"
      }`}>
        {/* Footer glow effect */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? "bg-gradient-to-r from-rose-600/5 to-pink-600/5" 
            : "bg-gradient-to-r from-rose-200/10 to-pink-200/5"
        }`} />
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              © {new Date().getFullYear()} {influencer.name}. All rights reserved.
            </motion.span>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`p-2 rounded-xl ${
                  isDarkMode ? "bg-amber-800/30" : "bg-rose-100/60"
                }`}
              >
                <Instagram className={`w-4 h-4 ${isDarkMode ? "text-rose-400" : "text-rose-600"}`}/>
              </motion.div>
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                {influencer.handles.instagram} • {influencer.handles.tiktok}
              </span>
            </motion.div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};
