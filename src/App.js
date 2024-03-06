import Router from "./components/Router/Router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Rediriger vers la racine ("/") après le montage du composant
    window.history.replaceState(null, '', '/');
  }, []);
  
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
