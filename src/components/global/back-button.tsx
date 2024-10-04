import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { useNavigation } from "@/hooks/use-navigate";

export default function BackButton() {
    const { navigate } = useNavigation();
    return (
        <Button
            variant={"ghost"}
            onClick={() => navigate(-1)}
            className="flex items-center gap-x-2 text-white hover:text-textPrimary border hover:text-textSecondary"
        >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back</span>
        </Button>
    );
}
