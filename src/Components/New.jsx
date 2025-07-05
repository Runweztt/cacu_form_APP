import React, { useState, useRef } from 'react'
import './New.css'

function New() {

    
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



const [crimelist, setCrimelist] =useState([])
const [searchinput, setSearchinput] = useState('')

const handlesreach =(e)=>{
    setSearchinput(e.target.value)
}

const submitsearch = ()=>{
    const filered = filelist.filter(items =>
        items.case.toLowerCase()  === searchinput.toLowerCase()
    )
     setCrimelist(filered)
}


const [showModal, setShowModal] = useState(false)



const displayModa = ()=>{
  setTimeout(()=>{
    setShowModal(true)
  },2000)
}

const handleRemove =()=>{
  setShowModal(false)
  
}


const [formlist,setFormlist] = useState([])

const Name = useRef(null)
const mailinput = useRef(null)
const passwordinput = useRef(null)


const handleformvalidation = (e)=>{
    e.preventDefault();

    const fullName = Name.current.value.trim()
    const Email = mailinput.current.value.trim()
    const passWORD = passwordinput.current.value.trim()

  
     const errors =[]
    if(!fullName || !Email || !passWORD){
        errors.push("please enter all fields")
    }
    if(!Email.includes('@')){
         errors.push("invalid email")
    }
    if (!passWORD.length < 6){
         errors.push("password not strong ")
    }
    if(errors.length > 0){
      setFormlist(errors);
      return;
    }
    const userForm ={fullName, Email, passWORD}
    localStorage.setItem('newUserForm', JSON.stringify(userForm))
    setFormlist(['Registration sucessful'])

}



  return (
    <div>
          

          <form>
            <input type="text" placeholder='enter name ' required ref={Name} />
            <input type="email" placeholder='enter email' required ref={mailinput} />
            <input type="password" placeholder='enter password' required ref={passwordinput} />
          </form>















       <div className='modal'>

        <div className='card'>
          <h1>follow up</h1>
          <h2>things we do for code</h2>
          <p>temporibus molestias voluptatibus ad, quisquam consectetur. Neque aliquid mollitia corrupti sint?</p>
          <button onClick={displayModa}> check modal</button>

        </div>

        <div className='modal-main'style={{display: showModal?'block':'none'}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo placeat similique,
           sequi dolorem autem sed quibusdam quisquam unde saepe vel expedita iure excepturi 
           nam debitis accusamus id praesentium voluptatum beatae?
           
           <button onClick={handleRemove}>remove</button>

        </div>
        
          

       </div>



















        <h1> search crime database</h1>
          <p>field item <span>active, pending, closed </span></p>

        <input type="text" placeholder='enter search list'
         value={searchinput}
          onChange={handlesreach} />
          <button onClick={submitsearch}>search</button>

    {
        crimelist.length > 0 ? (
            crimelist.map((item,index)=>(
                <li key={index}>{item.name}-{item.case}-{item.crime}</li>
            ))
        ):(
            <li>no data found</li>
        )
    }









    </div>
  )
}

export default New