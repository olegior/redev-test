import TaskTitle from '../TasksCommon/TaskTitle'
import TaskHeader from '../TasksCommon/TaskHeader'
import TaskDescription from '../TasksCommon/TaskDescription'
import TaskList from '../TasksCommon/TaskList';

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