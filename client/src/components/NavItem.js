import React from "react"
import { Link as RouterLink} from "react-router-dom"
import { 
    Flex, 
    Text, 
    MenuButton, 
    Link, 
    Menu, 
    MenuList,
    Icon 
} from "@chakra-ui/react"

function NavItem({navSize, title, icon, active, path, onClick}) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}

        >
            <Menu placement="right">
                <Link
                    as={RouterLink}
                    to={path}
                    onClick={onClick}
                    backgroundColor={active && "blue.700"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: "white", bg: "blue.700" , color: "white"}}
                    w={navSize == "large" && "100%"}

                >
                <MenuButton w="100%" >
                    <Flex>
                        <Icon as={icon} fontSize="xl"  />
                        <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                    </Flex>
                </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

export default NavItem