import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function Login() {
    const navigate=useNavigate();
    const [email, setEmail]=useState('');
    const [password,setPassword] =useState('');
const loginUser=async (e)=>{
    e.preventDefault();
    const res=await fetch('/signin', {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })

    });
    console.log(res)
    const data=res.json();
    if(res.status===400||!data){
        window.alert("Invalid Credentials")
    }
    else{
        window.alert('Login Successfull')
        navigate('/about')
    }


}
  return (
    <>
    <section className='signin'>
 <div className='container mt-5'>
     <div className='signin-content'>
     
         <div className='signin-form'>
             <h2 className='form-title'>Sign in</h2>
             <form method='POST' className='register-form' id='register-form'>

                 <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />

                 <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                 <input type="submit" name="signin" id="signin" className="form-submit" value="Log In" onClick={loginUser} />
             </form>
 
         </div>
         <div>
     <NavLink to="/signup"className="signin-im-link">Creat An Account</NavLink>
 </div>
 
     </div>
 </div>
    </section>
    </>
  )
}

export default Login
