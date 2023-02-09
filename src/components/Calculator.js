import {
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Stack,
} from "@chakra-ui/react";

import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Box,
} from "@chakra-ui/react";

const Calculator = () => {
	return (
		<>
			<Stack spacing={3}>
				<FormControl id="distance">
					<FormLabel>Distance</FormLabel>
					<InputGroup>
						<Input type="num" />
						<InputRightAddon children="km (kilometers)" />
					</InputGroup>
				</FormControl>
				<FormControl id="fuel-efficiency">
					<FormLabel>Fuel efficiency</FormLabel>
					<InputGroup>
						<Input type="num" />
						<InputRightAddon children="km/L" />
					</InputGroup>
				</FormControl>
				<FormControl id="fuel-spent">
					<FormLabel>Fuel spent</FormLabel>
					<InputGroup>
						<Input type="num" />
						<InputRightAddon children="L (liters)" />
					</InputGroup>
				</FormControl>
				<FormControl id="fuel-price">
					<FormLabel>Fuel price</FormLabel>
					<InputGroup>
						<InputLeftAddon children="₱" />
						<Input type="num" />
					</InputGroup>
				</FormControl>
			</Stack>
		</>
	);
};

export default Calculator;
