// import  { useState } from 'react';
// import './css/Inputbox01.css';

// export interface InputProps {
//     initialPlaceholder: string;
//     finalPlaceholder: string;
//     label: string;
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const Inputbox01: React.FC<InputProps> = ({ initialPlaceholder, finalPlaceholder, label, onChange }) => {
//     const [hovered, setHovered] = useState(false);
//     const [typed, setTyped] = useState('');

//     const handleHover = () => {
//         setHovered(true);
//     };

//     const handleLeave = () => {
//         if (!typed.trim()) {
//             setHovered(false);
//         }
//     };
    

//    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTyped(event.target.value);
//     onChange(event);
//   };

  


//     return (
//         <div className={`input-wrapper ${hovered || typed ? 'hovered' : ''}`} onMouseEnter={handleHover} 
//             onMouseLeave={handleLeave}>
//             <input
//                 type="text"
//                 className="input-box"
//                 placeholder={hovered ? finalPlaceholder : initialPlaceholder }
//                 value={typed}
//                 onChange={handleChange}
//             />
//             {hovered && label && <label className="username-label">{label}</label>}
//         </div>
//     );
// };

// export default Inputbox01;

// import React, { useState } from 'react';
// import './css/Inputbox01.css'; // Assuming you have a CSS file for styling

// export interface InputProps {
//   label: string;
//   finalPlaceholder: string;
//   value: string;
//   onChange: (value: string) => void; // Add onChange prop
// }

// const Inputbox01: React.FC<InputProps> = ({ label, finalPlaceholder, value, onChange }) => {
//   const [isFocused, setIsFocused] = useState<boolean>(false);
//   const [isHovered, setIsHovered] = useState<boolean>(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovered(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     onChange(newValue); // Notify parent component of value change
//   };

//   return (
//     <div className="input-container">
//       <label className={(isHovered || isFocused || value) ? 'visible' : ''} htmlFor="inputField">
//         {label}
//       </label>
//       <input
//         type="text"
//         id="inputField"
//         className={(isFocused || isHovered) ? 'focused' : ''}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onMouseEnter={handleHover}
//         onMouseLeave={handleMouseOut}
//         onChange={handleChange}
//         value={value} // Use value prop here
//         placeholder={isHovered || isFocused ? finalPlaceholder : label}
//       />
//     </div>
//   );
// };

// export default Inputbox01; 



import React, { useState } from 'react';
import './css/Inputbox01.css'; // Assuming you have a CSS file for styling

export interface InputProps {
  label: string;
  finalPlaceholder: string;
  value: string;
  type: string;
  onChange: (value: string) => void; // Add onChange prop
}

const Inputbox01: React.FC<InputProps> = ({ label, finalPlaceholder, value, type, onChange }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleFocus = () => {
    setIsFocused(true);
  };


  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue); // Notify parent component of value change
  };

  return (
    <div className="input-container">      
      <label className={`label ${isHovered || isFocused || inputValue ? 'label-hovered' : ''}`}>
        {label}
      </label>
      <input
        type={type}
        id="inputField"
        className={`input-box ${isFocused || isHovered ? 'focused' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
        onChange={handleChange}
        value={value}      
        placeholder={isHovered || isFocused ? finalPlaceholder : ""}
        autoComplete='off'
      />
    </div>
  );
};

export default Inputbox01; 

