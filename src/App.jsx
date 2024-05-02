import './App.css';
import { TodoList } from "./components/TodoList";



function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      
    >
      <TodoList />     
    </div>
  );
}

export default App;
