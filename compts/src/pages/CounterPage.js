import Panel from "../components/Panel";
import Button from "../components/Button";
import { useReducer } from "react";
import { produce } from "immer";
const INCREMENT_COUNT = 'incrementcount';
const DECREMENT_COUNT = 'decrementcount';
const SET_VALUE_TO_ADD = 'setvaltoadd';
const CHANGE_VALUE_TO_ADD = 'changevaltoadd';

function counterReducer(state, action) {

    switch (action.type) {
        case INCREMENT_COUNT:

            state.count = state.count + 1;
            return;


        case DECREMENT_COUNT:

            state.count = state.count - 1
            return;

        case CHANGE_VALUE_TO_ADD:

            state.valueToAdd = action.payload;
            return;

        case SET_VALUE_TO_ADD:

            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;

        default:
            break;
    }
}

function CounterPage() {

    const [state, dispatch] = useReducer(produce(counterReducer), {
        count: 0,
        valueToAdd: 0
    })


    const handleChange = (event) => {

        const val = parseInt(event.target.value || '');
        dispatch({ type: CHANGE_VALUE_TO_ADD, payload: val })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: SET_VALUE_TO_ADD
        })

    }
    return (
        <Panel className="p-3 m-3" >
            <div className="mb-5"> Count is {state.count}</div>
            <div className="flex flex-row gap-x-3 mb-5">
                <Button primary rounded onClick={() => dispatch({ type: INCREMENT_COUNT })}>Increment</Button>
                <Button primary rounded onClick={() => dispatch({ type: DECREMENT_COUNT })}>Decrement</Button>
            </div>
            <form className="flex flex-col w-1/5 gap-y-3 mb-5"
                onSubmit={handleSubmit}
            >
                <label>Add a lot!</label>
                <input type="number" value={state.valueToAdd}

                    className="bg-gray-50 border border-gray-300"
                    onChange={handleChange}
                />
                <Button primary rounded >Submit</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;