import TaskListItem from './task-list-item'

const TaskList = (props) => {
    const { listItems } = props;
    return (
        <ul
            className="list-group">
            {listItems.map(e =><TaskListItem key={Math.ceil(Math.random()*1000000)} value={e} />)}
        </ul>
    )
}

export default TaskList;