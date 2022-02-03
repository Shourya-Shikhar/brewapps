import { BadgeCheckIcon } from "@heroicons/react/solid";
import Categories from "./Categories";


function Header() {

	return (
		<div>
			<div>
				<h1 className="text-4xl font-bold mb-3">Live Spaces</h1>
				<h1 className="text-xl text-gray-500 font-light flex items-center mb-6">
					<BadgeCheckIcon className="h-6 w-6 text-black mr-2" />
					All NFTs on Cyber either belong to or were minted by their space
					creator.
				</h1>
			</div>
			<div>
				{/* Category Badges */}
				<Categories />
			</div>
		</div>
	);
}

export default Header;
