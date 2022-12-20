import { useSearchParams } from "react-router-dom"

export const Users: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActivUsers = searchParams.get("filter") === 'active';
    return(<div>
        <h4>User 1</h4>
        <h4>User 2</h4>
        <h4>User 3</h4>
        <div>
           <button onClick={() => setSearchParams({filter: "active"})}>Active Users</button>
           <button onClick={() => setSearchParams({})}>Reset filter</button>
        </div>
        {showActivUsers? <h2>Showing active users</h2> : <h3>Showing all users</h3>}
    </div>)
}