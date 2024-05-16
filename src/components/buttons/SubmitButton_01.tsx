import './css/SubmitButton_01.css';

interface ButtonProps {    
    label: string;
    bg_color:String;
  }

const SubmitButton_01 = ({label,bg_color }: ButtonProps) => {
    return(
        <button style={{ backgroundColor: bg_color as any}}>{label}</button>        
    )
}

export default SubmitButton_01;