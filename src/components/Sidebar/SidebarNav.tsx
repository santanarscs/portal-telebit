import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { HomeIcon, UserIcon } from '@heroicons/react/outline'

type SidebarNavProps = {
  className?: string
}

export function SidebarNav({className}: SidebarNavProps) {
  return (
    <div className={`flex flex-col items-start space-y-4 mt-2 ${className}`}>
      <NavSection title="GERAL">
        <NavLink icon={HomeIcon} href="/dashboard">Dashboard</NavLink>
      </NavSection>
      <NavSection title="ADMINISTRAÇÃO">
        <NavLink icon={UserIcon} href="/users">Usuários</NavLink>
      </NavSection>
    </div>
  )
}