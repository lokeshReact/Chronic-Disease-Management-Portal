'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Banner from "@/components/banner";
export default function Home() {
  // const router = useRouter()
  
  

  return (
    <div className={"home"}>
        <Header />
        <Menu />
        <Banner />
    </div>
  );
}
