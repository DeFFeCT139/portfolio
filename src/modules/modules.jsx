import { Routes, Route } from "react-router-dom";
import Timer from "./timer/timer";
import Weather from "./todolist/Weather";
import QrCodes from "./qrCode/qrCode";

function Modules() {
  return (
    <div className="modules">
      <Routes>
        <Route path="/" element={<Timer/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/qrCode" element={<QrCodes/>}/>
      </Routes>
    </div>
  );
}

export default Modules;