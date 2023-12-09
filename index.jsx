const { useState } = require("react");

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes((prevLikes) => (prevLikes += 1));
  }

  const names = ["Abby", "Bobby", "Cassey"];
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />

      <ul>
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}
