import { useState } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    return {
        count,
        incrementCount : () => {
            setCount(count + 1)
        }
    }
}

export default useCounter;