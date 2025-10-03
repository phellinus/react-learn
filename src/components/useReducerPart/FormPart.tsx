import React, {useEffect, useReducer} from "react";

interface FormState {
    name: string;
    age: number;
    errors: { name?: string; age?: string },
    submitted:boolean;
}

type FormAction =
    | { type: 'setName'; payload: string }
    | { type: 'setAge'; payload: string }
    | { type: 'validate' }
    | { type: 'resetSubmitted' }

const initialState: FormState = {name: '', age: 0, errors: {},submitted:false}

const formReducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
        case 'setName':
            return {...state, name: action.payload};
        case 'setAge': {
            const age = Number(action.payload);
            return {...state, age};
        }
        case 'validate': {
            const errors: FormState['errors'] = {};
            if (!state.name.trim()) errors.name = '必填';
            if (state.age < 18) errors.age = '必须≥18';

            return { ...state, errors, submitted: true };
        }
        case 'resetSubmitted':
            return { ...state, submitted: false };
        default:
            throw new Error()
    }
}
const FormPart = () => {
    const [ state,dispatch ] = useReducer(formReducer,initialState)

    const handleSubmit =async (e: React.FormEvent) =>{
        e.preventDefault()
        dispatch({ type:'validate' });
    }
    useEffect(() => {
        if (!state.submitted) return;
        if (state.errors.name || state.errors.age) return;
        alert('提交成功');
        dispatch({ type: 'resetSubmitted' });
    }, [state.errors, state.submitted]);

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={state.name}
                    onChange={e => dispatch({ type: 'setName', payload: e.target.value })}
                    placeholder="姓名" />
                { state.errors.name && <span>{state.errors.name}</span> }
                <input
                    type="number"
                    value={state.age ||''}
                    onChange={e => dispatch({type:'setAge',payload:e.target.value})}
                    placeholder="年龄" />
                { state.errors.age && <span>{state.errors.age}</span> }

                <button type='submit'>注册</button>
            </form>
        </>
    )
}

export default FormPart;