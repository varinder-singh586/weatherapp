import React from "react"

export const Badge = ({ children, className = "" }) => (
  <span className={`inline-block px-2 py-1 text-sm rounded bg-blue-100 text-blue-800 ${className}`}>
    {children}
  </span>
)
