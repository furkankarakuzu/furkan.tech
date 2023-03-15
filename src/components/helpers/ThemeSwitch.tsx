import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from "../icons";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

    const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

  return theme === "dark" ? (
    <button type="button" name="light" className='bg-transparent border-0' onClick={toggleTheme}>
      <Sun className="fs-4 text-warning" />
    </button>
  ) : (
    <button type="button" name="dark" className='bg-transparent border-0' onClick={toggleTheme}>
      <Moon className="fs-4 text-white" />
    </button>
  );
};