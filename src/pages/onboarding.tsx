import Button from "@/components/global/button-primary";
import TagSVG from "@/components/svg-components/tag";
import { useNavigation } from "@/hooks/use-navigate";
export default function Onboarding() {
    // console.log(auth)
    const { navigate } = useNavigation();
    return (
        <section className="flex w-full flex-col gap-y-10 justify-center my-8">
            <div className="space-y-7 text-center">
                <h2 className="text-xl font-semibold lg:text-2xl">
                    Ready to get started?
                </h2>
                <p className="leading-7 space-y-2 max-w-lg mx-auto">
                    <span className="block">
                        By clicking
                        <em className="font-medium">"Become a Merchant"</em>,
                        you're taking the first step towards selling your
                        products or services on Cryptflex and reaching a wider
                        audience of crypto enthusiasts.
                    </span>
                    <span className="block">
                        By clicking{" "}
                        <em className="font-medium">"Start Shopping"</em>,
                        you're entering a world of exciting crypto-powered
                        purchases, where you can explore unique products and
                        enjoy flexible payment options.
                    </span>
                </p>
            </div>

            <div className="space-y-10">
                <TagSVG className="max-w-max mx-auto" />
                <div className="flex flex-col gap-5 sm:flex-row items-center md:space-y-0 justify-between text-center max-w-xs mx-auto">
                    <Button
                        variant="primary"
                        className="text-sm block h-10 px-5"
                        onClick={() => navigate("/onboarding/merchant")}
                    >
                        Become a merchant
                    </Button>
                    <Button
                        variant="primary"
                        className="text-sm block h-10 px-5"
                    >
                        Start shopping
                    </Button>
                </div>
            </div>
        </section>
    );
}
