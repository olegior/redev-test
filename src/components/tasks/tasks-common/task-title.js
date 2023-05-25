import {Component} from "react";

class TaskTitle extends Component{
    render(){
        return (
            <h1
            className="text-end fw-bold fst-italic mb-5"
            >{this.props.title}</h1>
        )
    }
}

export default TaskTitle;