import { Link, Outlet } from "react-router-dom"

export const Product: React.FC = () => {

    return(
    <>
        <div>
            <input type={"search"} placeholder="Search product" />
        </div>
        <nav>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet />
    </>)
}