"use client";
import { CTA } from "@/components/CTA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BettingSection from "@/components/BettingSection";
import TipsterSection from "@/components/TipsterSection";
import { useRef } from "react";

/**
 * @returns Home page component
 */
export default function Home() {
  const infoViewRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex-1">
      <Header />
      <CTA />
      <Tabs
        defaultValue="account"
        ref={infoViewRef}
        onClick={() => {
          infoViewRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <TabsList className="flex flex-col gap-2 min-[400px]:flex-row">
          <TabsTrigger value="Tipster">For Tipsters</TabsTrigger>

          <TabsTrigger value="Bettor">For Betters</TabsTrigger>
        </TabsList>
        <TabsContent value="Tipster">
          <TipsterSection />
        </TabsContent>
        <TabsContent value="Bettor">
          <BettingSection />
        </TabsContent>
      </Tabs>
      <Footer />
    </main>
  );
}
