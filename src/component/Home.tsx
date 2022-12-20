import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return(<>
    <h2>Home Page</h2>
    <button onClick={() => navigate("/order-summary")}> Place Order</button>
    </>)
}