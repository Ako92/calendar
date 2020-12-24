import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContainer } from "./Styles/appStyles";
import GlobalStyles from "./Styles/globalStyles";
import SplashScreen from "./Screens/Splash";
import { useEffect, useState } from "react";
import Home from "./Screens/Home";

function App() {
  const [renderSplash, setRenderSplash] = useState(true);
  useEffect(() => {
    const AppPromise = new Promise((resolve) => {
      /*
       * using Promise for example to get some async data
       * and after that render the app and remove splash screen
      */
      setTimeout(() => {
        resolve();
      }, 1500);
    });
    AppPromise.then(() => {
      setRenderSplash(false);
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        {renderSplash ? <SplashScreen /> : <Home />}
      </AppContainer>
    </>
  );
}

export default App;
