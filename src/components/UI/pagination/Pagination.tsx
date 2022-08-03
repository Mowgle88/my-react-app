import React from 'react'
import { getPagesArray } from '../../../utils/pages'

interface PaginationProps {
  totalPages: number,
  page: number,
  changePage: Function
}

export default function Pagination({totalPages, page, changePage}: PaginationProps) {
  
  let pagesArray = getPagesArray(totalPages)

  return (
    <div className="page__wrapper">
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      )}
    </div>
  )
}
