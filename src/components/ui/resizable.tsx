"use client"

import React from "react"
import { GripVertical } from "lucide-react"
import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels" // correct v4 exports
import { cn } from "@/lib/utils"

// Panel Group wrapper
const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn(
      "flex h-full w-full",
      className
    )}
    {...props}
  />
)

// Panel is direct export
const ResizablePanel = Panel

// Custom handle using Separator
const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean
}) => (
  <Separator
    className={cn(
      "relative flex items-center justify-center bg-border",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
