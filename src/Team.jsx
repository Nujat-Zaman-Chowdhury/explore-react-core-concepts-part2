import { useState } from "react"

export default function Team(){
    const teamStyle = {
        border: '1px solid grey',
        padding:'20px',
        borderRadius:'10px'
    }


    const [team, setTeam] = useState(0);

    const handleAdd = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = ()=>{
        setTeam(team - 1);
    }
 
    return (
        <div style={teamStyle}><h3>Player: {team}</h3>
        <button onClick={handleAdd} style={{marginRight:'20px'}}>Add</button>
        <button onClick={handleRemove}>remove</button>
        </div>
    )
}