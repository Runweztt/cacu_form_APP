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

    const [foods, setFoods] = useState(['apple','drink','ball','orange'])

    const handleAdd = () => {
      const newfodd = document.getElementById('foodinput').value;
      document.getElementById('foodinput').value=''
      setFoods(f =>[...f, newfodd])
    }









   



  const filelist = [
  { name: 'john mike', time: '10:pm', case: 'active', crime: 'stealing' },
  { name: 'jane doe', time: '2:am', case: 'closed', crime: 'fraud' },
  { name: 'samuel black', time: '5:pm', case: 'pending', crime: 'assault' },
  { name: 'linda smith', time: '11:am', case: 'active', crime: 'burglary' },
  { name: 'paul walker', time: '7:pm', case: 'closed', crime: 'vandalism' },
  { name: 'emma jones', time: '9:am', case: 'active', crime: 'cybercrime' },
  { name: 'mark lee', time: '3:pm', case: 'pending', crime: 'shoplifting' },
  { name: 'nina brown', time: '8:am', case: 'active', crime: 'arson' },
  { name: 'tony stark', time: '1:am', case: 'closed', crime: 'fraud' },
  { name: 'clara kent', time: '6:pm', case: 'active', crime: 'identity theft' },
  { name: 'brian o’connor', time: '4:am', case: 'pending', crime: 'smuggling' },
  { name: 'susan ray', time: '12:pm', case: 'active', crime: 'embezzlement' },
  { name: 'david king', time: '7:am', case: 'closed', crime: 'theft' },
  { name: 'kate winslet', time: '10:am', case: 'pending', crime: 'scamming' },
  { name: 'jerry fox', time: '11:pm', case: 'active', crime: 'pickpocketing' }
];
 

const [crimedata, setCrimedata] = useState([]);
const [sreachinput, setSreachinput] = useState("")


 const handleInputSreach =(e)=>{
  setSreachinput(e.target.value)
 }
   const sreachinputitem = () =>{

    const filered = filelist.filter(items =>
      items.case.toLowerCase() === sreachinput.toLowerCase());
      setCrimedata(filered)
   }


  return (
    <>  
       <div>
        <div>
          <label>sreach input <br/>  <span>active</span> <span>closed</span> <span>pending</span></label> <br/>

          <input type="text"
           placeholder='enter sreach here.....'
           value={sreachinput} 
           onChange={handleInputSreach} />

          <button className='add-btn'onClick={sreachinputitem}> SREACH</button>
        </div>
         

         <ul>
          {
            crimedata.length > 0 ?(
              crimedata.map((item, index)=>(
              <li key={index}>{item.name} - {item.case} - {item.crime}</li>
                )
              )
            ):(
              <li>no data found try again</li>
            )
          }
         </ul>

       </div>

        



















      <div>

        <h1>item list</h1>

        <ul>
          {foods.map((food, index) =>(
            <li key={index}>{food}</li>
          ))}
        </ul>

        <input type="text" id='foodinput' placeholder='enter food name ' />
        <button onClick={handleAdd}>added</button>
       

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
