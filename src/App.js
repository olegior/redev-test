import './App.css';
import FirstTask from './components/tasks/FirstTask/FirstTask'
import SecondTask from './components/tasks/SecondTask/SecondTask';
import AppHeader from './components/AppCommon/AppHeader'
import {firstTask,secondTask} from './components/DataForTasks'


function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='Tasks mx-auto'>
        <FirstTask content={firstTask}/>
        <SecondTask content={secondTask}/>
      </div>
    </div>
  );
}

export default App;
