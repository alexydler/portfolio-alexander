"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Home/Footer/Footer";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "@/components/Helper/ScrolltoTop";

export default function PortfolioChrome({ children }: { children: React.ReactNode }) {
  const isProjectManagerDemo = usePathname().startsWith("/demos/project-manager");

  if (isProjectManagerDemo) return children;

  return (
    <>
      <ResponsiveNav />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
