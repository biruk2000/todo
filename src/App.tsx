import "./App.css";

import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
