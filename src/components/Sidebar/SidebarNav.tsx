import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { CalendarIcon, PaperClipIcon, HomeIcon, UserIcon } from '@heroicons/react/outline'

export function SidebarNav() {
  return (
    <div className=" flex flex-col items-start ml-6 space-y-4 mt-2">
      <NavSection title="GERAL">
        <NavLink icon={HomeIcon} href="/dashboard">Dashboard</NavLink>
      </NavSection>
      <NavSection title="ADMINISTRAÇÃO">
        <NavLink icon={CalendarIcon} href="/users">Usuários</NavLink>
      </NavSection>
      <NavSection title="DOCUMENTAÇÃO">
        <NavLink icon={PaperClipIcon} href="/about">Sobre</NavLink>
      </NavSection>
    </div>
  )
}