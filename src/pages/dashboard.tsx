import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex my-6 px-6 max-w-7xl">
        <Sidebar />
        <div className="flex-1 gap-4">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  )
}