import './CVNavLink.css'
import { NavLink } from 'react-router-dom';
import { useCV } from "./CVProvider";

function CVNavLink(props)
{
    const { navComponents } = useCV();

    function handleClick(event)
    {
        const target = event.currentTarget;
        const navElement = target.closest("nav");
        console.log(navComponents);
        const navComponent = navComponents.find(component => navElement.classList.contains(component.root));
        console.log(navComponent);
    }

    return (
        <NavLink index = {props.artIndex}
            to = {props.article.path}
            className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}
            onClick={(event) => handleClick(event)}>
            <span className="label-default">
                <span className="laptop-span">
                    {props.article.navLinkDescription}
                </span>
                <span className="mobile-span">
                    {props.article.mobileNavLinkDescription}
                </span>
            </span>
            <span className="label-hover">Dropdown</span>
        </NavLink>
    );
}

export default CVNavLink;