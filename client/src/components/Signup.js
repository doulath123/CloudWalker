import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate, NavLink } from 'react-router-dom'
function Signup() {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:'',
        email:'',
        phone:'',
        work:"",
        password:"",
        cpassword:''
    })
    let name,value;
const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value})


}

const PostData=async(e)=>{
    e.preventDefault();
    const {name, email, phone, work, password, cpassword}=user;
    const res = await fetch('/register',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,email,phone,work,password,cpassword
        })
    });
    const data = await res.json();
    if(data.state===422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
    }
    else{
        window.alert('Registration Successfull');
        console.log('Successfull Registration')
        navigate('/signin')
    }
}
  return (
   <>
   <section className='signup'>
<div className='container mt-5'>
    <div className='signup-content'>
        <div className='signup-form'>
            <h2 className='form-title'>Sign up</h2>
            <form method='POST' className='register-form' id='register-form'>
                <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Name' value={user.name} onChange={handleInputs}/>
                <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email' value={user.email} onChange={handleInputs}/>
                <input type="number" name='phone' id='phone' autoComplete='off' placeholder='Your phone' value={user.phone} onChange={handleInputs}/>
                <input type="text" name='work' id='work' autoComplete='off' placeholder='Your Profession' value={user.work} onChange={handleInputs}/>
                <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' value={user.password} onChange={handleInputs}/>
                <input type="password" name='cpassword' id='cpassword' autoComplete='off' placeholder='Conform Your Password' value={user.cpassword} onChange={handleInputs}/>
                <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={PostData} />
            </form>
<div>
    <NavLink to="/signin"className="signup-im-link">Iam already register</NavLink>
</div>
        </div>

    </div>
</div>
   </section>
   </>
  )
}

export default Signup
