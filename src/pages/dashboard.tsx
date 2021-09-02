import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex my-6 px-6 max-w-screen-2xl">
        <Sidebar />
        <div className="flex-1 gap-4 flex flex-col">
          <h1 className="text-xl text-gray-800">Bem vindo(a), Jhon Doe</h1>
          <div className="max-w-xs">
            <div className="bg-white py-4 px-6 rounded-md shadow-sm flex flex-col items-end">
              <strong className="text-gray-800 text-5xl">214</strong>
              <small className="text-gray-500 text-sm font-bold">Colaboradores</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}