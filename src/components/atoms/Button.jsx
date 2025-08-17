import React from "react"
import { cn } from "@/utils/cn"

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
  
  const variants = {
    primary: "bg-gradient-to-r from-wara-600 to-wara-500 text-white hover:from-wara-700 hover:to-wara-600 focus:ring-wara-500 shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 focus:ring-gray-300 shadow-md hover:shadow-lg",
    outline: "border-2 border-wara-600 text-wara-600 hover:bg-wara-50 focus:ring-wara-500 shadow-md hover:shadow-lg",
    ghost: "text-wara-600 hover:bg-wara-50 focus:ring-wara-500"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button