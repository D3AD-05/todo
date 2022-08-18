import React , {Component} from 'react';

class Welcome extends Component{
   constructor(props){
    super();
   }
    render(){
        return(    <div>
        <h1> class components</h1>
        <label>{this.props.title}</label>
    </div>
        )
    }
}
export default Welcome;