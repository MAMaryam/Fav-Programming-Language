import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const SingleLanguage =(props) => {
    const [language, setLanguage] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/languages/${props.id}`)
        .then(res=>setLanguage(res.data.language))
        .catch(err=>console.log(err));
    })

    return(
        <div>
            <h2>My Favorite Language</h2>
           <h2> Name:             {language.name} </h2>
           <h2> Reason:           {language.reason}</h2>
           <h3> Demanded Rate:    {language.demanded_rate}</h3>
           <h3> Good Salary:      {language.good_salary ? <p>Yes</p> : <p>No</p>}</h3>
            <Link to="/languages" className="btn btn-info">Go Back</Link>
        
        </div>
    )
}
export default SingleLanguage;
