import {useEffect, useState} from "react";
import {userService} from "../sseervices/userService";
import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";

const CommentContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentContainer};