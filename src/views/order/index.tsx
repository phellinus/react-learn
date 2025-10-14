import { useParams } from 'react-router-dom';

const OrderPart = () => {
    const { id } = useParams();

    return (
        <>
            <h2>订单</h2>
            {id}
        </>
    );
};
export default OrderPart;
