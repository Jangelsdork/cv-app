export default function PersonalInfo({personalInfo, setPersonalInfo}){

    const handleChange = (e) => {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]:e.target.value
        });
    }

    return (
        <form className="formFlow">
            <label>First name: </label>
            <input type="text" name="firstName"  onChange={handleChange} />
            <label>Last name: </label>
            <input type="text" name="lastName"  onChange={handleChange} />
            <label>Phone number: </label>
            <input type="text" name="phoneNo"  onChange={handleChange} />
            <label>Email address: </label>
            <input type="email" name="email"  onChange={handleChange} />
            <label>Address: </label>
            <input type="text" name="address"  onChange={handleChange} />
        </form>
    )

}