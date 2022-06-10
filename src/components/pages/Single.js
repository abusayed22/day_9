import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {pre_go_single} from '../../redux/action/action'

function Single() {
    const {id} = useParams();
    const dispatch = useDispatch()
    const user = useSelector(state => state.crud.user);

    useEffect(() => {
        dispatch(pre_go_single(id))
    },[])

    useEffect(() => {
        if(user) {
            setAdd({...add && user})
        }
    },[])
    const [add,setAdd] = useState({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
    })
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
      <button  type="button" className="btn btn-info" style={{color:'#fff'}}>update</button>
    </div>
  )
}

export default Single