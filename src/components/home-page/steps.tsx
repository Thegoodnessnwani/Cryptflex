const stepsData = [
    {
        number: 1,
        title: "Browse and Select",
        description:
            "Explore our curated collection of luxury products. Once you've found the perfect item, simply click on it to view more details.",
    },
    {
        number: 2,
        title: "Add to cart",
        description:
            "Once you've selected your product, add it to your cart. You can continue browsing or proceed to set up an installment plan.",
    },
    {
        number: 3,
        title: "Set up installment plan",
        description:
            "Select the installment plan that best suits your budget and preferences. Determine the frequency and amount of your payments.",
    },
    {
        number: 4,
        title: "Confirm Your Order",
        description:
            "Review your order details, including the total cost in your selected currency, and confirm your purchase.",
    },
    {
        number: 5,
        title: "Await Delivery",
        description:
            "Your product will be shipped to you promptly. Enjoy your new purchase!",
    },
];

const Steps = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 mt-8">
            {stepsData.map((step, index) => (
                <div key={index} className="flex mb-8 gap-4">
                    {/* Circle icon placeholder */}
                    <div className="w-10 h-10 rounded-full p-4 flex items-center justify-center text-center bg-black">
                        <h1 className="text-white text-center ">
                            {step.number}
                        </h1>
                        {/* You can replace the below div with an actual icon/image if needed */}
                        {/* <div className="w-4 h-4 bg-black rounded-full"></div> */}
                    </div>

                    {/* Text content */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-300 text-sm max-w-xs">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Steps;
