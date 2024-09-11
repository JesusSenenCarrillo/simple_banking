import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
	const loggedIn = {
		firstName: "Jesús",
		lastName: "Senén Carrillo",
		email: "jesussenen2000@gmail.com",
	};
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
						subtext="Access and manage your account and transactions efficiently."
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={3}
						totalCurrentBalance={1312.42}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={loggedIn}
				transaction={[]}
				banks={[{ currentBalance: 1424 }, { currentBalance: 126 }]}
			/>
		</section>
	);
};

export default Home;
