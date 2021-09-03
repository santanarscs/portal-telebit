import { Transition } from "@headlessui/react";
import { useSidebarDrawer } from "../../context/SidebarDrawerProps";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { statusBar, toggleStatusSidebar } = useSidebarDrawer()
  return (
    <>
      <aside className="hidden lg:block lg:w-48">
        <SidebarNav />
      </aside>
      <div className=" lg:hidden">
        <Transition
          show={statusBar}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {statusBar && (
            <div className="z-10 fixed inset-0 transition-opacity" onClick={toggleStatusSidebar}>
              <div className="absolute inset-0 bg-black opacity-50" tabIndex={0}></div>
            </div>
          )}
        </Transition>
        <aside 
          className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30
              ${statusBar ? '-translate-x-0' : '-translate-x-full'}
          `}>
            <h1 className=" ml-6 mt-4  font-bold text-gray-800 text-2xl">Admin<span className="font-bold text-blue-500 text-3xl">.</span></h1>
          <SidebarNav className="ml-6 mt-11" />
        </aside>
      </div>
    </>
  )

}