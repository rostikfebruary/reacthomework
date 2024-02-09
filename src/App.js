import {CommentContainer} from "./components/userContainer/commentContainer";

const App = () => {
    return (
        <div>
            <h1>You can creat new Comment</h1>
            <p>The new comment will appear at the end of the list</p>
            <CommentContainer/>
        </div>
    );
};

export default App;