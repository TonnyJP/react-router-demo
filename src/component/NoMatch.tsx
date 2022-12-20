import { useNavigate } from "react-router-dom"

export const NoMatchRoute: React.FC = () => {
    const navigate = useNavigate();
    
    setTimeout(() => navigate("/") 
    , 3000)
    return(<h3>No Match to the router</h3>)
}