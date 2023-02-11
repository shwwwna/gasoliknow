import Head from "next/head";
import { useState, useEffect } from "react";
import {
	Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, FormControl, FormLabel, Stat, StatNumber, StatHelpText, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Card, CardBody, CardHeader, Heading, Tooltip, SimpleGrid, Center, CardFooter, useMediaQuery, Container
} from "@chakra-ui/react";
import { AddIcon, InfoOutlineIcon, MinusIcon } from "@chakra-ui/icons";
import Search from "@/components/Search";
import format from "@/utils/numberFormatter";


export default function Home() {
	// Initialize values
	const [data, setData] = useState({
		distance: 1,
		economy: 10,
		distanceHighway: 0,
		economyHighway: 15,
		minutesIdle: 0,
		price: 69,
	});
	// Save the values into `data` when changed
	const handleChange = (e) =>
		setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	
	// Initialize result
	const [result, setResult] = useState(0)
	const [liters, setLiters] = useState(0);
	
	// When `data` changes, set `result`
	useEffect(() => {
		let rawLiters =
			(data.distance / data.economy + data.distanceHighway / data.economyHighway) +
			(data.minutesIdle / 60) * 0.8;
		setLiters(rawLiters);
		
		let rawResult =
			(rawLiters * data.price);
		setResult(rawResult);

	}, [data]);


	
	const [days, setDays] = useState(4);
	const handleChangeDays = (e) => setDays(e.target.value);
	
	const [carpool, setCarpool] = useState(2)
	const handleChangeCarpool = (e) =>
		setCarpool(e.target.value);

	const [lg] = useMediaQuery("(min-width: 62em)");
	
	

	return (
		<>
			<Head>
				<title>GasoliKnow - Calculate your trip costs</title>
				<meta
					name="description"
					content="Calculate how much your car trip costs, in Pesos and Liters."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Box>
				<Search />
			</Box> */}

			<Center minH="calc(100vh)" p={8}>
				<SimpleGrid
					spacing={4}
					columns={{
						base: 1,
						lg: 3,
					}}>
					<Card size="md" variant="elevated" maxWidth="500px">
						<Search />
						{lg ? (
							""
						) : (
							<CardHeader>
								<Heading size="md">calculate</Heading>
							</CardHeader>
						)}

						<CardBody>
							<Box maxWidth="250px">
								<Stack spacing={3}>
									<FormControl id="distance">
										<FormLabel>Distance</FormLabel>
										<InputGroup>
											<Input
												type="num"
												name="distance"
												onChange={handleChange}
												value={data.distance}
											/>
											<InputRightAddon>km</InputRightAddon>
										</InputGroup>
									</FormControl>
									<FormControl id="economy">
										<FormLabel>Fuel economy</FormLabel>
										<InputGroup>
											<Input
												type="num"
												name="economy"
												onChange={handleChange}
												value={data.economy}
											/>
											<InputRightAddon>km per L</InputRightAddon>
										</InputGroup>
									</FormControl>
								</Stack>
							</Box>

							<Box my={8} spacing={3}>
								<Accordion allowMultiple>
									<AccordionItem>
										{({ isExpanded }) => (
											<>
												<h2>
													<AccordionButton>
														<AddIcon fontSize="12px" marginRight={5} />
														<Box as="span" flex="1" textAlign="left">
															Also pass through highway
														</Box>
													</AccordionButton>
												</h2>
												<AccordionPanel pb={4}>
													<Stack spacing={3}>
														<FormControl id="distanceHighway">
															<FormLabel>Distance on highway</FormLabel>
															<InputGroup maxWidth="250px">
																<Input
																	type="num"
																	name="distanceHighway"
																	onChange={handleChange}
																	placeholder={data.distanceHighway}
																/>
																<InputRightAddon>km</InputRightAddon>
															</InputGroup>
														</FormControl>
														<FormControl id="economyHighway">
															<Flex align={"baseline"}>
																<FormLabel>Fuel economy on highway </FormLabel>
																<Tooltip
																	hasArrow
																	label="
													Highway fuel economy could be from 1.15-2.10x (average: 1.5x) of
													city fuel economy."
																	bg="gray.800"
																	color="white"
																	closeDelay={500}>
																	<InfoOutlineIcon marginLeft="2" />
																</Tooltip>
															</Flex>
															<InputGroup maxWidth="250px">
																<Input
																	type="num"
																	name="economyHighway"
																	onChange={handleChange}
																	value={data.economyHighway}
																/>
																<InputRightAddon>km per L</InputRightAddon>
															</InputGroup>
														</FormControl>
													</Stack>
												</AccordionPanel>
											</>
										)}
									</AccordionItem>

									<AccordionItem>
										{({ isExpanded }) => (
											<>
												<h2>
													<AccordionButton>
														<AddIcon fontSize="12px" marginRight={5} />
														<Box as="span" flex="1" textAlign="left">
															Idling / stuck in traffic
														</Box>
													</AccordionButton>
												</h2>
												<AccordionPanel pb={4} maxWidth="250px">
													<FormControl id="minutesIdle">
														<Flex align={"baseline"}><FormLabel>
															Minutes spent idling
															
														</FormLabel><Tooltip
																hasArrow
																label="
													An idling vehicle uses about 0.8 litres of fuel per hour. If your
													fuel economy values are accurate, you might not need to add this."
																bg="gray.800"
																color="white"
																closeDelay={500}>
																<InfoOutlineIcon marginLeft="2" />
															</Tooltip></Flex>
														
														<InputGroup>
															<Input
																type="num"
																name="minutesIdle"
																onChange={handleChange}
																placeholder={data.minutesIdle}
															/>
															<InputRightAddon>min</InputRightAddon>
														</InputGroup>
													</FormControl>
												</AccordionPanel>
											</>
										)}
									</AccordionItem>
								</Accordion>
							</Box>

							<Box maxWidth="250px">
								<FormControl id="price">
									<FormLabel>Fuel price</FormLabel>
									<InputGroup>
										<InputLeftAddon>₱</InputLeftAddon>
										<Input
											type="num"
											name="price"
											onChange={handleChange}
											value={data.price}
										/>
										<InputRightAddon>per L</InputRightAddon>
									</InputGroup>
								</FormControl>
							</Box>
						</CardBody>

						{lg ? (
							<CardFooter>
								<Heading size="md">calculate</Heading>
							</CardFooter>
						) : (
							""
						)}
					</Card>

					<Card size="md" variant="elevated" maxWidth="500px">
						{lg ? (
							""
						) : (
							<CardHeader>
								<Heading size="md">your trip</Heading>
							</CardHeader>
						)}

						<CardBody>
							<Stack>
								<Stat>
									<StatNumber fontSize="6xl">₱{format(result)}</StatNumber>
									<StatHelpText>one trip</StatHelpText>
									<StatHelpText>{format(liters)} Liters</StatHelpText>
								</Stat>
								<Stat>
									<StatNumber fontSize="6xl">₱{format(result * 2)}</StatNumber>
									<StatHelpText>round trip</StatHelpText>
									<StatHelpText>{format(liters * 2)} Liters</StatHelpText>
								</Stat>
							</Stack>

							{/* <Button colorScheme="blue" onClick={handleSaveLog}>Save trip</Button>
				{saveLog} */}
						</CardBody>

						{lg ? (
							<CardFooter>
								<Heading size="md">your trip</Heading>
							</CardFooter>
						) : (
							""
						)}
					</Card>
					<Card size="md" variant="elevated" maxWidth="500px">
						{lg ? (
							""
						) : (
							<CardHeader>
								<Heading size="md">costs</Heading>
							</CardHeader>
						)}

						<CardBody>
							<TableContainer>
								<Table size="sm">
									<Thead>
										<Tr>
											<Th isNumeric></Th>
											<Th>Recurring</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td isNumeric>₱{format(result * 2 * days)}</Td>
											<Td>
												<Flex align={"baseline"} gap={2}>
													for{" "}
													<Input
														size="sm"
														maxW={10}
														min={0}
														name="days"
														onChange={handleChangeDays}
														value={days}
													/>{" "}
													days
												</Flex>
												(round trip x {days})
											</Td>
										</Tr>
										<Tr>
											<Td isNumeric>₱{format(result * 2 * 5)}</Td>
											<Td>weekly (round trip x 5)</Td>
										</Tr>
										<Tr>
											<Td isNumeric>₱{format(result * 2 * 22)}</Td>
											<Td>monthly (round trip x 22)</Td>
										</Tr>
										<Tr>
											<Td isNumeric>₱{format(result * 2 * 260)}</Td>
											<Td>yearly (round trip x 260)</Td>
										</Tr>

										<Tr>
											<Th isNumeric></Th>
											<Th>
												<Flex align={"baseline"} gap={2}>
													for a carpool of{" "}
													<Input
														size="sm"
														w={10}
														min={2}
														name="carpool"
														onChange={handleChangeCarpool}
														value={carpool}
													/>
												</Flex>
											</Th>
										</Tr>
										<Tr>
											<Td isNumeric>₱{format(result / carpool)}</Td>
											<Td>one trip per person</Td>
										</Tr>
										<Tr>
											<Td isNumeric>₱{format((result * 2) / carpool)}</Td>
											<Td>round trip per person</Td>
										</Tr>
									</Tbody>
								</Table>
							</TableContainer>
						</CardBody>

						{lg ? (
							<CardFooter>
								<Heading size="md">costs</Heading>
							</CardFooter>
						) : (
							""
						)}
					</Card>
				</SimpleGrid>
			</Center>
		</>
	);
}
