import "../styles/globals.css";

import NavBar from "../components/NavBar";
import Grid from "../components/Grid";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar></NavBar>
      <div className="flex flex-grow">
        <Grid />
      </div>
    </div>
  );
};

export default App;
