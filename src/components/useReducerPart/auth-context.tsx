import {createContext, type Dispatch, type ReactNode, useContext, useReducer} from "react";

export type User = {
    id: string;
    name: string;
} | null

type State = { user: User; loading: boolean };
type Action =
    | { type: 'login'; payload: User }
    | { type: 'logout' }
    | { type: 'loading'; payload: boolean };

function reducer(state: State, action: Action):State {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload, loading: false };
        case 'logout':
            return { ...state, user: null, loading: false };
        case 'loading':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}

type AuthContextValue = {
    state: State;
    dispatch: Dispatch<Action>;
};

const AuthContext = createContext<AuthContextValue|undefined>(undefined);

export function AuthProvider({children}:{children:ReactNode}){
    const [state, dispatch] = useReducer(reducer, {user: null, loading: false});
    const value = { state,dispatch };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(){
    const ctx = useContext(AuthContext);
    if (!ctx){
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return ctx;
}