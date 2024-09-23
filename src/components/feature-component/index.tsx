import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function FeatureContainer({
    SVG,
    featureTitle,
    featureDescription,
}: {
    SVG: React.ReactNode;
    featureTitle: string;
    featureDescription: string;
}) {
    return (
        <Card className="rounded-[0.4375rem] max-w-max bg-white/10 border-none p-1 text-white">
            <CardHeader className="space-y-1">
                <img
                    src={SVG as string}
                    alt="Feature Vector"
                    className="w-[4.6875rem] h-[4.6875rem]"
                />
                <CardTitle className="text-gradient font-[500] text-lg xl:text-xl">
                    {featureTitle}
                </CardTitle>
            </CardHeader>
            <CardContent className="font-inter">
                <p className="font-[400] text-sm sm:text-base leading-7 xl:leading-9">
                    {featureDescription}
                </p>
            </CardContent>
        </Card>
    );
}
