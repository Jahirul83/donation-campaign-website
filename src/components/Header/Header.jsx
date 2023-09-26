import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="flex-1">
                <Logo></Logo>
            </div>
            <div>
                <ul className="md:flex gap-3 px-1">
                    <li className="font-bold"><NavLink to={'/'}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                    >Home</NavLink></li>
                    <li className="font-bold"><NavLink to={'/donation'}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                    >Donation</NavLink></li>
                    <li className="font-bold"><NavLink to={'/statistics'}
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