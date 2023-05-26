import TaskTitle from '../TasksCommon/TaskTitle'
import TaskHeader from '../TasksCommon/TaskHeader'
import TaskDescription from '../TasksCommon/TaskDescription'
import TaskList from '../TasksCommon/TaskList';


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