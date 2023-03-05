export default function WorkExp({ companyInfo, setCompanyInfo }) {
  const handleChange = (e) => {
    setCompanyInfo({
      ...companyInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="formFlow">
      <label>Company name: </label>
      <input type="text" name="companyName" onChange={handleChange} />
      <label>City: </label>
      <input type="text" name="companyCity" onChange={handleChange} />
      <label>From: </label>
      <input type="date" name="dateFrom" onChange={handleChange} />
      <label>To: </label>
      <input type="date" name="dateTo" onChange={handleChange} />
      <label>Description of responsibilities: </label>
      <textarea name="companyResponsibilities" onChange={handleChange} />

      {/* <input type="submit" value="submit" /> */}
    </form>
  );
}
