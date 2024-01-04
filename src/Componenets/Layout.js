import { Link, Outlet } from "react-router-dom";

const layout=()=>{
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">LogIn</Link>
                </li>

                <li>
                    <Link to="/product/:vendedor/:sucursal">Product</Link>
                </li>

                <li>
                    <Link to="/order/:vendedor/:sucursal">Order</Link>
                </li>

                <li>
                    <Link to="/home/:vendedor/:sucursal">Home</Link>
                </li>

                <li>
                    <Link to="/client/:vendedor/:sucursal">Home</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet/>
    </div>;

}

export default layout;