import css from './albums.module.css'

const Album = ({album}) => {
    const {userId, id, title} = album
    return (
        <div className={css.Albums}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};