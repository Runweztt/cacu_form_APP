import React, { useEffect, useRef, useState } from 'react';
import MainData from './MainData';
import './Data.css'
import lonRest10 from '../assets/lon-rest10.jpg';
import lonRest9 from '../assets/lon-rest9.jpg';
import lonRest3 from '../assets/lon-rest3.jpg';


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




  const [formdata, setFormdata] = useState([])

  const nameinput = useRef(null)
  const emailinput = useRef(null)
  const passinput = useRef(null)

  const submitForm = (e) => {
    e.preventDefault();

    const name = nameinput.current.value.trim()
    const email = emailinput.current.value.trim()
    const passW = passinput.current.value.trim()

    if (!name || !email || !passW) {
      setFormdata(prev => [...prev, `plesea fill the above form`])
    } else {
      setFormdata(prev => [...prev, `Name: ${name} Email: ${email} Password: ${passW}`])

      nameinput.current.value = ''
      emailinput.current.value = ''
      passinput.current.value = ''
    }
  }


  const [count, setcount] = useState(0)


  const increment = () => {
    setcount(count + 1)
  }

  const drecrement = () => {
    setcount(count - 1)
  }

  const reset = () => {
    setcount(0)
  }
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const [payment, setPayment] = useState('')

  const handlepayment = (e) => {
    setPayment(e.target.value)
  }
  const [comment, setComment ] = useState('')
  const handlecomment = (e) => {
    setComment(e.target.value)
  }

  const [color, setColor] = useState('#ffffff')

  const handlecolorchange = (e) =>{
    setColor(e.target.value)
  }

  const [foods, setFoods] = useState(['apple','banana','orange','watermelon'])

  const handleAdd = () =>{
    const newfood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = ''

    setFoods(f =>[...f,newfood])
  }

  return (
    <>  

      <div>
       <ul>
        {
          foods.map((food,index)=>(
            <li key={index}>{food}</li>
          ))
        }
       </ul>

        <input type="text" id='foodinput' placeholder='enter food' />
        <button  onClick={handleAdd}>add food</button>

        <div  className='color-picker'>
          <h1>color picker</h1>
          <div className='color-display' style={{background:color}}>
            <p>selected color : {color}</p>
          </div>
          <label>select a color </label>
          <input type="color" value={color} onChange={handlecolorchange}/>
        </div>

        <textarea value={comment} onChange={handlecomment} name=" comment" id="">
          comment here 
        </textarea>

        <p> comments:{comment}</p>

        <h1>payment option</h1>

        <select value={payment} onChange={handlepayment}>

          <option value="select option"> sekect option </option>
          <option value="cash">Cash</option>
          <option value="visa">visa</option>
          <option value="master card"> master card</option>
        </select>

        <h1>payment: {payment}</h1>




        <input type="text" value={name} onChange={handleChange} />
        <h1>name: {name}</h1>

        <h1>Counter</h1>
        <p>count {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={drecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

      </div>























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
          <input type="email" placeholder='enter email......' required ref={emailinput} />
          <input type="password" placeholder='enter password....' required ref={passinput} />

          <button onClick={submitForm} type="submit">Login</button>
        </form>


        <div>
          {
            formdata.map((item, index) => (
              <div className='card' key={index.id}> {item} </div>

            ))
          }
        </div>
      </div>

      <div className='cardD'>
        <div className='mycard'>
          <img src={lonRest10} alt="rest man" />
          <h2> cheta Emmanuel</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing enam illum perferendis, id aliquid ratione rerum? Natus, repellendus?</p>

        </div>
        <div className='mycard'>
          <img src={lonRest10} alt="rest man" />
          <h2> cheta Emmanuel</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing enam illum perferendis, id aliquid ratione rerum? Natus, repellendus?</p>

        </div>
        <div className='mycard'>
          <img src={lonRest10} alt="rest man" />
          <h2> cheta Emmanuel</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing enam illum perferendis, id aliquid ratione rerum? Natus, repellendus?</p>

        </div>

      </div>





    </>
  );
}

export default Data;
