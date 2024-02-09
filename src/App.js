import {UserContainer} from "./components/userContainer/userContainer";

const App = () => {
    return (
        <div>
            <h1>You can creat new User</h1>
            <p>The new user will appear at the end of the list</p>
            <UserContainer/>
        </div>
    );
};

export default App;