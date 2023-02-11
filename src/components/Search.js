import {
	Flex,
	IconButton,
	Input,
	Link,
	Stack,
	FormControl,
	FormLabel,
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Heading,
	Divider, Tooltip
} from "@chakra-ui/react";

import {
	ExternalLinkIcon,
	SearchIcon,
	QuestionIcon,
	InfoOutlineIcon,
} from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
import DOEMenu from "./DOEMenu";

const Search = () => {

   
	const [car, setCar] = useState("");
	const handleChangeCar = (e) => setCar(e.target.value);

	const [destination, setDestination] = useState({
		first: "",
		second: "",
	});
	const handleChangeDestination = (e) =>
		setDestination((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
      }));
   
   const { isOpen, onOpen, onClose } = useDisclosure();
			const firstField = React.useRef();


	return (
		<>
			<Button rightIcon={<QuestionIcon />} onClick={onOpen} colorScheme="yellow">
				Get all data
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				initialFocusRef={firstField}
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">Know all data here!</DrawerHeader>

					<DrawerBody>
						<Stack spacing="24px">
							<Box>
								<Heading size="md" mb="3">
									Distance
								</Heading>
								<Flex gap={1} align={"flex-end"}>
									<FormControl id="destinationFirst">
										<FormLabel>Start</FormLabel>
										<Input
											type="num"
											name="first"
											onChange={handleChangeDestination}
											value={destination.first}
											placeholder="Manila"
											ref={firstField}
										/>
									</FormControl>
									<FormControl id="destinationSecond">
										<FormLabel>End</FormLabel>
										<Input
											type="num"
											name="second"
											onChange={handleChangeDestination}
											value={destination.second}
											placeholder="Makati"
										/>
									</FormControl>
									<Link
										href={
											"https://www.google.com/maps/dir/" +
											destination.first +
											"/" +
											destination.second
										}
										isExternal>
										<IconButton aria-label="Search database" icon={<SearchIcon />} />
									</Link>
								</Flex>
							</Box>
							<Divider orientation="horizontal" />
							<Box>
								<Heading size="md" mb="3">
									Fuel economy
								</Heading>
								<Flex gap={1} align={"flex-end"}>
									<FormControl id="car">
										<Flex align={"baseline"}><FormLabel>
											Car model
										</FormLabel>
											<Tooltip
												hasArrow
												label="It's best to check your car's dashboard or Facebook groups. There are many real-life factors like maintenance and additional passengers. The advertised fuel economy value is almost always higher than actual."
												bg="gray.800"
												color="white"
												closeDelay={500}>
												<InfoOutlineIcon marginLeft="2" />
											</Tooltip></Flex>
										
										<Input
											type="num"
											name="car"
											onChange={handleChangeCar}
											value={car}
											placeholder="Fortuner"
										/>
									</FormControl>
									<Link
										href={"https://www.google.com/search?q=" + car + "+fuel+economy"}
										isExternal>
										<IconButton aria-label="Search database" icon={<SearchIcon />} />
									</Link>
								</Flex>
							</Box>

							<Divider orientation="horizontal" />
							<Box>
								<Heading size="md" mb="3">
									Fuel price
								</Heading>
								<DOEMenu />
								<Stack my="3">
									<b>Other sources</b>
									<Link href="https://www.expatistan.com/price/gas/manila" isExternal>
										Expatistan <ExternalLinkIcon mx="2px" />
									</Link>
									<Link
										href="https://www.globalpetrolprices.com/Philippines/gasoline_prices/"
										isExternal>
										GlobalPetrolPrices <ExternalLinkIcon mx="2px" />
									</Link>
									<Link href="https://www.numbeo.com/gas-prices/in/Manila" isExternal>
										Numbeo <ExternalLinkIcon mx="2px" />
									</Link>
								</Stack>
							</Box>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Search;
