import aparat from "./aparat.png";
import todolist from "./todolist.png";
function App() {
  return (
    <div className="App">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="projects">
        <div className="card">
          <a href="https://teablack.github.io/alex.poda/">
            <img src={aparat} alt=""></img>
          </a>
          <a href="https://github.com/Teablack/alex.poda/tree/main">github</a>
        </div>
        <div className="card">
          <a href="https://teablack.github.io/TodoList-React/">
            <img src={todolist} alt=""></img>
          </a>
          <a href="https://github.com/Teablack/TodoList-React">github</a>
        </div>
      </div>
    </div>
  );
}

export default App;
