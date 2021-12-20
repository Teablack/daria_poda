import me from "./me.png";
function App() {
  return (
    <div className="App">
      <div className="header">
        <p>Frontend Developer</p>
      </div>
      <div class="intro">
        <img src={me}></img>
        {/* <div> */}
        <p>
          HELLO,
          <br />
          I’m Daria.
        </p>
        {/* </div> */}
      </div>
      <div className="figure">
        <div className="square">
          <div className="arrow-down"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
