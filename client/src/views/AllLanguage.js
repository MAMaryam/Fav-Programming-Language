import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllLanguages = (props) => {
    const [languages, setLanguages] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        console.log("calling use effect again");
        axios.get("http://localhost:8000/api/languages")
        .then(res=> {
          setLanguages(res.data.language);
          setLoaded(true);
          console.log("changed loaded to true");
        })
        .catch(err=>console.log(err))
      },[loaded])

    const onDeleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/languages/${_id}`)
        .then(res => {
        console.log(res);
        setLoaded(false);
        console.log("loaded is false");
        })
        .catch(err =>console.log(err));
        
    }

    return(
        <div>
           
            <h1> Favorit Programming Languages!!</h1>
            <div> 
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Demanded Rate</th>
                        <th scope="col">Good Salary</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
            {languages.map((language, key)=>{
                return <tr>
                         <td  className="inline" key={key}><Link to={"/languages/"+language._id}>{language.name}  </Link></td>
                         <td >{language.reason} </td>
                         <td>{language.demanded_rate}</td>
                         <td> {language.good_salary ? <p>Yes</p> : <p>No</p>}</td>
                            <button onClick={() =>onDeleteHandler(language._id)} className="btn btn-danger">Delet</button> 
                            <button><Link to={"/languages/" + language._id + "/edit"} className="btn btn-primary">Edit</Link></button>
                      </tr>
            })}
            </tbody>
            </table>
            </div>
         <Link to={"/languages/new"}className="btn btn-primary">Add a Favorite Language</Link>
           
        </div>
    )

}
export default AllLanguages;