import { BellIcon } from "@heroicons/react/24/outline";

export default function BellIconWithNotification({
    hasNotification,
}: {
    hasNotification: true | false;
}) {
    return (
        <div className="relative inline-block">
            <BellIcon className="w-6 h-6" />
            {hasNotification && (
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            )}
        </div>
    );
}
