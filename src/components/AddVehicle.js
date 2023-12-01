import {useState} from 'react';
const AddVehicle=({handleAdd})=>
{
    const [vehicleNumber, setVehicleNumber]=useState("");
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(vehicleNumber!="")
        {
            handleAdd(vehicleNumber);
        }
    }

    const handleInputChange=(event)=>{
        setVehicleNumber(event.target.value);
    }

    return <div className="add-vehicle-form">
        
        <form method="post" onSubmit={handleSubmit}>
        <h3>Add Vehicle 🚍</h3>
        <input type="text" placeholder="Vehicle Number🚗" onChange={handleInputChange}/>
        <input type="submit" className="submit" value="Authorize ✅"/>
        </form>
    </div>
}

export default AddVehicle;