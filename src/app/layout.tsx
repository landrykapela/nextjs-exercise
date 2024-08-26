'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { createContext, useEffect, useState } from "react";
import { BaseUrl } from "./utils/constants";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export const TabContext = createContext<any>({});
export const PhotoContext = createContext<any>({});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState<Number>(0)
  const [photos, setPhotos] = useState<any[]>([])

  const loadData = async (): Promise<any> => {
    try {
      const response = await axios.get(BaseUrl);
      console.log("🚀 ~ loadData ~ response:", response.data.data)
      setPhotos(response.data.data)
    }
    catch (error: any) {
      console.log("🚀 ~ loadData ~ error:", error)

    }
  }
  useEffect(() => {
    loadData();
  }, [])
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {/* use provider from context to make context availble */}
        <TabContext.Provider value={{ activeTab, setActiveTab }} >
          <PhotoContext.Provider value={{ photos, setPhotos }} >
            {children}
          </PhotoContext.Provider>
        </TabContext.Provider>
      </body>
    </html>
  );
}
