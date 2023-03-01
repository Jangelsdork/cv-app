import WorkExp from "./components/WorkExp"
import Resume from "./components/Resume";
import { useState } from "react";

function App() {

  const [state, setState] = useState({ 
    companyName: "",
    companyCity: "",
    dateFrom: "",
    dateTo: "",
    companyResponsibilities: ""
})

 

  return (
    <div>
      <WorkExp state={state} setState={setState}  /> 
      <Resume state={state} />
    </div>
  );
}

export default App;
