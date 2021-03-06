import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pre_add_data  } from '../../redux/action/action'

function Add() {
  const dispatch = useDispatch();
  const [add,setAdd] = useState({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
  })
  const addhandle = () => {
    dispatch(pre_add_data(add))
    setAdd({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
    })
  }
  return (
    <div style={{width:400,margin:'0 auto'}}>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Name" 
          aria-label="Username"
          value={add.name}
          onChange={(e) => setAdd({...add,name:e.target.value})}
        />
      </div>
      <div className="input-group mb-3">
        <input 
          type="number" 
          className="form-control" 
          placeholder="Roll" 
          aria-label="roll" 
          value={add.roll}
          onChange={(e) => setAdd({...add,roll:e.target.value})}
        />
      </div>
      <div className="input-group mb-3">
        <input 
          type="number" 
          className="form-control" 
          placeholder="BirthDay" 
          aria-label="Username"
          value={add.birth}
          onChange={(e) => setAdd({...add,birth:e.target.value})}
        />
      </div>
      <div className="input-group mb-3">
        <input type="number" 
          className="form-control" 
          placeholder="Contact" 
          aria-label="Username"
          value={add.phone}
          onChange={(e) => setAdd({...add,phone:e.target.value})}
        />
      </div>
      <div className="input-group mb-3">
        <input type="text" 
          className="form-control" 
          placeholder="Address" 
          aria-label="Username"
          value={add.address}
          onChange={(e) => setAdd({...add,address:e.target.value})}
        />
      </div>
      <button onClick={() => addhandle()} type="button" className="btn btn-info" style={{color:'#fff'}}>Add</button>
    </div>
  )
}

export default Add