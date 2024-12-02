import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import { useParams } from "react-router-dom";


import GithubContext from "../context/github/GithubContext";

function User(){
    const { getUser, user, loading } = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
        getUser(params.login);
    }, []);

    if(loading) {
        return <Spinner />
    }

    return (<div className="text-black">{user.login}</div>)

}

export default User;