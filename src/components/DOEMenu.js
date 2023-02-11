import React from 'react'
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
   Link,
   Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, ExternalLinkIcon } from '@chakra-ui/icons';

const DOEMenu = () => {
   return (
				<Menu>
					<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
						Department of Energy
					</MenuButton>
					<MenuList>
						<Link
							href="https://www.doe.gov.ph/price-monitoring-charts?q=retail-pump-prices-metro-manila"
							isExternal>
							<MenuItem>Metro Manila</MenuItem>
						</Link>
						<Link
							href="https://www.doe.gov.ph/retail-pump-prices-north-luzon?q=retail-pump-prices-north-luzon"
							isExternal>
							<MenuItem>North Luzon</MenuItem>
						</Link>
						<Link
							href="https://www.doe.gov.ph/retail-pump-prices-north-luzon?q=retail-pump-prices-south-luzon"
							isExternal>
							<MenuItem>South Luzon</MenuItem>
						</Link>
						<Link
							href="https://www.doe.gov.ph/retail-pump-prices-north-luzon?q=retail-pump-prices-visayas"
							isExternal>
							<MenuItem>Visayas</MenuItem>
						</Link>
						<Link
							href="https://www.doe.gov.ph/retail-pump-prices-north-luzon?q=retail-pump-prices-mindanao"
							isExternal>
							<MenuItem>Mindanao</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			);
}

export default DOEMenu