"use client"

import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "./popover"
import { Button } from "./button"
import { Calendar } from "./calender"
import { cn } from "../../lib/utils"

export function DateRangePicker({ from, to, setFrom, setTo }) {
  return (
    <div className="flex items-center border rounded-md overflow-hidden px-1">
      {/* From Date */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-[100px] justify-start text-left px-1 py-0 text-xs font-normal rounded-none",
              !from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-0.5 h-3 w-3" />
            {from
              ? from.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric", //  full year (2023)
                })
              : "From"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={from} onSelect={setFrom} initialFocus />
        </PopoverContent>
      </Popover>

      {/* Separator */}
      <span className="text-gray-400 text-xs mx-1">–</span>

      {/* To Date */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-[100px] justify-start text-left px-1 py-0 text-xs font-normal rounded-none",
              !to && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-0.5 h-3 w-3" />
            {to
              ? to.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric", //  full year (2023)
                })
              : "To"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={to} onSelect={setTo} initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  )
}
