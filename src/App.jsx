import React, { useState, useEffect } from 'react';
import './index.css'
import SplashScreen from './SplashScreen/SplashScreen';
import HomePage from './HomePage/HomePAge';
function App() {
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);


  return (
   <>
   {/* {isLoading ? <SplashScreen/> : <HomePage/>} */}
   <HomePage/>
   </>
  );
}

export default App;
