import css from './header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/todos'}>Todos</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/albums'}>Albums</NavLink>
        </div>
    );
};

export {Header};