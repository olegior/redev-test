import TaskTitle from '../tasks-common/task-title'
import TaskHeader from '../tasks-common/task-header'
import TaskDescription from '../tasks-common/task-description'
import TaskList from '../tasks-common/task-list';


const SecondTask = (props) => {
    const {title, description, text, fn, object} = props.content;
    console.log(object);
    const listItems = Object.entries(object).map(e=>`{ ${e[0]} } : ${e[1]}`)
    return (
        <div className='border border-success rounded border-1 my-5 p-5'>
            <TaskTitle title = {title}/>
            <TaskDescription description={description} />
            <TaskHeader text={text} />
            <button 
                className='btn btn-success w-100 mb-5'
                onClick={fn}>
                Жмяк
            </button>
            <TaskList listItems={listItems} ></TaskList>
        </div>
    )
}

export default SecondTask;