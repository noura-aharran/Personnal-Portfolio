import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Noura Aharran | Big Data & AI Engineering",
  description: "Portfolio of Noura Aharran - Big Data & AI Engineering Student at ENSA Tetouan",
  keywords: ["Big Data", "AI", "Machine Learning", "Portfolio", "Engineering", "ENSA Tetouan", "Data Science"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Global background container */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Enhanced base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/90"></div>
          
          {/* Enhanced blur gradients */}
          <div className="absolute inset-0 overflow-hidden opacity-80">
            <div className="absolute -top-[15%] -right-[20%] w-[80%] h-[70%] bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-transparent rounded-full filter blur-[100px] mix-blend-normal"></div>
            <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-tr from-pink-200/30 via-rose-200/20 to-transparent rounded-full filter blur-[100px] mix-blend-normal"></div>
            <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-gradient-to-tr from-cyan-200/20 via-indigo-200/10 to-transparent rounded-full filter blur-[80px] mix-blend-normal"></div>
          </div>
          
          {/* Premium noise texture overlay with improved opacity */}
          <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none bg-repeat" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23161616'/%3E%3C/svg%3E")`,
              backgroundSize: '250px 250px'
            }}>
          </div>
          
          {/* Enhanced grid pattern with dot overlay */}
          <div className="absolute inset-0 z-0">
            {/* Main grid lines */}
            <div className="h-full w-full" 
              style={{ 
                backgroundImage: `
                  linear-gradient(to right, rgba(99, 102, 241, 0.03) 1px, transparent 1px), 
                  linear-gradient(to bottom, rgba(99, 102, 241, 0.03) 1px, transparent 1px),
                  linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), 
                  linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
                `, 
                backgroundSize: '5rem 5rem, 5rem 5rem, 25rem 25rem, 25rem 25rem',
              }}>
            </div>
            
            {/* Dots at intersections */}
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)`,
                backgroundSize: '5rem 5rem',
                backgroundPosition: '2.5rem 2.5rem'
              }}
            ></div>
            
            {/* Subtle radial spotlight */}
            <div 
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.9), transparent 70%)`,
              }}
            />
          </div>
          
          {/* Subtle pulsing glow */}
          <div className="absolute inset-0 animate-pulse-slow opacity-30">
            <div className="absolute -inset-[10%] bg-gradient-to-tr from-indigo-100/10 via-transparent to-pink-100/10 rounded-full"></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
