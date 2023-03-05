export default function Resume({companyInfo, personalInfo}) {

  return (
    <div className="resumeFlow">
      <div className="resHeader">
        <div>First Name: {personalInfo.firstName}</div>
        <div>Last Name: {personalInfo.lastName}</div>
        <div>Phone: {personalInfo.phoneNo} </div>
        <div>Email: {personalInfo.email} </div>
        <div>Address: {personalInfo.address}</div>
      </div>
      <div className="resCompany"> Company... 
        <div>Name: {companyInfo.companyName}</div>
        <div>City: {companyInfo.companyCity}</div>
        <div>Date: From {companyInfo.dateFrom} Till {companyInfo.dateTo}</div>
        <div> Responsibilities: {companyInfo.companyResponsibilities}</div> 
      </div>
    </div>
  )
}
