const TaskListItem = (props) =>{
    const {value} = props;
    return (
        <li className="list-group-item border-success">{value}</li>
    )
}

export default TaskListItem;