import ageisLogo from '../../assets/aegies-logo.png';
import './css/LandingPageHeader.css';

const LandingPageHeader = () => {
    return (
        <div className="header">
          <img src={ageisLogo} alt="logo" />
        </div>
    )
}

export default LandingPageHeader;