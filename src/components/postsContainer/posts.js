import {useEffect, useState} from "react";
import {postsService} from "../../services/PostsService";
import {Post} from "./post";
import {useLocation} from "react-router-dom";


const Posts = () => {
    const {state: {byId}} = useLocation()

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getPostById(byId).then(({data}) => setPosts(data))
    }, [byId]);

    return (
        <div>
            <Post key={posts.id} posts={posts}/>
        </div>
    );
};

export {Posts};