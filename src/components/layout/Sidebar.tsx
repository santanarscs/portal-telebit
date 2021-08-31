import Link from 'next/link'
function Sidebar() {
  return (
    <aside className="w-64 mr-8">
      <div className="space-y-12">
        <section>
          <h1 className="font-bold text-md text-gray-700 ">Administração</h1>
          <ul className="space-y-4 mt-5 items-stretch">
            <li>
              <Link href="/users">
                <a className="text-gray-800 hover:text-gray-500 transition-colors">Usuários</a>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  )
}
export { Sidebar }