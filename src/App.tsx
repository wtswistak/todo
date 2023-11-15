import { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="p-4 m-4">
        <Button variant="primary" onClick={() => setCount(count + 1)}>
          You clicked {count} times
        </Button>
        Cldick on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
