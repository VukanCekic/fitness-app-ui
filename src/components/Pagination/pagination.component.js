import React from "react";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              className={` ${number === currentPage ? "active" : ""}`}
              onClick={() => paginate(number)}
              href="#!"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
