import css from './comments.module.css'
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    console.log(comment)
    const navigate = useNavigate()

    return (
        <div className={css.Comments}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate('posts', {state: {byId:postId}})}>post</button>
        </div>
    );
};

export {Comment};