import React, {useState} from 'react';
import Table from 'rc-table';

const DataTable = props => {
  const {columns, data, visibleRows, total, pageNo} = props;
  const [currentPage, setCurrentPage] = useState(1);
  const visiblePages = 3;

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const totalPages = Math.ceil(data.length / visibleRows);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  return (
    <div
      className="border border-[#999] border-b-2 border-b-[#6C8CB3] rounded-b-[3px]
    "
      style={{width: '1200px', margin: '0 auto'}}
    >
      <div>This is the test Table</div>
      <Table
        columns={columns}
        data={data}
        tableLayout={'fixed'}
        className="min-w-full"
        rowClassName="bg-white border-t border-[#999]"
      />

      <div className="flex justify-between items-center px-2 py-1 bg-[#6C8CB3] text-white text-[12px]">
        <span>
          Files {visibleRows * 2} to {visibleRows * 3} of {total}
        </span>

        <div>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'
            }`}
          >
            Previous
          </button>

          {pageNumbers.slice(startPage - 1, endPage).map(number => (
            <button
              key={number}
              onClick={() => handlePageChange(number)} 
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === number ? 'bg-gray-500 text-black' : 'bg-blue-500 text-white'
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
