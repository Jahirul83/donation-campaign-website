import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'} 
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                  }
                    >Home</NavLink></li>
                    <li><NavLink to={'/donation'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                  }
                    >Donation</NavLink></li>
                    <li><NavLink to={'/statistics'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                  }
                    >Statistics</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;