import React from "react"
import { cn } from "@/utils/cn"

const Card = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-white shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = "Card"

export default Card