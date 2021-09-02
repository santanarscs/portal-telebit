import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/Sidebar";
import { UpdateProfileForm } from "../components/UpdateProfileForm";


export default function Profile() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex my-6 px-6 max-w-screen-2xl">
        <Sidebar />
        <div className="flex-1 rounded-sm bg-white shadow-md p-8">
          <div className="flex mb-8 justify-between items-center">
            <h1 className="font-semibold text-lg text-gray-800">Meus dados</h1>
          </div>
          <UpdateProfileForm />
        </div>
      </div>
    </div>
  )
}