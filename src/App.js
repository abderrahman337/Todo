import './App.css';
import {useSelector} from "react-redux";
import Todo from './components/TodoList';
function App() {
  const state = useSelector((state) => ({...state}));
  console.log("state", state);
  return (
    <div className="App">
        <Todo/>
    </div>
  );
}

export default App;
