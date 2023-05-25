import TaskTitle from '../tasks-common/task-title'
import TaskHeader from '../tasks-common/task-header'
import TaskDescription from '../tasks-common/task-description'
import TaskList from '../tasks-common/task-list';

const FirstTask = (props) => {
    const {title, description, text, listItems} = props.content;
    return (
        <div className='border border-success rounded border-1 my-5 p-5'>
            <TaskTitle title = {title}/>
            <TaskDescription description={description} />
            <TaskHeader text={text} />
            <TaskList listItems={listItems}/>
        </div>
    )
}

export default FirstTask;