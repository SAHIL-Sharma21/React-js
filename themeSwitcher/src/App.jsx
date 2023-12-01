
import { useState } from 'react'

import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';


function App() {
  
  const [themeMode, setThemeMode] = useState("light");

  //now we are getting method lightTheme and darkTheme but we have not defined their functionality so to solve we can define same function and add functionality it will automatically set the method in theme.js file
  //NOTE: method name should be same for its proper functionality
  //redefining lightTheme mode.
  const lightTheme = () =>{
      setThemeMode("light");
  }

  //redefining darkTheme
  const darkTheme = () =>{
      setThemeMode("dark");
  }

  //actual change in theme
  useEffect(() => {
      document.querySelector('html').classList.remove("light", "dark");
      document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> 
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*ThemeBtn component will come here */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/*Card component will come here */}
                       <Card />
                    </div>
                </div>
            </div>
      </ThemeProvider>
            
  )
}

export default App
