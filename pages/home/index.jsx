import Image from "next/image";
import React from "react";
import { Inter } from 'next/font/google'
import Herosection from "@/components/banner";
import Nav from "@/components/navbar/nav";
import Batch from "@/components/batch/batch";
import Testmonial from "@/components/testimonial";
import Footer from "@/components/footer/footer";
import Cards from "@/components/cards";
import Faqs from "@/components/faqs";
import Hideshowtabs from "@/components/hideshowtabs";
import CoursesCards from "@/components/coursescards";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Homeindex() {

  return (
    <>
     <main className={`${inter.variable}  flex min-h-screen flex-col w-[100%]`}>
    <Nav/>
    <Batch/>
     <div className="w-[100%]">
      <Herosection/>
      <Testmonial/>
      <Cards/>
      <Hideshowtabs/>
      <CoursesCards/>
      <Faqs/>
     </div>
     <Footer/>
    </main>
    </>
   
  );
}
