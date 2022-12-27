import React, {useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'


function UserDetails() {
  const {userid}=useParams();
  const [userdata,userdatachange]=useState({});
  useEffect(() => {
    fetch("http://localhost:8000/posts/"+userid).then((res)=>{
        return res.json();
    }).then((res)=>{
        userdatachange(res)
    }).catch((err)=>{
        console.log(err.message)
    })
    }, [])
  return (
    <div>
    {userdata&&
    <div>
      <h1>The User is:{userdata.user} ({userdata.id}) </h1>
      <h1>The userdescription is:{userdata.userdescription} ({userdata.id}) </h1>
      <h1>The lastacessIP is:{userdata.lastacessIP} ({userdata.id}) </h1>
      <h1>The fullname is:{userdata.fullname} ({userdata.id}) </h1>
      <h1>The mothername is:{userdata.mothername} ({userdata.id}) </h1>
      <h1>The products is:{userdata.products} ({userdata.id}) </h1>
      <h1>The hobbies is:{userdata.hobbies} ({userdata.id}) </h1>
      <h1>The city is:{userdata.city} ({userdata.id}) </h1>
      <h1>The state is:{userdata.state} ({userdata.id}) </h1>
      <h1>The postalcode is:{userdata.postalcode} ({userdata.id}) </h1>
      
      <Link className='btn btn-danger' to="/">Back to Listing</Link>
    </div>
      
    }
      
    </div>
  )
}

export default UserDetails
