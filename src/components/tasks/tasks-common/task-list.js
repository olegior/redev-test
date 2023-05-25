import TaskListItem from './task-list-item'

const TaskList = (props) => {
    const { listItems } = props;
    const pocessedList = listItems.map(value =>
        <TaskListItem
            key={Math.ceil(Math.random() * 1000000)}
            value={value}
        />)
    return (
        <ul
            className="list-group">
            {pocessedList}
        </ul>
    )
}

export default TaskList;