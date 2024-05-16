import './css/Sidebar01.css';
import { Link } from 'react-router-dom';

interface Page {
    name: string;
    path: string;
    icon:String;
}

interface SidebarProps {
    pages: Page[];
    activePage: string;
    logo: string;
}

const Sidebar01:  React.FC<SidebarProps> = ({ pages, activePage, logo }) => {    

    return(
        <div className="sidebar-container">
            <div className="logo">
                <Link to="/" ><img src={logo} alt="ageis-logo" /></Link>
            </div>
            <div className="menu-icons">           
                {pages.map(page => (
                    <Link key={page.path} to={page.path} className={activePage === page.name ? 'selected' : ''}> 
                        <img src={String(page.icon)} alt={page.name} />
                    </Link>          
                ))}
            </div>
        </div>   
    );
}

export default Sidebar01;