import LoginForm01, { InputField} from '../components/form/LoginForm01';
import LandingPageHeader from "../components/header/LandingPageHeader";
import './css/LandingPage.css';

const LandingPage: React.FC = () => {
  const handleLogin = (inputs: { [key: string]: string }) => {
    if (!inputs.email || !inputs.password) {
      alert('Email and password are required!');
      return;
    }

    // Proceed with login logic
    alert(`Email: ${inputs.email}\nPassword: ${inputs.password}`)
  };

  const fields: InputField[] = [
    { name: 'email', label: 'Email', type:"text", placeholder: 'Type...' },
    { name: 'password', label: 'Password', type:"password", placeholder: 'Type...' }
  ]; 

  return ( 
          <>
            <div className="img-area"></div>             
              <div className="header">
                <LandingPageHeader />
              </div>
              <div className="content">
                <div className="left-section">Explore our seamless medical billing features & add-ons, Analytics & Reporting, Insurance Claiming, Medical Scheduling, Payment Processing.</div>
                <div className="right-section">                  
                  <LoginForm01 fields={fields} heading= 'Login to Aegis 360' linklabel='Forget password' redirectpath = '/forget password' onSubmit={handleLogin} />
                </div>
              </div>                   
          </> 
             
          )
        }
     


export default LandingPage;

// MyComponent.tsx

// import React, { useState } from 'react';
// import { login } from '../services/api/Login';

// const LandingPage: React.FC = () => {
//   const [response, setResponse] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async () => {
//     try {
//       const response = await login({ email: 'saurabh2@mail.com', password: 'Arju@0563' });
//       setResponse(response);
//       setError(null);
//     } catch (error:any) {
//       setError(error.message);
//       setResponse(null);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       {response && <p>Response: {JSON.stringify(response)}</p>}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

// export default LandingPage;

