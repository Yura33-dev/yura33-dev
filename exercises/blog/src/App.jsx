import './App.css';

const jsxElement = <h1>I am a JSX element</h1>;

const header = (
  <header>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
);

const anotherFragment = (
  <>
    <h1>Welcome to React</h1>
    <h2 style={{ color: 'red' }}>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
);

const footer = (
  <footer>
    <p>Copyright &copy; 2024</p>
  </footer>
);

function App() {
  return (
    <>
      {jsxElement}
      {header}
      {anotherFragment}
      {footer}
    </>
  );
}

export default App;
