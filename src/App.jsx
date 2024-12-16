import React, {useEffect, useState} from 'react';
import MainPage from "./pages/mainPage/MainPage.jsx";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";

function App() {
  const [list,setList] = useState('prompt');
  const [user , setUser] = useState(null);


  useEffect(()=>{
    if(list ==='prompt'){
      const name = prompt('как тебя зовут?')
      const lastname = prompt('как твоя фамилия?')
      const userData = {name,lastname}

      setUser(userData)

      if(name==='John'&&lastname==='Johns'){
        setList("MainPage")
      }else{
        setList("ErrorPage")
      }

    }
  },[list])

  if(list==='MainPage') {
    return <MainPage user={user}/>
  }
  if(list==='ErrorPage') {
   return <ErrorPage user={user}/>
  }

  return null;
}

export default App;