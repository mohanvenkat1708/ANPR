import {useState} from 'react';
const RemoveVehicle=({handleRemove})=>
{
    const [vehicleNumber, setVehicleNumber]=useState("");
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(vehicleNumber!='')
        {
            handleRemove(vehicleNumber);
        }
        
    }
    const handleInputChange=(event)=>{
        setVehicleNumber(event.target.value);
    }
    return <div className="remove-vehicle-form">
        
        <form method="post" onSubmit={handleSubmit}>
        <h3>Remove Vehicle 🚚</h3>
        <input type="text" placeholder="Vehicle Number🚗" onChange={handleInputChange}/>
        <input type="submit" className="submit-remove" value="Remove ❌"/>
        </form>
    </div>
}

export default RemoveVehicle;