import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Calculate } from '@mui/icons-material';

function Home() {
    // const [day,setday]=useState("")
    // const [month,setmonth]=useState("")
    const [year,setyear]=useState("")
    const [ages,setage]=useState(0)
    console.log(year);
    const Calculate=()=>{
        const age = (dob) =>2024-dob
       let agess= (age(year))
       setage(agess)
        
    }
    
  return (
    <div>
        <div className="row m-5 ">
            <div className="col-4 mt-5"></div>
            <div className="col-4 border m-5">
                <h1 className='text-center'>Age Calculator</h1>
                <center>
                <h1>{ages}</h1>
                {/* <TextField className='mt-2' id="outlined-basic" label="Age" variant="outlined" /> */}
                </center>
                <div className='d-flex'>
                    
                <TextField className='mt-2' id="outlined-basic" label="day" variant="outlined" />
                <TextField className='mt-2' id="outlined-basic" label="month" variant="outlined" />
                <TextField onChange={(e)=>setyear(e.target.value)} className='mt-2' id="outlined-basic" label="year" variant="outlined" />
                </div>
                <div>
                <center>
                <Button onClick={Calculate} className='btn btn-outline-primary my-3' variant="outlined">Check</Button>
                </center>
                </div>


            </div>
            <div className="col-4"></div>
        </div>

    </div>
  )
}

export default Home