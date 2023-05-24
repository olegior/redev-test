import {Component} from "react";

class TaskHeader extends Component{
    render(){
        return (
            <h2
            className="text-start my-5"
            >{this.props.text}</h2>
        )
    }
}

export default TaskHeader;