import logo from './logo.svg';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App m-5">
      <TodoInput/>
      <TodoList />
    </div>
  );
}

export default App;
