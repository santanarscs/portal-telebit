import { Menu } from '@headlessui/react'

type DropdownItemProps = {
  label: string;
  icon: any
}

function DropdownItem({label, icon: Icon}: DropdownItemProps) {
  return (
    <div className="p-1">
      <Menu.Item >
        {({ active }) => (
          <button
            onClick={() => console.log('testing')}
            className={`${
              active ? 'bg-violet-500 text-brand' : 'text-gray-700'
            } group flex rounded-sm items-center w-full px-2 py-2 text-sm`}
          >
            {active ? (
              <Icon
                className="w-5 h-5 mr-2"
                aria-hidden="true"
              />
            ) : (
              <Icon
                className="w-5 h-5 mr-2"
                aria-hidden="true"
              />
            )}
            {label}
          </button>
        )}
      </Menu.Item>
    </div>
  )
}

export { DropdownItem }