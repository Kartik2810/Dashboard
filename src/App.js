import "./App.css";
import Contant from "./components/Contant";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashborad-content">
          <Header/>
          <Contant />
          <Pagination/>
        </div>
      </div>
    </>
  );
}

export default App;
