import './css/CurrentPage.css';
import Sidebar01 from "../components/sidebar/Sidebar01";
import ManageUserHeader from '../components/header/ManageUserHeader';
import UsersTable from '../components/tables/Table';
import Logo  from "../assets/logo.png";
import {pages}  from '../components/common/constants';

const CurrentPage = () => {    
    return(
        <div className="manage-user-cont">            
            <div className="sidebar"><Sidebar01 pages={pages} activePage="Current" logo={Logo} /></div>
            <div className="user-content">
                <div className="manage-user-header">
                    <ManageUserHeader />                   
                </div>
                <div className="table">
                    <UsersTable />                
                </div> 
            </div>  
        </div>
    )
}

export default CurrentPage;