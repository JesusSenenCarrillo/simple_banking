import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
	const loggedIn = { firtName: 'Jesús' };
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firtName || 'Guest'}
						subtext="Access and manage your account and trasactions efficiently."
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1312.42}
					/>
				</header>
			</div>
		</section>
	);
};

export default Home;
