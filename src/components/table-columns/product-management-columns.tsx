import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { twMerge } from "tailwind-merge";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";

export type Products = {
    product_id: string;
    product: {
        product_name: string;
        product_category: string;
        product_image: string;
    };
    product_inventory: number;
    product_price: number;
    product_rating: number;
};

export const Columns: ColumnDef<Products>[] = [
    {
        id: "select",
        header: ({ table }) => {
            return (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                    className="border-white"
                />
            );
        },
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="border-white"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "product",
        header: "product",
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-x-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage
                            src={
                                row.original.product.product_image ||
                                "https://i.pravatar.cc/300"
                            }
                            alt="@pravatar"
                        />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div className="">
                        <div>{row.original.product.product_name}</div>
                        <div
                            className={twMerge(
                                "text-sm text-white",
                                row.getIsSelected() && "text-black"
                            )}
                        >
                            {row.original.product.product_category}
                        </div>
                    </div>
                </div>
            );
        },
    },

    {
        accessorKey: "product_price",
        header: "product price",
        cell: ({ row }) => {
            return <div>${row.original.product_price}</div>;
        },
    },

    {
        accessorKey: "product_rating",
        header: "ratings",
    },

    {
        accessorKey: "product_inventory",
        header: "inventory",
        cell: ({ row }) => {
            const { product_inventory } = row.original;
            return (
                <Badge
                    className={twMerge(
                        "rounded-full py-[0.25619rem] px-[0.76856rem]  text-base max-w-max text-center",
                        product_inventory
                            ? "text-white bg-transparent"
                            : "text-[#F52525] bg-badge-red",
                        row.getIsSelected() && "text-black"
                    )}
                >
                    {product_inventory
                        ? product_inventory + " in Stock"
                        : "Out of Stock"}
                </Badge>
            );
        },
        // size: 300,
    },
];
