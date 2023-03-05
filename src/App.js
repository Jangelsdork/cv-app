import WorkExp from "./components/WorkExp";
import Resume from "./components/Resume";
import PersonalInfo from "./components/PersonalInfo";
import { useState } from "react";

function App() {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    companyCity: "",
    dateFrom: "",
    dateTo: "",
    companyResponsibilities: "",
  });

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    address: ""  
  });

  return (
    <div className="gridCont">
      <div className="pageleft">
        <PersonalInfo
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <WorkExp companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} />
      </div>
      <div className="pageRight"></div>
        <Resume companyInfo={companyInfo} personalInfo={personalInfo} />
    </div>
  );
}

export default App;
