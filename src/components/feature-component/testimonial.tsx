import React from "react";
import pic1 from "../../assets/pic1.svg";
import pic2 from "../../assets/pic2.svg";
import pic3 from "../../assets/pic3.svg";

const TestimonialCard = ({ imgSrc, name, description }) => {
    return (
		<div className="w-80 h-80 bg-gray-200 shadow-lg rounded-xl flex flex-col items-center p-6">
			<h2 className="text-4xl mb-4">""</h2>
			<div className="w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center mb-4">
				<img
					src={imgSrc}
					alt={name}
					className="w-16 h-16 rounded-full object-cover"
				/>
			</div>
			{/* Profile Description */}
			<p className="text-gray-600 text-center text-xs mb-4">{description}</p>
			<div className="flex-grow"></div>
			{/* Profile Name */}
			<h2 className="font-semibold">{name}</h2>
		</div>
	);
};

const Testimonial = () => {
	return (
		<div className="flex justify-center space-x-8 my-12">
			{/* First Card */}
			<TestimonialCard
				// <img src={Trust} alt="Feature Vector" className="" />
				imgSrc={pic1}
				name="Lord Smith"
				description="Cryptflex's installment plan made my big purchase possible. I was able to spread out the cost over time and enjoy my new item sooner"
			/>
			{/* Second Card */}
			<TestimonialCard
				imgSrc={pic2}
				name="Nichole Adams"
				description="I've used cryptflex for multiple purchases and have always been satisfied. The process is simple, and the customer service is great. "
			/>
			{/* Third Card */}
			<TestimonialCard
				imgSrc={pic3}
				name="Maria James"
				description="I was initially skeptical about installment payments, but cryptflex put my mind at ease. The process was transparent, and there were no hidden fees."
			/>
		</div>
	);
};

export default Testimonial;
