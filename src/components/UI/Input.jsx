import React from "react"

export const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-3 py-2 rounded border border-white/30 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
  />
)
