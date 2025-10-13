import { useAuth } from './auth-context.tsx';

const UseAuthPart = () => {
    const { state, dispatch } = useAuth();
    return (
        <>
            {state.loading ? (
                <span>Loading...</span>
            ) : state.user ? (
                <>
                    <p>用户昵称：{state.user.name}</p>
                    <button onClick={() => dispatch({ type: 'logout' })}>注销</button>
                </>
            ) : (
                <button onClick={() => dispatch({ type: 'login', payload: { id: '123', name: 'sangyu' } })}>
                    登录
                </button>
            )}
        </>
    );
};

export default UseAuthPart;
