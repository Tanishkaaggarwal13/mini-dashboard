import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import DashboardChart from "../components/DashboardChart";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card-grid">
          <StatCard title="Total Users" value="1200" />
          <StatCard title="Active Users" value="850" />
          <StatCard title="Revenue" value="₹45,000" />
        </div>

        <DashboardChart />
      </div>
    </>
  );
}
