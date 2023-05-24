import './App.css';
import FirstComponent from './components/tasks/task-one/first-task'
import AppHeader from './components/app-common/app-header'

function App() {
  const firstTask = {
    listItems : [
      'Заголовок 1 уровня', 
      'Заголовок 2 уровня',
      'Параграф',
      'Маркированный список',
      'Элемент списка'
  ],
  title : 'React: Component',
  description : 'Написать 5 своих компонент, классовых и функциональных. Показать, что ты умеешь их переиспользовать.',
  text : 'Были использованны:'
  }
  return (
    <div className="App">
      <AppHeader />
      <div className='Tasks mx-auto'>
        <FirstComponent content={firstTask}/>
      </div>
    </div>
  );
}

export default App;
