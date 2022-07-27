# CUSTOM HOOKS

---

> regular functions... can contain stateful logic...\
> Outsource stateful logic into re-usable functions\
> Unlike "regular functions", custom hooks can use other React hooks and React state

## WHY?

---

> Any similar duplication of code: \
> In real apps, there is a need for refactor\
> Create a function that is of repetitive code... \
> PRO of custom over regular hook, inside custom one it is possible to call the others.\
> Must do: when naming always `useCounter()`

## HOW?

---

> Transfer all the state and useEffect logic into a custom hook function body...\
> when calling useCounter() in a certain component, such a state gets tied to a component
> there is a return value, usually set it to some passed state

### My solution:

**_Within backwardCounter:_**

```
const counter = useCounter(-1);
```

**_Within backwardCounter:_**

```
const counter = useCounter(1);
```

**_Within use-counter.js:_**

```
import { useEffect, useState } from "react";

const useCounter = (increment) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increment);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};
export default useCounter;
```
