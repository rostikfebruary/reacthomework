const User = ({post}) => {
    const { name, username, email} = post
    return (
        <div className={'user-block'}>
            {/*<div>id: {id}</div>*/}
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div className={'email'}>email: {email}</div>
        </div>
    );
};

export {User};