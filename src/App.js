import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import AddVehicle from './components/AddVehicle';
import RemoveVehicle from './components/RemoveVehicle';
import List from './components/List';
import Video from './components/Video';
const App=()=>
{
  const [auth_list, setAuthList]= useState(["TN 01 AB 1234","TN 02 CD 5678","TN 03 EF 9012", "TN 04 GH 3456","TN 05 IJ 7890"]);
  const [unauth_list, setUnauthList]= useState(["TN 10 PQ 9876", "TN 20 RS 5432", "TN 30 UV 1098", "TN 40 WX 2468", "TN 50 YZ 8642"]);


  const handleAdd=(addNum)=>{
   setAuthList([...auth_list,addNum]);
  }
  const handleRemove=(remNum)=>{
    setAuthList(auth_list.filter((num)=>num!=remNum));
  }
  return <div className='App'>
  <Header/>

  <div className="content">
  <div className='add-remove-grid'>
  <AddVehicle handleAdd={handleAdd}/>
  <RemoveVehicle handleRemove={handleRemove}/>
  </div>
  
  <div className="list-grid">
  



  <List list={auth_list} choice={"Authorized ✨"}/>
  <List list={unauth_list} choice={"Unauthorized 🔎"}/>

  </div>

  <Video/>
  </div>
  </div>

  
}
export default App;