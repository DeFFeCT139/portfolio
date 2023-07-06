import Timer from "./modules/timer/timer";
import './css/style.css'
import Weather from "./modules/todolist/Weather";
import LeftPanel from "./modules/leftpanel/leftPanel";
import Modules from "./modules/modules";


function App() {
  return (
    <div className="App">
      <LeftPanel/>
      <Modules/>
    </div>
  );
}

export default App;
