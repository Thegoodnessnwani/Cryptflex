import Button from "../button-primary";
import { NoSymbolIcon } from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { twMerge } from "tailwind-merge";

export default function ProductCard({
    src,
    title,
    price,
    description,
    id,
    count,
    onCTAClick,
    checkout,
}: {
    src: string;
    title: string;
    price: number;
    id: number;
    description: string;
    count: number;
    checkout: boolean;
    onCTAClick?: (id: string) => void;
}) {
    return (
        <Card className="bg-transparent text-white border-none cursor-pointer">
            <CardContent className="px-0 space-y-5 h-full">
                <img
                    src={
                        src ||
                        "https://via.placeholder.com/300x300?text=Product"
                    }
                    alt={title}
                    className="w-full h-[24.5rem] object-cover rounded-md object-top"
                />
                <div className="name-price flex justify-between mt-2">
                    <h2
                        className={twMerge(
                            "text-gradient text-xl lg:text-2xl font-medium",
                            title.split(" ").length > 5 && "truncate"
                        )}
                    >
                        {title}
                    </h2>
                    <span className="text-xl lg:text-2xl font-medium">
                        ${price}
                    </span>
                </div>
                <p
                    className={twMerge(
                        "text-sm leading-6 max-w-lg mt-2"
                        // description.split(" ").length > 20 && "truncate"
                    )}
                >
                    {description}
                </p>
                {count && (
                    <Button
                        variant="primary"
                        className="mt-2 h-10 px-4"
                        onClick={() => {
                            if (onCTAClick) {
                                onCTAClick(id.toString());
                                return;
                            }

                            console.log("Buy now clicked for product id: ", id);
                        }}
                    >
                        {checkout ? "PAY" : "BUY NOW"}
                    </Button>
                )}

                {!count && (
                    <Badge className="bg-white text-red-400 h-10 flex items-center space-x-2 max-w-max">
                        <NoSymbolIcon className="w-6 h-6" />
                        <span className="block">Item out of stock</span>
                    </Badge>
                )}
            </CardContent>
        </Card>
    );
}
