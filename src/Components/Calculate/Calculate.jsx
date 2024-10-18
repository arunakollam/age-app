import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Calculate() {
    const [day,setday]=useState("")
    const [month,setmonth]=useState("")
  return (
    <div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 shadow p-5 mt-5 rounded text-center">
                <h3>Age Calculator</h3>
                <p>Calculate your age here</p>
                    <div>
                        <h1>Age is</h1>
                        <p></p>
                    </div>
                 <div className='d-flex row'>
                <TextField className='mb-3 me-5' id="filled-basic" label="Enter your date of birth" variant="filled" />
                <TextField className='mb-3' id="filled-basic" label="Enter your Current date" variant="filled" />
                </div>
                <div>
                <Button variant="contained">Enter</Button>
                </div>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
  )
}

export default Calculate







{/* <div>
              <h1> &#8377; {interest}</h1>
              <p>Your total interest</p>
            </div> */}