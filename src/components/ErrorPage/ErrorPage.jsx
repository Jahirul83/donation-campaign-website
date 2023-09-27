import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <h2 className="text-6xl">ERROR</h2>
                <p className="text-2xl mb-5">Page Not Found</p>
                <NavLink to="/"><button className="btn btn-primary">Go back to home</button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;