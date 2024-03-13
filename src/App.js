import Router from "./components/Router/Router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.replaceState(null, "", "/");
  }, []);

  return (
    //Render the Router component
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
