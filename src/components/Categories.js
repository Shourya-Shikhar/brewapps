import { categoryState } from "../atoms/categoryAtom";
import { useRecoilState } from "recoil";

function Categories() {

	const [category, setCategory] = useRecoilState(categoryState);


	return (
		<div className="flex items-start justify-evenly space-x-3 mb-3">
			<div className={category==="trending NFTs" ? "selected" : "unselected"} onClick={()=>{setCategory("trending NFTs")}}>
				<p> &#128293; 24h Trending</p>
			</div>
			<div className={category === "latest nfts" ? "selected":"unselected"} onClick={()=>{setCategory("latest nfts")}}>
				<p>Latest Shows</p>
			</div>
			<div className={category === "popular nfts" ? "selected":"unselected"} onClick={()=>{setCategory("popular nfts")}}>
				<p>Most Popular</p>
			</div>
			<div className={category === "genesis" ? "selected":"unselected"} onClick={()=>{setCategory("genesis")}}>
				<p>&#128142;In Genesis</p>
			</div>
			<div className={category === "temple" ? "selected":"unselected"} onClick={()=>{setCategory("temple")}}>
				<p>&#128725; In Temple</p>
			</div>
			<div className={category === "void" ? "selected":"unselected"} onClick={()=>{setCategory("void")}}>
				<p>🌪️ In Void</p>
			</div>
			<div className={category === "bored ape yacht club" ? "selected":"unselected"} onClick={()=>{setCategory("bored ape yacht club")}}>
				<p>&#129421;#BAYC</p>
			</div>
		</div>
	);
}

export default Categories;
