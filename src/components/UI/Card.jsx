import React from "react"

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border p-4 shadow-sm ${className}`}>{children}</div>
)

export const CardHeader = ({ children }) => <div className="mb-2">{children}</div>

export const CardTitle = ({ children }) => <h3 className="text-xl font-bold">{children}</h3>

export const CardContent = ({ children }) => <div>{children}</div>
