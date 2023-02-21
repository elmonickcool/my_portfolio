import { useColorMode, IconButton } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${
        colorMode === "light" ? "dark" : "light"
      } mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={
        <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} />
      }
    />
  )
}

export default DarkModeSwitch
