import React, { InputHTMLAttributes } from "react";
import styles from './textfield.module.scss';

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  id: string;
}

export const TextField: React.FC<ITextField> = ({ name, id, value, placeholder, label, onChange, ...rest }) => {
  return (
    <div className={styles.textfield}>
      <label htmlFor={id}>{label}</label>
      <input 
      type="text"
      id={id}
      placeholder={placeholder}
      name={name} 
      value={value} 
      onChange={onChange} />
    </div>

  )
};

export default TextField;
