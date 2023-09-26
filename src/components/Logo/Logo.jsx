import { Link } from "react-router-dom";


const Logo = () => {
    return (
            <div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"><img className="w-24" src="https://i.ibb.co/k96p2Xn/Logo.png" alt="" /></Link>
            </div>
    );
};

export default Logo;