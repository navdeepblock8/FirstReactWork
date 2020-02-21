import React, { Component } from 'react'
//import Main from './main.jsx';
 class Contents extends Component {
    state = { 
        
        value : this.props.value,
        
     };
     
     hIncrement= () =>{
            
        this.setState({value:this.state.value+1}); 
    };
    hDecrement= () =>{
            
        this.state.value !== 0? this.setState({value:this.state.value-1}):this.setState({value:0}); 
    };
    
    render() { 
        console.log('props',this.props);
        const style = {
            color: 'white',
            fontSize: 50
          };
        
        return (
            <div>
                <span style={style} className="badge badge-warning  m-2  ">{this.formatcount()}</span>
                <span className="badge badge-warning  m-2  ">{this.state.name}</span>
                
                <br></br>
                <button onClick={this.hIncrement} className="btn btn-primary btn-sm m-2" >Increment </button> 
                <button onClick={this.hDecrement} className="btn btn-danger btn-sm m-2 " >Decrement </button> </div>);
             }

            formatcount(){
                const {value: count} = this.state;
                return count=== 0 ?"ZERO" : count;
            };
            
            
}
export default Contents;
