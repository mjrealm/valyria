import { IconButton, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton      
      size="lg"
      variant="ghost"      
      icon={isDark ? <FiSun/> : <FiMoon/>}
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
    />
  )
}