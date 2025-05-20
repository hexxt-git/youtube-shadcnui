'use client'

import { useState, useCallback } from 'react'
import { createContext } from 'react'

type SidebarContextType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  toggleSidebar: () => void
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  setIsOpen: () => {},
  toggleSidebar: () => {},
})

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return <SidebarContext.Provider value={{ isOpen, setIsOpen, toggleSidebar }}>{children}</SidebarContext.Provider>
}
