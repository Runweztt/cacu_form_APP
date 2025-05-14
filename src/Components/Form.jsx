import React, { useState, useEffect, useRef } from 'react';
import './Form.css';


function Form() {
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState([]);

  const Fname = useRef(null);
  const Lname = useRef(null);
  const Femail = useRef(null);
  const Fpassword = useRef(null);
  const Faddress = useRef(null);
  const Fage    = useRef(null)

  useEffect(() => {
    // Trigger loading on first render
    const loadPay = () => {
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    };
    loadPay();
  }, []);

  const SubmitForm = (e) => {
    e.preventDefault();

    const firstName = Fname.current.value.trim();
    const lastName = Lname.current.value.trim();
    const emaiL = Femail.current.value.trim();
    const ADDress = Faddress.current.value.trim();
    const Age    = Fage.current.value.trim()
    const passWord = Fpassword.current.value.trim();

    if (!firstName || !lastName || !emaiL || !ADDress || !passWord || !Age) {
      setFormdata((prev) => [...prev, 'Please fill all fields']);
    } else if (parseInt(Age) < 18){
        setFormdata(prev => [...prev,' You must be at least 18 years old'])
    }
     else {
      const formatted = `First Name: ${firstName}, Last Name: ${lastName}, Email: ${emaiL}, Address: ${ADDress}, Password: ${passWord}`;
      setFormdata((prev) => [...prev, formatted]);

      Fname.current.value = '';
      Lname.current.value = '';
      Femail.current.value = '';
      Faddress.current.value = '';
      Fpassword.current.value = '';
    }
  };

  if (!loading) {
    return <div className="loading">Wait... page is loading.</div>;
  }

  const handleLoginClick = () => {
    window.location.href = "/Cacu";
    

  };

  return (
    <div className='container'>
      <h1>Register</h1>
      <div className='form-container'>
        <form>
          <input type="text" placeholder='firstname' required ref={Fname} />
          <input type="text" placeholder='lastname' required ref={Lname} />
          <input type="email" placeholder='email' required ref={Femail} />
          <input type="number" placeholder='enter age' required ref={Fage} />
          <input type="password" placeholder='password' required ref={Fpassword} />
          <input type="text" placeholder='address' required ref={Faddress} />
          <input onClick={SubmitForm} type="submit" value="submit" />
        </form>
      </div>

      <div>
        {formdata.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>


      
      <button className="btn" onClick={handleLoginClick}> Login</button>
    </div>
  );
}

export default Form;
