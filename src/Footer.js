import React from "react";
import "./CSS/Style.css";
import {ZURI, HNG, I4G} from "./components/Footer";

export default function Footer () {
    return (
        <>
          <div id='footer'>
            <ZURI 
            className='zuri-text'
            />
            <HNG 
            className='hng-text'
            />
            <I4G />
          </div>
        </>
    )    
}