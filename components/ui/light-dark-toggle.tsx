'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

interface Props {
  className?: string
}

const LightDarkToggle = ({ className }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode((preValue) => !preValue )
            document.body.classList.toggle('dark')
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default LightDarkToggle
