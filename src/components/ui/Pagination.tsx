"use client";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="btn cursor-pointer"
        >
          ← Prev
        </button>
      )}
      <span className="text-lg font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="btn cursor-pointer"
        >
          Next →
        </button>
      )}
    </div>
  );
};
