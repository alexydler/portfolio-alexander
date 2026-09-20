"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Home/Footer/Footer";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "@/components/Helper/ScrolltoTop";

export default function PortfolioChrome({ children }: { children: React.ReactNode }) {
  const isFullscreenDemo = usePathname().startsWith("/demos/");

  if (isFullscreenDemo) return children;

  return (
    <>
      <ResponsiveNav />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
