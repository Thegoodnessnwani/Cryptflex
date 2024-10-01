import { Card, CardContent } from "../ui/card";

type SalesSummaryCardProps = {
    amount: number;
    icon: React.ReactNode;
    label: string;
    financialData: boolean;
};

export default function SalesSummaryCard({
    amount,
    icon,
    label,
    financialData,
}: SalesSummaryCardProps) {
    return (
        <Card className="border-none bg-white/[.07] max-w-none  text-white">
            <CardContent className="space-y-4 font-inter p-6">
                {icon}
                <div className="space-y-2">
                    <p className="font-semibold text-lg lg:text-xl">
                        {financialData && "$"}
                        {amount}
                    </p>
                    <span className="block text-[#E8E8E8]">{label}</span>
                </div>
            </CardContent>
        </Card>
    );
}
