export default function Resume({companyInfo, personalInfo}) {

  return (
    <div className="resumeFlow">
      <div className="resHeader">
        <div className="resName">{personalInfo.firstName} {personalInfo.lastName}</div>
        <div className="resPersonal">
          <div>☎️ {personalInfo.phoneNo} </div>
          <div>💻  {personalInfo.email} </div>
          <div>🏡 {personalInfo.address}</div>
        </div>
      </div>
    <div className="resCompany">
        <div className="resCompHeader">Previous experience</div>
        <div className="resCompName">{companyInfo.companyName}, {companyInfo.companyCity}</div>
        <div>Date: From {companyInfo.dateFrom} Till {companyInfo.dateTo}</div>
        <div> Responsibilities: {companyInfo.companyResponsibilities}</div> 
      </div>
    </div>
  )
}
