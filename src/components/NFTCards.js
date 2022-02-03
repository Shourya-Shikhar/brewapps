// import Moralis from "moralis";
import React from "react";
import { categoryState } from "../atoms/categoryAtom";
import { useRecoilValue } from "recoil";
import Photo1 from "../assets/Trending/photo-1642525027649-00d7397a6d4a.jpg";
import Photo2 from "../assets/Trending/tezos-Tgq8oggf0EY-unsplash.jpg";
import Photo3 from "../assets/Trending/tezos-jA3WjtwdpIY-unsplash.jpg";
import Photo4 from "../assets/Latest/kamran-abdullayev-DyPuAsPVj6Q-unsplash.jpg";
import Photo5 from "../assets/Latest/kamran-abdullayev-OGM4C3ATgE0-unsplash.jpg";
import Photo6 from "../assets/Latest/phil-hearing-IYfp2Ixe9nM-unsplash.jpg";
import Photo7 from "../assets/Popular/adam-mirza-qwuXyVOAWko-unsplash.jpg";
import Photo8 from "../assets/Popular/faruk-kaymak-KTsg_xKnB3E-unsplash.jpg";
import Photo9 from "../assets/Popular/jocelyn-morales-urzLXNmiJi8-unsplash.jpg";
import Photo10 from "../assets/Genesis/brett-jordan-E1por_SGvJE-unsplash.jpg";
import Photo11 from "../assets/Genesis/nasa--hI5dX2ObAs-unsplash.jpg";
import Photo12 from "../assets/Genesis/pablo-martinez-pO1TjoE19qA-unsplash.jpg";
import Photo13 from "../assets/Temple/sukhpreet-lotey-WdlLDIX6_q8-unsplash.jpg";
import Photo14 from "../assets/Temple/sanjan-malakala-P9JAVSExxh0-unsplash.jpg";
import Photo15 from "../assets/Temple/timothy-chan-HprJoPvgk-s-unsplash.jpg";
import Photo16 from "../assets/Void/alexis-fauvet-L-3oTJhmsW4-unsplash.jpg";
import Photo17 from "../assets/Void/cj-dayrit-rcdsvUo-5WY-unsplash.jpg";
import Photo18 from "../assets/Void/james-lee-lnIwKspeuTs-unsplash.jpg";
import Photo19 from "../assets/#BAYC/dylan-calluy-E4TBps9k_Po-unsplash.jpg";
import Photo20 from "../assets/#BAYC/kelly-sikkema-r077pfFsdaU-unsplash.jpg";
import Photo21 from "../assets/#BAYC/nikldn-t-6GW8T6Jsc-unsplash.jpg";

function NFTCards() {
	const category = useRecoilValue(categoryState);
	var images = [];

	if (category === "trending NFTs") {
		images = [Photo1, Photo2, Photo3];
	} else if (category === "latest nfts") {
		images = [Photo4, Photo5, Photo6];
	} else if (category === "popular nfts") {
		images = [Photo7, Photo8, Photo9];
	} else if (category === "genesis") {
		images = [Photo10, Photo11, Photo12];
	} else if (category === "temple") {
		images = [Photo13, Photo14, Photo15];
	} else if (category === "void") {
		images = [Photo16, Photo17, Photo18];
	} else {
		images = [Photo19, Photo20, Photo21];
	}

	// async function getData() {
	// 	const unsplashData = await fetch(
	// 		`https://api.unsplash.com/search/photos?query=${category}&client_id=jeblAix-hFHSBOJVN9OWGBt7GvsEXIhmgeREXm1I44M`
	// 	).then((data) => {
	// 		const images = data.results.map((d) => d.urls.full)
	// 		return images;
	// 	)}
	// }

	return (
		<div className="flex -mx-2">
			{images.map((src) => (
				<div className="rounded-lg flex-col w-1/3 h-80 mx-2 overflow-hidden">
					<img src={src} alt="" className="w-full object-cover" />
					<div className="bg-black hover:bg-white h-32 flex text-white hover:text-black">
						<h1>@Name</h1>
						<p>Description</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default NFTCards;
