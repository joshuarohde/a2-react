// <!-- 
// 1. Header comp:


const Header = ({ title, message }) => (// a. Be named "Header".
    // b. Take in TWO props 
    <header> 
      <h1>{title}</h1>
      <p>{message}</p>
    </header>
  );

  ReactDOM.render(<Header />, document.getElementById('root'));

// c. Prompt 1. title 
// d. Prompt 2. message
// e. display the "title" prop in an <h1> tag.
// f. display the "message" prop in a <p> tag.




// 2. Footer comp:


const Footer = ({ message }) => (// a. Be named "Footer".
// b. Take in prop named "message".    
<footer>
      <p>{message || "Copyright © 2023 My Website. All rights reserved."}</p>
    </footer>
  );

  ReactDOM.render(<Footer />, document.getElementById('root'));
// c. display the "message" prop in a <p> tag.
// d. include a default message that says "Copyright © 2023 My Website. All rights reserved."




//IDK -----------------------------------------------------------------------------------------------------------------

// 3. TodoList component:

const TodoList = ({ todos }) => {
    // a. Be named "TodoList".
    // b. Take in a prop named "todos".
    // c. Display the "todos" prop as a list of todo items.
    return (
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" checked={todo.completed} readOnly />
              {todo.text}
            </li>// d. "todo" item should be displayed with a checkbox and its text.
          ))}
        </ul>
        <button>Remove Completed</button>
      </div>  // e. Include a button to remove completed todo items from the list.
    );
  };
  
  // Example usage:
  const todos = [
    { text: "Learn React", completed: false },
    { text: "Build a Todo List", completed: true },
    { text: "Celebrate Progress", completed: false },
  ];
  
  ReactDOM.render(<TodoList todos={todos} />, document.getElementById("root"));


// 4. Card component:






  
  // a. Be named "Card".
  // b. take in four props named "title", "subtitle", "image", and "content".
  const Card = ({ title, subtitle, image, content }) => (
    <div className="card">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <img src={image} alt={subtitle} style={{ width: "100%" }} />
      <p>{content}</p>
    </div>
  );
  // c. display the "title" prop in an <h2> tag.
// d.  display the "subtitle" prop in a <h3> tag.
// e. display the "content" prop in a <p> tag.
// f. display the "image" prop as an <img> tag. 
// -->



  // Render Components for Testing
  ReactDOM.render(
    <div>
      <Header title="Welcome to My Site" message="Thanks for visiting my site." />
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
        image="https://example.com/my-image.jpg"
        content="This is the content of my card."
      />
      <Footer />
    </div>,
    document.getElementById("root")
  );
  