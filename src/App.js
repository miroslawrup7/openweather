import React from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header>
                <div className="container">{<Header />}</div>
            </header>
            <main>
                <div className="container">{<Main />}</div>
            </main>
            <footer>
                <div className="container">{<Footer />}</div>
            </footer>
        </div>
    );
}

export default App;
