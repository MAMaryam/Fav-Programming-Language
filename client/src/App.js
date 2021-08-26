import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import AllLanguage from './views/AllLanguage';
import AddLanguage from './views/AddLanguage';
import SingleLanguage from './views/SingleLanguage';
import EditLanguage from './views/EditLanguage';


function App() {
  const [languages, setLanguages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // useEffect(()=>{
  //   console.log("calling use effect again");
  //   axios.get("http://localhost:8000/api/languages")
  //   .then(res=> {
  //     setLanguages(res.data.language);
  //     setLoaded(true);
  //     console.log("changed loaded to true");
  //   })
  //   .catch(err=>console.log(err))
  // },[loaded])

  const onDeleteHandler = (_id) => {
    axios.delete(`http://localhost:8000/api/languages/${_id}`)
    .then(res => {
    console.log(res);
    setLoaded(false);
    console.log("loaded is false");
  })
    .catch(err =>console.log(err));
  
  } 
  return (
    <div className="App">
      <Router>
        <AllLanguage path="/languages" languages={languages} setLanguages={setLanguages} onDeleteHandler={onDeleteHandler} />
        <EditLanguage path="/languages/:id/edit"/>
        <AddLanguage path="/languages/new" />
        <SingleLanguage path="languages/:id" />
     </Router>
    </div>
  );
}

export default App;
