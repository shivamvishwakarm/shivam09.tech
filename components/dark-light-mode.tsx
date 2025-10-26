"use client"

import { Moon, Sun } from "lucide-react"
import React from "react"
import { useTheme } from "next-themes"

const DarkLightMode = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Moon
        onClick={() => setTheme("dark")}
        className={`absolute right-0 -top-10 cursor-pointer ${
          theme === "dark" ? "hidden" : "block"
        }`}
      />
      <Sun
        onClick={() => setTheme("light")}
        className={`absolute right-0 -top-10 cursor-pointer ${
          theme === "dark" ? "block" : "hidden"
        }`}
      />
    </>
  )
}

export default DarkLightMode
