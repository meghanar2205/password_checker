import React, { useEffect } from 'react'
import { useState } from 'react';
import './Password.css';

function PassworkStrengthChecker() 
{
    const [name, setName] = useState("");
    const [pass, setPass] = useState("Weak Password");
    const [newPass, setNewPass] = useState("");
    const [passconfirmation, setPassconfirmation] = useState("Password is not same");
    const oldpassword = name;
    useEffect(() => {
        let cap = 0;
        let small = 0;
        let num = 0;
        let splchar = 0;
      for(let i=0;i<name.length;i++)
      {
        if(name[i] >='a' && name[i]<='z' )
            small = 1;
        else if(name[i] >='A' && name[i]<='Z' )
            cap = 1;
        else if(name[i] >='0' && name[i]<='9' )
            num = 1;
        else if((name[i] >=' ' && name[i]<='/') || (name[i] >=':' && name[i]<='@') || (name[i] >='[' && name[i]<='`') || (name[i] >='{' && name[i]<='~'))
            splchar = 1;
      }
      if((splchar === 1) && (small === 1) && (cap === 1) && (num === 1))
      {
        return (
            ()=>{
                setPass("Strong Password");
                document.getElementById('password_strength_desription').style.color = 'green';
            }
        )
      }
    }, [name])

    useEffect(() =>
    {
        if(oldpassword === newPass)
        {
            return () => {
                setPassconfirmation("Password is same");
                document.getElementById('passconfirmationtext_stylings').style.color = 'green';
              }
        }

        else
        {
            return () => {
                setPassconfirmation("Password is not same");
                document.getElementById('passconfirmationtext_stylings').style.color = 'red';
              }
        }
    
      
    }, [newPass, oldpassword])
    
    
    return (
    <>
        <p>Enter you password</p>
        <input type='password' onChange={(e)=>setName(e.target.value)} />
        <p id = "password_strength_desription">{pass}</p>
        <br />
        <p>Re-enter your password</p>
        <input type='password' onChange={(e)=>setNewPass(e.target.value)} />
        <p id = "passconfirmationtext_stylings">{passconfirmation}</p>
    </>
  )
}

export default PassworkStrengthChecker