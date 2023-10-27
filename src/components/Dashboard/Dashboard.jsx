import "./Dashboard.css";
import Nav from "./Nav/Nav";

const Dashboard = ({ children }) => {
  return (
    <div className="containerDashboard">
      <header className="headerDashboard"></header>
      <nav className="containerMenuNavegacionDashboard">
        <Nav />
      </nav>
      <section className="childrenDashboard">{children}</section>
    </div>
  );
};

export default Dashboard;
