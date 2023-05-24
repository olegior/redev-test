const TaskListItem = (props) =>{
    const {value} = props;
    return (
        <li className="list-group-item">{value}</li>
    )
}

export default TaskListItem;