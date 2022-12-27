import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function About() {
    const [userdata, userdatachange] =useState(null);
    const LoadDetail=(id)=>{
        navigate('/user/detail/'+id);

    }
    const LoadEdit=(id)=>{
        navigate('/user/edit/'+id);

    }
    const Removefunction=(id)=>{
        if(window.confirm("Do you want to remove?")){
            fetch("http://localhost:8000/posts/"+id,{
            method:"DELETE"
        }).then((res)=>{
            alert("Removed Successfully")
            window.location.reload();
            navigate("/");

        }).catch((err)=>{
            console.log(err.message)
        })
        }

    }
    useEffect(() => {
    fetch("http://localhost:8080/posts").then((res)=>{
        return res.json();
    }).then((res)=>{
        userdatachange(res)
    }).catch((err)=>{
        console.log(err.message)
    })
    callAboutPage();
    }, [])

    const [userData,setUserData]=useState({});

    const navigate=useNavigate();
    const callAboutPage=async ()=>{
        try{
            const res= await fetch('/about', {
                method:'GET',
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:'include'
            });
            const data=await res.json();
            setUserData(data);
            if(!res.status===200){
                const error=new Error(res.error);
                throw error;
            }


        }catch(err){
            console.log( "doubahi",err)
            navigate("/signin")

        }
    }
    
  return (
    <div className='container'>
        <div className='card'>
            <div className='cart-title'>
                <h2>User list</h2>
            </div>
            <div className='card-body'>
                <div className='divbtn'>
                    <Link to='user/create' className='btn btn-success'>Add New (+)</Link>
                </div>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>User</td>
                            <td>User Description</td>
                            <td>Lastacess IP</td>
                            <td>Full Name</td>
                            <td>Mother Name</td>
                            <td>Products</td>
                            <td>Hobbies</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Postal Code</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata &&
                            userdata.map(item=>(
                                <tr key={item.id}>
                                    <td>
                                        {item.user}
                                    </td>
                                    <td>{item.userdescription}</td>
                                    <td>{item.lastacessIP}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.mothername}</td>
                                    <td>{item.products}</td>
                                    <td>{item.hobbies}</td>
                                    <td>{item.city}</td>
                                    <td>{item.state}</td>
                                    <td>{item.postalcode}</td>
                                    <td className='action'>
                                    <a onClick={()=>{LoadEdit(item.id)}} className='btn btn-success'>Edit</a>
                                    <a onClick={()=>{Removefunction(item.id)}} className='btn btn-danger'>Remove</a>
                                    <a onClick={()=>{LoadDetail(item.id)}} className='btn btn-primary'>Details</a>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
      
    </div>
  );
}

export default About

