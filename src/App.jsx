import { useState } from "react";
import Header from "./components/Header";
import ComicsList from "./components/ComicsList";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="jumbotron"></div>
        <ComicsList />
      </main>
    </>
  );
}

export default App;
