import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
    <div class="row">
      <div class="column">
          <Link to="/">Home</Link>
      </div>
      <div class="column">
          <Link to="/pageroute">PageRoute</Link>
      </div>
      <div class="column">
          <Link to="/pageroute2">PageRoute2</Link>
      </div>
      <div class="column">
      <Link to="/route2">Route2</Link>
      </div>
      <div class="column">
      <Link to="/tute">Tute</Link>
      </div>
    </div>
      <Outlet />
    </>
  )
};

export default Layout;