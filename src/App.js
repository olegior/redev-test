import './App.css';
import FirstTask from './components/tasks/first-task/first-task'
import SecondTask from './components/tasks/second-task/second-task';
import AppHeader from './components/app-common/app-header'
import {firstTask,secondTask} from './components/data-for-tasks'


function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='Tasks mx-auto'>
        <FirstTask content={firstTask}/>
        {/* <hr className='border border-success border-5 my-5'/> */}
        <SecondTask content={secondTask}/>
      </div>
    </div>
  );
}

export default App;
