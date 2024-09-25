import React from 'react'
import { Link } from "react-router-dom";
import FeatureContainer from "../feature-component";
import clockSVG from "../../assets/clock.svg";
import graphSVG from "../../assets/graph.svg";
import lockSVG from "../../assets/lock.svg";
import Button from "../button-primary";
import Trust from "../../assets/trust.svg";
import Phone from "../../assets/phone.svg";
import side from "../../assets/side.svg";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";

function main ()  {
  return (
		<div className="flex flex-col  items-center justify-center m-auto w-[85%]">
			<div className="flex flex-col items-center justify-center gap-8 w-[70%] mt-8">
				<img src={Trust} alt="Feature Vector" className="" />
				<h1 className="text-gradient text-[2rem]">
					Cryptflex, Your Crypto Installment Solution
				</h1>
				<p className="text-center text-[0.9rem]">
					Cryptflex offers the ultimate flexibility in crypto payments. Choose
					from a variety of installment plans tailored to your budget and
					lifestyle. Enjoy the freedom of buying now and paying later without
					the burden of high-interest credit card debt.
				</p>
				<Button variant="primary">Connect Wallet</Button>
			</div>
			<div className="px-3 flex flex-row gap-4 mt-8">
				<FeatureContainer
					featureDescription="Discover the convenience of flexible payments that fit seamlessly into your busy life. Spread out the cost of your purchases without feeling overwhelmed, and enjoy the peace of mind that comes with responsible spending."
					featureTitle="Flexible Installment Plans"
					SVG={graphSVG}
				/>
				<FeatureContainer
					featureDescription="Experience the convenience of paying with USDC, our preferred cryptocurrency. Our platform offers a seamless shopping experience, ensuring your transactions are processed quickly and securely."
					featureTitle="Seamless Transactions"
					SVG={clockSVG}
				/>
				<FeatureContainer
					featureDescription="Enjoy the transparency and accountability of blockchain-based payments. Every transaction is recorded on a public ledger, providing you with a clear and verifiable record of your financial activities."
					featureTitle="Trusted Transactions"
					SVG={lockSVG}
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-8 w-[70%] mt-16">
				<h1 className="text-gradient text-[2rem]">What We Do?</h1>
				<p className="text-center text-[0.9rem]">
					Cryptflex is a revolutionary blockchain-based installment payment
					system designed to empower crypto earners with flexible and convenient
					payment options. Our platform enables users to purchase products using
					flexible payment plans with USDC, without incurring high-value debts.
				</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-8 w-[70%] mt-16">
				<h1 className="text-gradient text-[2rem]">How It Works</h1>
				<div className="flex flex-row gap-8">
					<img src={Phone} alt="Feature Vector" className="w-[60%]" />
					<img src={side} alt="Feature Vector" className="w-[60%]" />
				</div>
			</div>
			<div className="product-catalog">
				<h2 className="text-center my-16 text-[1.5rem]">Product Catalog</h2>
				<div className="cards grid grid-cols-3  m-auto items-center justify-center w-[90%] mt-8">
					<div className="card w-[70%]">
						<img src={image1} alt="Feature Vector" className="w-full" />
						<div className="name-price flex justify-between mt-2">
							<h2>Ipad Pro Max</h2>
							<h2>$150</h2>
						</div>
						<p className="text-xs mt-2">
							The iPad Pro Max is a top-of-the-line tablet with a large display,
							powerful processor, and advanced features. It's ideal for
							professionals and those who demand the best.
						</p>
						<Button variant="primary" className="mt-2">
							BUY NOW
						</Button>
					</div>
					<div className="card w-[70%]">
						<img src={image2} alt="Feature Vector" className="w-full" />
						<div className="name-price flex justify-between mt-2">
							<h2>Ipad Pro Max</h2>
							<h2>$150</h2>
						</div>
						<p className="text-xs mt-2">
							The iPad Pro Max is a top-of-the-line tablet with a large display,
							powerful processor, and advanced features. It's ideal for
							professionals and those who demand the best.
						</p>
						<Button variant="primary" className="mt-2">
							BUY NOW
						</Button>
					</div>
					<div className="card w-[70%]">
						<img src={image3} alt="Feature Vector" className="w-full" />
						<div className="name-price flex justify-between mt-2">
							<h2>Ipad Pro Max</h2>
							<h2>$150</h2>
						</div>
						<p className="text-xs mt-2">
							The iPad Pro Max is a top-of-the-line tablet with a large display,
							powerful processor, and advanced features. It's ideal for
							professionals and those who demand the best.
						</p>
						<Button variant="primary" className="mt-2">
							BUY NOW
						</Button>
					</div>
				</div>
				<div className="cards grid grid-cols-3  m-auto items-center justify-center w-[90%] mt-8">
					<div className="card w-[70%]">
						<img src={image1} alt="Feature Vector" className="w-full" />
						<div className="name-price flex justify-between mt-2">
							<h2>Ipad Pro Max</h2>
							<h2>$150</h2>
						</div>
						<p className="text-xs mt-2">
							The iPad Pro Max is a top-of-the-line tablet with a large display,
							powerful processor, and advanced features. It's ideal for
							professionals and those who demand the best.
						</p>
						<Button variant="primary" className="mt-2">
							BUY NOW
						</Button>
					</div>
					<div className="card w-[70%]">
						<img src={image2} alt="Feature Vector" className="w-full" />
						<div className="name-price flex justify-between mt-2">
							<h2>Ipad Pro Max</h2>
							<h2>$150</h2>
						</div>
						<p className="text-xs mt-2">
							The iPad Pro Max is a top-of-the-line tablet with a large display,
							powerful processor, and advanced features. It's ideal for
							professionals and those who demand the best.
						</p>
						<Button variant="primary" className="mt-2">
							BUY NOW
						</Button>
					</div>
					<div className="card w-[70%]">
						<img src={image3} alt="Feature Vector" className="w-full" />
						<div className="name-price flex justify-between mt-2">
							<h2>Ipad Pro Max</h2>
							<h2>$150</h2>
						</div>
						<p className="text-xs mt-2">
							The iPad Pro Max is a top-of-the-line tablet with a large display,
							powerful processor, and advanced features. It's ideal for
							professionals and those who demand the best.
						</p>
						<Button variant="primary" className="mt-2">
							BUY NOW
						</Button>
					</div>
				</div>
          </div>
          
          
			<h1 className="text-gradient text-[2rem]">
				Pay Small Small with Cryptflex Installments Plan
			</h1>
		</div>
	);
}

export default main
