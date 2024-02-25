import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='card w-50 text-center' style={{ border: '0' }}>

                <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&uid=R129306884&ga=GA1.1.391493513.1701538622&semt=ais' alt='' className='image' />
                <h1 className='title'>Error=Page Not Found</h1>
                <p>We can't find the page your looking for......you make some mistake</p>
                <div>
                    <Link to="/Home"><Button className='btn btn primary w-25 m-3'>Home page</Button></Link>
                    
                    
                  
                </div>
            </div>
        </div>
    )
}