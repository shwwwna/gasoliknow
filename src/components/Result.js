import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
} from "@chakra-ui/react";

const Result = () => {
	return (
		<>
			<Stat>
				<StatLabel>Your trip costs</StatLabel>
				<StatNumber fontSize="6xl">₱</StatNumber>
				<StatHelpText>one trip</StatHelpText>
			</Stat>
		</>
	);
};

export default Result;
