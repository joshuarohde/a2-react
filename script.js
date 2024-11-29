 // 1. Header Component
 const Header = ({ title, message }) => {
  return (
    <header>
      <div id="planet">
        <img
          className="animate__animated animate__pulse animate__infinite animate__slower"
          src="https://www.transparentpng.com/thumb/planet/high-quality-earth-png-png-transparent-free-download--cEiWuV.png"
          alt="high quality earth png png transparent free download @transparentpng.com"
        />
      </div>
      <div id="titles">
        <h1 className="animate__animated animate__pulse animate__infinite animate__slower">{title}</h1>
        <p className="animate__animated animate__pulse animate__infinite animate__slower">{message}</p>
      </div>
    </header>
  );
};

// 2. Footer Component
const Footer = ({ message }) => {
  return (
    <footer>
      <p>{message || "Copyright © 2023 My Website. All rights reserved."}</p>
    </footer>
  );
};

// 3. TodoList Component
const TodoList = ({ todos }) => {
  return (
      <div className="animate__animated animate__fadeIn animate__slow">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.text}
          </li>
        ))}
      </ul>
      <button>Remove Completed</button>
    </div>
  );
};

// 4. Card Component
const Card = ({ title, subtitle, image, content }) => {
  return (
    <div className="animate__animated animate__fadeIn animate__slow , card">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <img src={image} alt={subtitle} style={{ width: "100%" }} />
      <p>{content}</p>
    </div>
  );
};

// Import createRoot from ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Use createRoot instead of ReactDOM.render
root.render(
  <div>
    <Header title="Welcome to My Site" message="Thanks for visiting my site." />
    <content>
    <TodoList
      todos={[
        { text: "Learn React", completed: false },
        { text: "Complete Assignment", completed: false },
        { text: "Take a Break", completed: false },
      ]}
    />
    <Card
      title="My Card Title"
      subtitle="My Card Subtitle"
      image="https://images-assets.nasa.gov/image/61a-s-0139/61a-s-0139~large.jpg?w=1920&h=1257&fit=clip&crop=faces%2Cfocalpoint"
      content="This is the content of my card."
    />
    </content>
    <Footer />
  </div>
);