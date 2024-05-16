import Sidebar01 from "../components/sidebar/Sidebar01";
import {pages}  from '../components/common/constants';
import Logo from '../assets/logo.png';
import './css/ResetPassword.css';

const ResetPassword = () => {
    return(
        <div className="main-container">           
            <div className="sidebar"><Sidebar01 pages={pages} activePage="Reset-Password" logo={Logo} /></div>           
            <div className="reset-password-content">
                Reset Password or Dasboard Page If selected from sidebar using Dashboard icon
            </div>
        </div>
    )
}

export default ResetPassword;