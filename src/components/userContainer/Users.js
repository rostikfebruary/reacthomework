import {post} from "axios";
import {User} from "./User";

const Users = ({posts}) => {
    return (
        <div>
            {posts.map(post=><User key={post.id} post={post}/>)}
        </div>
    );
};

export {Users};