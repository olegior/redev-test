import {Component} from "react";

class TaskDescription extends Component{
    render(){
        return (
            <p
            className="text-center"
            >{this.props.description}</p>
        )
    }
}

export default TaskDescription;