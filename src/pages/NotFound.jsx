import{FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";

function NotFound(){
    return (
        <div className="hero">
            <div className="text-center">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-8">
                        없는 페이지 입니다.
                    </h1>
                    <p className="text-5xl mb-8">404 - Page not found!</p>
                    <Link to="/" className="btn btn-primary btn-lg">
                        <FaHome className="mr-2" />
                        홈으로
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;