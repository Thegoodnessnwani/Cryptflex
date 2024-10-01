/* eslint-disable no-irregular-whitespace */
import FeatureContainer from "../global/feature-component";
import clockSVG from "../../assets/clock.svg";
import graphSVG from "../../assets/graph.svg";
import lockSVG from "../../assets/lock.svg";
import Button from "../global/button-primary";
import Phone from "../../assets/phone.svg";
import { mockProducts } from "@/lib/mock-products";
import Phone2 from "../../assets/phone2.svg";
import files from "../../assets/Empty-Files.svg";
import Faq from "../global/faq";
import Steps from "./steps";
import ProductCard from "../global/product-card";
import { lazy } from "react";

function main() {
    const Testimonial = lazy(() => import("../home-page/testimonial"));
    const TrustedUsers = lazy(() => import("../global/trusted-users"));

    return (
        <div className="flex  flex-col  items-center justify-center mx-auto max-w-[1400px] overflow-x-hidden mt-10 px-2 xl:px-3">
            <div className="flex flex-col items-center justify-center gap-8 w-[70%] mt-8">
                {/* <img src={Trust} alt="Feature Vector" className="" /> */}
                <div>
                    <TrustedUsers />
                </div>
                <h1 className="text-gradient text-[2.5rem] font-semibold text-center">
                    Cryptflex, Your Crypto Installment Solution
                </h1>
                <p className="text-center text-[0.9rem]  max-w-[700px] leading-7">
                    Cryptflex offers the ultimate flexibility in crypto
                    payments. Choose from a variety of installment plans
                    tailored to your budget and lifestyle. Enjoy the freedom of
                    buying now and paying later without the burden of
                    high-interest credit card debt.
                </p>
                <Button variant="primary" className="h-11 px-6">
                    Connect Wallet
                </Button>
            </div>
            <div className="px-3 space-y-4 lg:space-y-0 lg:flex lg:gap-4 mt-8">
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
                <h1 className="text-[2rem] lg:text-[2.5rem] font-semibold">
                    What We Do?
                </h1>
                <p className="text-center text-[0.9rem] leading-7">
                    Cryptflex is a revolutionary blockchain-based installment
                    payment system designed to empower crypto earners with
                    flexible and convenient payment options. Our platform
                    enables users to purchase products using flexible payment
                    plans with USDC, without incurring high-value debts.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mt-16">
                <h1 className="text-[2rem] lg:text-[2.5rem] font-semibold">
                    How It Works
                </h1>
                <div className="space-y-3 lg:space-y-0 lg:flex lg:flex-row gap-8">
                    <img
                        src={Phone}
                        alt="Feature Vector"
                        className="w-[70%] mx-auto lg:mx-0 lg:w-[45%]"
                    />
                    <Steps />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen py-12">
                <h2 className="text-[2rem] text-center my-16 lg:text-[2.5rem] font-semibold">
                    Product Catalog
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-y-6 w-full">
                    {mockProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                count={product.rating.count}
                                description={product.description}
                                id={product.id}
                                price={product.price}
                                src={product.image}
                                title={product.title}
                                checkout={false}
                            />
                        );
                    })}
                </div>
            </div>

            <h1 className="text-[2rem] lg:text-[2.5rem] mt-16 mb-10 text-center font-semibold max-w-2xl">
                Pay Small Small with Cryptflex Installments Plan
            </h1>

            <div className="space-y-6 lg:space-y-0 lg:flex lg:flex-row gap-16 items-center justify-center">
                <div className="mx-auto  text-center lg:text-left lg:mx-0 lg:w-[40%]">
                    <img
                        src={files}
                        alt="Feature Vector"
                        className="max-w-max mx-auto"
                    />
                    <h2 className=" text-[1.7rem] font-medium lg:text-[2.25rem] mb-4">
                        Flexible Installment Payments with Cryptflex
                    </h2>
                    <p className="max-w-2xl leading-7">
                        Cryptflex offers flexible installment payment options
                        for your purchases. Simply choose the number of
                        installments that suits your budget, and we'll calculate
                        the payment amount for each installment. Enjoy
                        interest-free payments and convenient recurring charges
                        to your credit card.
                    </p>
                </div>
                <div className="">
                    <img
                        src={Phone2}
                        alt="Feature Vector"
                        className="w-[80%] mx-auto lg:mx-0"
                    />
                </div>
            </div>
            <h2 className="text-2xl lg:text-4xl text-center mt-12 font-semibold mb-7">
                Testimonials
            </h2>
            <Testimonial />
            <Faq />

            <div className="max-w-[20rem] flex flex-col text-center items-center justify-center gap-4 py-8">
                <h2 className="text-[1.2rem]">Get our latest updates</h2>
                <p className="text-xs">
                    Want to be the first to know about new
                    features, promotions, and exclusive offers? Enter your email
                    and subscribe!
                </p>
                <div className="bg-black rounded-md border-2 border-white py-2 px-4">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your email"
                        className="bg-black border-none outline-none"
                    />
                    <Button variant="primary">Subscribe</Button>
                </div>
                <p className="text-xs">
                    We’ll never share your details with third parties. <br />
                    View our Privacy Policy for more info.
                </p>
            </div>
        </div>
    );
}

export default main;
