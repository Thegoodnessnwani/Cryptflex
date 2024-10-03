import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Quote from "../svg-components/quote";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
    {
        avatar: "https://i.pravatar.cc/300",
        name: "Lord Smith",
        description:
            "Cryptflex's installment plan made my big purchase possible. I was able to spread out the cost over time and enjoy my new item sooner",
    },

    {
        avatar: "https://i.pravatar.cc/300",
        name: "Lord Smith",
        description:
            "Cryptflex's installment plan made my big purchase possible. I was able to spread out the cost over time and enjoy my new item sooner",
    },

    {
        avatar: "https://i.pravatar.cc/300",
        name: "Lord Smith",
        description:
            "Cryptflex's installment plan made my big purchase possible. I was able to spread out the cost over time and enjoy my new item sooner",
    },
];

const TestimonialCard = ({
    imgSrc,
    name,
    description,
}: {
    imgSrc: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className=" bg-white/10 shadow-lg rounded-xl flex flex-col items-center p-6 text-white border-none cursor-pointer">
            <CardContent className="space-y-7">
                <Quote className="max-w-max mx-auto" />
                <Avatar className="w-14 h-14 mx-auto">
                    <AvatarImage src={imgSrc} alt={name} />
                    <AvatarFallback>{name.split("").shift()}</AvatarFallback>
                </Avatar>
                {/* Profile Description */}
                <p className="text-center text-sm mb-4 leading-6 max-w-sm">
                    {description}
                </p>
                {/* Profile Name */}
                <h2 className="font-semibold text-center">{name}</h2>
            </CardContent>
        </Card>
    );
};

const Testimonial = () => {
    return (
        <Carousel
            className="w-full"
            opts={{
                align: "center",
                slidesToScroll: 1,
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3500,
                }),
            ]}
        >
            <CarouselContent className="-ml-8">
                {testimonials.map((testimony, index) => {
                    return (
                        <CarouselItem
                            key={index}
                            className="pl-8 md:basis-[60%]"
                        >
                            <TestimonialCard
                                name={testimony.name}
                                imgSrc={testimony.avatar + `?u=${index}`}
                                description={testimony.description}
                            />
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>
    );
};

export default Testimonial;
