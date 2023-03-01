
export default function WorkExp({state, setState}){
    
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });

    }

    return (
        <form className="formFlow">
            <label>Company name: 
                <input type="text" name="companyName" onChange={handleChange} />
            </label>
            <label>City: 
                <input type="text" name="companyCity" onChange={handleChange}/>
            </label>
            <label>From: 
                <input type="date"  name="dateFrom" onChange={handleChange}/>
            </label>
            <label>To:
                <input type="date"  name="dateTo" onChange={handleChange}/>
            </label>
            <label>Description of responsibilities: 
                <textarea  name="companyResponsibilities" onChange={handleChange} />
            </label>
        {/* <input type="submit" value="submit" /> */}
        </form>
    )
}

