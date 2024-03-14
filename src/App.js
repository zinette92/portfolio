import Router from "./components/Router/Router";
import { useEffect } from "react";

// useEffect hook to replace the current URL in the browser history with the root URL when the component mounts
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
