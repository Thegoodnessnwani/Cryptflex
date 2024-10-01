import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { twMerge } from "tailwind-merge";
import { Badge } from "../ui/badge";

export type BestSellingProducts = {
    product_id: string;
    product_image: string;
    product_name: string;
    product_price: number;
    product_total_sales: number;
    product_stock_count: number;
    product_status: "in_stock" | "out_of_stock";
};

export const Columns: ColumnDef<BestSellingProducts>[] = [
    {
        accessorKey: "product_id",
        header: "product id",
    },

    {
        accessorKey: "product_image",
        header: "product image",
        cell: ({ row }) => {
            return (
                <Avatar className={twMerge("w-[3rem] h-[3rem] mx-auto")}>
                    <AvatarImage
                        src={
                            row.original.product_image ||
                            "https://i.pravatar.cc/300"
                        }
                        alt="@pravatar"
                    />
                    <AvatarFallback>AV</AvatarFallback>
                </Avatar>
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
        accessorKey: "product_name",
        header: "product name",
        cell: ({ row }) => {
            return (
                <div
                    className={twMerge(
                        row.original.product_name.split(" ").length > 5 &&
                            "trucate"
                    )}
                >
                    {row.original.product_name}
                </div>
            );
        },
    },

    {
        accessorKey: "product_total_sales",
        header: "total sales",
    },

    {
        accessorKey: "product_stock_count",
        header: "stock count",
    },

    {
        accessorKey: "product_status",
        header: "product status",
        cell: ({ row }) => {
            const { product_status } = row.original;
            return (
                <Badge
                    className={twMerge(
                        "bg-white/10 rounded-full py-[0.25619rem] px-[0.76856rem]  text-base max-w-max text-center",
                        product_status == "in_stock"
                            ? "text-[#6BEBA4] bg-badge-green"
                            : "text-[#F52525] bg-badge-red"
                    )}
                >
                    {product_status == "in_stock" ? "In Stock" : "Out of Stock"}
                </Badge>
            );
        },
        // size: 300,
    },
];
