import { useNavigate } from "react-router-dom"

export const OrderSummary: React.FC = () => {
    const navigate = useNavigate()
    return(<>
    <h4>Order Summary</h4>
    <button onClick ={() => navigate("/")}>Back</button>
    </>)
}