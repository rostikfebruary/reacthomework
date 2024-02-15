import {Comments} from "../components/commentsContainer/comments";
import {Posts} from "../components/postsContainer/posts";
import {Post} from "../components/postsContainer/post";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>

        </div>
    );
};

export {CommentsPage};