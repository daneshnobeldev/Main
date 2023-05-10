import Link from "./Link";
import classNames from "classnames";
import {useNavigation} from "../hooks/use-navigation";

function Sidebar({ className }) {
const {currentPath} = useNavigation();
    const links = [
        { label: "Dropdown", path: '/dropdown' },
        { label: "Accordion", path: '/accordion' }
        , { label: "Buttons", path: '/buttons' },
        {label:"Modal",path:'/modal'},
        {label:"Table",path:'/table'}
        
    ];

    const classes = classNames('p-1 mb-3 bg-slate-200', className);

    const renderedLinks = links.map((link) => {     
        return (<Link
            key={link.label}
            to={link.path}
            className={classes}
            activeClassName={currentPath === link.path && 'font-bold border-blue-500  border-l-4 pl-4'}
            >
            {link.label}
        </Link>)
    })

    return <div className={classes}>
        {renderedLinks}
    </div>;

}

export default Sidebar;