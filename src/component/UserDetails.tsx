import { useParams } from "react-router-dom"

export const UserDetails: React.FC = () => {
    const params = useParams();
    return(<div>{`Details about user ${params.userId}` }</div>)
}