'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
	return (
		<div>
			<CountUp
				end={amount}
				prefix="€"
				decimal=","
				decimals={2}
				separator="."
			/>
		</div>
	);
};

export default AnimatedCounter;
