import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { createContext, ReactNode, useState } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode  
}

type SidebarDrawerContextData = {
  statusBar: boolean;
  toggleStatusSidebar(): void;
}

const SidebarDrawerContext = createContext<SidebarDrawerContextData>({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps) {
    const [statusBar, setStatusBar] = useState<boolean>(false)
    
    const router = useRouter()

    function toggleStatusSidebar() {
      setStatusBar(!statusBar)
    }

    useEffect(() => setStatusBar(false), [router.asPath])

    return (
      <SidebarDrawerContext.Provider value={{statusBar, toggleStatusSidebar}}>
        {children}
      </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)