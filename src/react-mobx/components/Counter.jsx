import { observer } from "mobx-react";
import counterStore from "../store/CounterStore";

const Counter = observer(() => (
  <div>
    Count: {counterStore.count}
    <button onClick={() => counterStore.increment()}>Increment</button>
    <button onClick={() => counterStore.decrement()}>Decrement</button>
    <button onClick={() => counterStore.reset()}>Reset</button>
  </div>
));

export default Counter;
