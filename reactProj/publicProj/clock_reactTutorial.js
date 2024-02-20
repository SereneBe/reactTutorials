const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("JavaScript file loaded successfully");
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // const element = React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hello, world!"),
  //   React.createElement(
  //     "h2",
  //     null,
  //     "It is ",
  //     new Date().toLocaleTimeString(),
  //     "."
  //   )
  // );
  root.render(element);
}

setInterval(tick, 1000);
