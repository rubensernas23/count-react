const Count = () => {
  const [count, setCount] = React.useState(0);
  const Increase = () => setCount(count + 1);
  const Decrease = () => setCount(count - 1);

  return (
    <div>
      <h1 className={count < 0 ? "min" : "max"}>Count : {count}</h1>
      <hr />
      <div>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={Increase}>Increase</button>
      </div>
    </div>
  );
};
