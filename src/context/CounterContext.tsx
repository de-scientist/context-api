import { createContext } from "react";

interface CounterContext {
    onIncrement: () => void;
    onDecrement: () => void;
    onIncrementWith10: () => void;
    onDecrementWith10: () => void;
}

const CounterContext = createContext<CounterContext>();

export default CounterContext;