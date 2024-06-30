
import Button from '@mui/material/Button';

const Counter = ({ text, count, incremented, decremented }) => {
  const increment = () => incremented();
  const decrement = () => decremented();
  
  return (
    <div style={{ border: "5px solid black", padding: "30px" }}>
      <h1>{text}: {count}</h1>
      <Button variant="outlined" style={{ marginRight: "10px" }} onClick={increment}>Increment</Button>
      <Button variant="outlined" style={{ marginRight: "10px" }} onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default Counter;