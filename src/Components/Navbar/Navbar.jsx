import {
  MobileScreenShareOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar({ toggleSideNav, NavbarIconValue }) {
  return (
    <nav>
      <section className="flex justify-between items-center py-1 text-sm border-b-2 border-gray-500">
        <div>
          <h3> Welcome to My Company! </h3>
          <p> you have started your 30 day trial </p>
        </div>
        <div>
          <p className="text-xl"> Our architects are here to help </p>
          <Link to="/" className="no-underline">
            Book a free session
          </Link>
        </div>
        <div className="flex gap-3">
          <div
            className="bg-slate-300 rounded-circle p-2"
            onClick={() => toggleSideNav("Cart")}
          >
            <ShoppingCartOutlined />
          </div>
          <div
            className="bg-slate-300  rounded-circle p-2"
            onClick={() => toggleSideNav("kitchen")}
          >
            <MobileScreenShareOutlined />
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
