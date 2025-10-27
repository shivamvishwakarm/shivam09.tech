"use client"

import { Moon, Sun } from "lucide-react"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const DarkLightMode = () => {
    const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()
 useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <>
      <Moon
        onClick={() => setTheme("dark")}
        className={`absolute right-0 -top-10 cursor-pointer dark:text-white ${
          theme === "dark" ? "hidden" : "block"
        }`}
      />
      <Sun
        onClick={() => setTheme("light")}
        className={`absolute right-0 -top-10 cursor-pointer dark:text-white ${
          theme === "dark" ? "block" : "hidden"
        }`}
      />
    </>
  )
}

export default DarkLightMode
