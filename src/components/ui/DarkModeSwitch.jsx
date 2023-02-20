import { useColorMode,Button } from "@chakra-ui/react"
const DarkModeSwitch = () =>{
    const {colorMode,toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" :"Light"}
        </Button>
    )
}

export default DarkModeSwitch;