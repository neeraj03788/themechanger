import { useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react';

function App() {
  const [themeMode, setTheme] = useState('dark');
  const lightTheme=()=>{
    setTheme('light');
  }
  const darkTheme=()=>{
    setTheme('dark');
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])
  return(
    <ThemeProvider value={{lightTheme,darkTheme,themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>

    </ThemeProvider>
   
  )
}

export default App
