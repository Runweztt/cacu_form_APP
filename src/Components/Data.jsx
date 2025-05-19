import React, { useEffect, useRef, useState } from 'react';
import MainData from './MainData';

function Data() {
  const maindata = new MainData(
    'Emmanuel',
    'Amarikwa',
    'amarikwa',
    'pass',
    '1234 Lagos, Nigeria'
  );

  // Optional API request format
  const jsonData = maindata.toJSON();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Trigger loading on first render
    const loadPay = () => {
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    };
    loadPay();
  }, []);



  if (!loading) {
    return <div className="loading">Wait... page is loading.</div>;
  }

  


  const [formdata, setFormdata] = useState([])

  const nameinput = useRef(null)
  const emailinput = useRef(null)
  const passinput = useRef(null)

  const submitForm = (e) =>{
    e.preventDefault();

    const name = nameinput.current.value.trim()
    const email = emailinput.current.value.trim()
    const passW = passinput.current.value.trim()

     if(!name || !email || !passW){
       setFormdata(prev =>[...prev, `plesea fill the above form`])
     } else{
       setFormdata(prev =>[...prev, `Name: ${name} Email: ${email} Password: ${passW}`])

       nameinput.current.value =''
       emailinput.current.value =''
       passinput.current.value =''
     }
  }
  




  return (
    <>
    <div style={{ padding: '20px' }}>
      <h2>User Data Preview</h2>
      <p><strong>Full Name:</strong> {maindata.getFullName()}</p>
      <p><strong>Email:</strong> {maindata.email}</p>
      <p><strong>Valid Email:</strong> {maindata.isEmailValid() ? 'Yes' : 'No'}</p>
      <p><strong>Address:</strong> {maindata.address}</p>
      <p><strong>Password Masked:</strong> {maindata.hidePassword()}</p>
      <p><strong>Strong Password:</strong> {maindata.isStrongPassword() ? 'Yes' : 'No'}</p>

      <h4>API Ready Format:</h4>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>

     
    <div>
      <form action="">
        <input type="text" placeholder='fill name.....' required ref={nameinput} />
        <input type="email"  placeholder='enter email......' required ref={emailinput}/>
        <input type="password" placeholder='enter password....' required  ref={passinput} />

        <button onClick={submitForm} type="submit">Login</button>
      </form>


      <div>
        {
          formdata.map((item,index)=>(
            <div className='card' key={index.id}> {item} </div>

          ))
        }
      </div>
    </div>



    </>
  );
}

export default Data;
