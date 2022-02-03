import Header from "./components/Header";
import NFTCards from "./components/NFTCards";

function App() {
	return (
		<div className="p-5">
			<main className="sticky top-0 font-roboto">
				{/* Header */}
				<Header />
				{/* NFTs */}
				<NFTCards/>
			</main>
		</div>
	);
}

export default App;
