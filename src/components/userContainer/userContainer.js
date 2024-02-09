import {useEffect, useState} from "react";
import {userService} from "../sseervices/userService";
import {UserForm} from "./UserForm";
import {Users} from "./Users";

const UserContainer = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        userService.getAll().then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
                <UserForm setPosts={setPosts}/>
            <hr/>
            <Users posts={posts}/>
        </div>
    );
};

export {UserContainer};