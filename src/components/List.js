const List=({list, choice})=>{

    
    return <div className="list">
        <table>
            <tr><th>{choice}</th></tr>
        {list.map((item, index)=>(
            <tr><td key={index}>{item}</td></tr>
        ))}

        </table>
        
    </div>

}

export default List;