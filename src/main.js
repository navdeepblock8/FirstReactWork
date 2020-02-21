import React, { Component } from 'react'
import Counters from './components/counters.jsx'
export default class Main extends Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            textAlign :"center",
            
          };
        return (
            <div style ={{textAlign:'center'}}>
                <h1 style={mystyle}>Counting app</h1>
                <Counters ></Counters>
            </div>
        )
    }
}
