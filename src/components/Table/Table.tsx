import React from 'react';

type Column = {
  header: string;
  accessor: string;
  className?: string;
  render?: (value: any, row: any) => React.ReactNode;
};

type TableProps = {
  columns: Column[];
  data: any[];
  pageSize?: number;
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
};

const Table = ({
  columns,
  data,
  pageSize = 10,
  className = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
}: TableProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className='w-full border border-black'>
      <table className={`w-full border-collapse ${className}`}>
        <thead>
          <tr className={`bg-[#6e8bb4] text-white  ${headerClassName}`}>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`p-3 text-center text-xs	 ${column.className || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`
                border-b border-gray-200 text-xs
                ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                hover:bg-gray-100
                ${rowClassName}
              `}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-3 ${cellClassName} ${column.className || ''}`}
                >
                  {column.render
                    ? column.render(row[column.accessor], row)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='flex items-center justify-between bg-[#6e8bb4] text-white p-2 mt-2'>
        <div>
          Records {(currentPage - 1) * pageSize + 1} -{' '}
          {Math.min(currentPage * pageSize, data.length)} of {data.length}
        </div>
        <div className='flex gap-1 text-xs'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`
                px-3 py-1 rounded
                ${
                  currentPage === page
                    ? 'bg-white text-[#6e8bb4]'
                    : 'hover:bg-blue-600'
                }
              `}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className='px-3 py-1 rounded hover:bg-blue-600'
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
