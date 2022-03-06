import React from "react";
import Navbar from "./components/Navbar";
import Place from "./components/Place";
import data from "./data";
import "./style.css";


export default function App() {
    const dataElement = data.map(item => <Place key={item.title} item={item} />)
    return (
        <div>
            <Navbar />
            <div className="container">
              {dataElement}
            </div>
        </div>
    )
}
