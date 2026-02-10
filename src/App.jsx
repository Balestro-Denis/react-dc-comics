import { useState } from "react";
import Header from "./components/Header";
import ComicsList from "./components/ComicsList";
import BlueBar from "./components/Bluebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="jumbotron"></div>
        <ComicsList />
        <BlueBar />
      </main>
      <Footer />
    </>
  );
}

export default App;
