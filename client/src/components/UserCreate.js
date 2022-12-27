import React, {useState} from 'react'
import { json, Link , useNavigate} from 'react-router-dom'

function UserCreate() {
    const navigate=useNavigate();
    const [user, userchange]=useState("")
    const [userdescription, userdescriptionchange]=useState("")
    const [lastacessIP, lastacessIPchange]=useState("")
    const [fullname, fullnamechange]=useState("")
    const [mothername, mothernamechange]=useState("")
    const [products, productschange]=useState('')
    const [hobbies, hobbieschange]=useState('')
    const [city, citychange]=useState("")
    const [state, statechange]=useState("")
    const [postalcode, postalcodechange]=useState("")
    const [active, activechange]=useState(true);
    const handlesubmit=(e)=>{
        e.preventDefault();
        const userData={user,userdescription, lastacessIP, fullname, mothername, products, hobbies, city, state, postalcode, active};
        
        fetch("http://localhost:8080/posts",{
            method:"POST",
            headers:{'content-type':"application/json"},
            body:JSON.stringify(userData)
        }).then((res)=>{
            alert("Saved Successfully")
            navigate("/");

        }).catch((err)=>{
            console.log(err.message)
        })

    }
  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handlesubmit}>
                <div className='card' style={{'textAlign':"left"}}>
                    <div className='card-title'>
                        <h1>User Create</h1>
                    </div>
                    <div className='card-body'>
                        <div className='row'>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>User</label>
                                    <input required  value={user} onChange={e=>userchange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>User Description</label>
                                    <input required  value={userdescription} onChange={e=>userdescriptionchange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Lastacess IP</label>
                                    <input required  value={lastacessIP} onChange={e=>lastacessIPchange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Full Name</label>
                                    <input required  value={fullname} onChange={e=>fullnamechange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Mother Name</label>
                                    <input required  value={mothername} onChange={e=>mothernamechange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Products</label>
                                    <input required  value={products} onChange={e=>productschange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Hobbies</label>
                                    <input required  value={hobbies} onChange={e=>hobbieschange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>City</label>
                                    <input required  value={city} onChange={e=>citychange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>State</label>
                                    <input required  value={state} onChange={e=>statechange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Postal Code</label>
                                    <input required  value={postalcode} onChange={e=>postalcodechange(e.target.value)} className='form-control'></input >
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-check'>
                                    <input required  checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className='form-check-input '></input >
                                    <label className="form-check-label">Is Active</label>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <button className='btn btn-success' type='submit'>Save</button>
                                    <Link to="/" className='btn btn-danger'>Back</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default UserCreate
