import SubmitButton_01 from '../buttons/SubmitButton_01';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/UserLoginForm01.css';
import Inputbox01 from '../inputbox/Inputbox01';

export interface InputField {
  name: string;
  label: string;
  type:string;
  placeholder: string;
}

interface LoginFormProps {
  fields: InputField[];
  heading:string;
  redirectpath: string;
  linklabel: string;
  onSubmit: (inputs: { [key: string]: string }) => void;
}

const LoginForm01: React.FC<LoginFormProps> = ({ fields,heading, redirectpath,linklabel, onSubmit }) => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});

  const handleChange = (name: string, value: string) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputs);
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="heading">
        {heading}
      </div>
      {fields.map(field => (
        <div key={field.name} className="input-container">
          <Inputbox01
            type={field.type}
            label={field.label}
            finalPlaceholder={field.placeholder}
            value={inputs[field.name] || ''}
            onChange={(value: string) => handleChange(field.name, value)}
          />
        </div>
      ))}
        <div className="settings">          
           <label className="custom-checkbox"> 
             {/* <input type="checkbox" /> */}
             <input type="checkbox" name="" id="" />
             <span className="checkmark">Remember me</span> 
                          
           </label>
       
          <div className="link"><Link to={redirectpath} >{linklabel}</Link></div>
        </div>
      <SubmitButton_01 label="Login to Explore More" bg_color="#10ADC0" />
    </form>
  );
}

export default LoginForm01;
