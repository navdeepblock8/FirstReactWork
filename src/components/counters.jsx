import React, { Component } from 'react';

import Contents from './component';
class Counters extends Component {
    state = { 
        
        counters :[
            {value:5}
        ],
        
     };
     addCounter=()=>{
          var joined = this.state.counters.concat(1);
          this.setState({ counters: joined })
         
     }
     delCounter = () =>{
        var joined = this.state.counters.slice(1);
        this.setState({ counters: joined })
       
     }
    render() {
        return (
        <div>
               
            
            {this.state.counters.map(counter =><Contents  value={0} />)}
             
            <button className="btn btn-success btn-lg m-2" onClick={this.addCounter}>Add Counter</button>
            <button className="btn btn-danger btn-lg m-2" onClick={this.delCounter}>Delete Counter</button>
        </div>  );
    }
}
 
export default Counters;