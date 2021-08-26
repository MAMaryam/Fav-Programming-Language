import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';


const AddLanguage = (props) => {
    const [form, setForm] = useState({
        "name":"",
        "reason":"",
        "demanded_rate":"",
        "good_salary": false,
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
        [event.target.name]: event.target.type  === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const [error, setError] = useState ({})

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/languages/new", form )
              .then(res=> {
                  console.log(res);
                  if(res.data.language){
                    navigate("/languages");

                  }
                  else {
                      setError(res.data.error.errors);
                  }
                  
              })
              .catch(err=> console.log(err));

    }
    return(
        <div  className="container px-5">
        <h1> Add a Favorite Programming Language</h1>
          <form onSubmit={onSubmitHandler}>
           <div className="form-group" >
               <lebel htmlFor="name"> Name:</lebel>
               <input className="form-control col-5 mx-auto" name="name"
               type="text" onChange={onChangeHandler}/>
               {error.name && <span className="alert-danger">{error.name.message}</span>}

          </div> 

          <div className="form-group" >
               <lebel htmlFor="name">Reason:</lebel>
               <input className="form-control col-5 mx-auto" name="reason"
               type="text" onChange={onChangeHandler}/>
               {error.reason && <span className="alert-danger">{error.reason.message}</span>}

          </div> 
          <div className="form-group" >
               <lebel htmlFor="name">Demanded Rate:</lebel>
               <select onChange={onChangeHandler} className="form-control col-5 mx-auto" name="demanded_rate">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    
               </select>
               {error.demanded_rate && <span className="alert-danger">{error.demanded_rate.message}</span>}

          </div>

          <div>
                        <label htmlFor="good_salary">Good Salary</label>
                        <input type="checkbox" name="good_salary" onChange = {onChangeHandler}/>
          </div>
          
          <br/>
          <input type="submit" className="btn btn-primary"/>


          <input type="reset" className="btn btn-primary"/>
          <br/>

          </form>


        </div>
    )
    }
export default AddLanguage;