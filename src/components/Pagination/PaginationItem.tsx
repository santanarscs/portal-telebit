

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void
}

export function PaginationItem({isCurrent = false, number, onPageChange}: PaginationItemProps) {

  if(isCurrent) {
    return (
      <button className="text-xs w-6 h-6 bg-blue-500 text-gray-200 rounded-sm">
        {number}
      </button>
    )
  }

  return (
    <button className="text-xs w-6 h-6 bg-gray-300 text-gray-500 rounded-sm" onClick={() => onPageChange(number)}>
      {number}
    </button>
  )
}

