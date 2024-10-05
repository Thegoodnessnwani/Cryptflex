import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";
import {
    DocumentUploadIcon,
    EditIcon,
    TrashIcon,
} from "../svg-components/icons";
import { useNavigation } from "@/hooks/use-navigate";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

const DEFAULT_COLUMN_WIDTH = 150;

export function ProductsManagementTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const { navigate } = useNavigation();

    return (
        <div className="rounded-md border-none font-inter bg-white/[.07] space-y-4 p-4 text-[#84828A]">
            <div className="flex items-center justify-between gap-x-3">
                <Button
                    className="bg-white/[.07] py-[0.51238rem] px-[1.02475rem] text-inherit rounded-full max-w-lg"
                    onClick={() => navigate("product-upload")}
                >
                    Filter
                    <ChevronDownIcon className="w-4 h-4 ml-2" />
                </Button>
                <div className="space-y-2 sm:flex items-center sm:space-y-0 gap-x-2">
                    <Button
                        className="bg-white/[.07] py-[0.51238rem] px-[1.02475rem] text-inherit rounded-full"
                        onClick={() => navigate("product-upload")}
                    >
                        <DocumentUploadIcon
                        //  className="w-4 h-4 ml-2"
                        />
                    </Button>
                    <Button className="bg-white/[.07] py-[0.51238rem] px-[1.02475rem] flex items-center gap-x-2 text-inherit rounded-full">
                        <EditIcon
                        //  className="h-4 w-4"""
                        />
                    </Button>
                    <Button className="bg-white/[.07] py-[0.51238rem] px-[1.02475rem] flex items-center gap-x-2 text-inherit rounded-full">
                        <TrashIcon
                        //  className="h-4 w-4"
                        />
                    </Button>
                </div>
            </div>
            <Table className="border-separate border-spacing-y-2">
                <TableHeader className="uppercase [&_tr]:border-b-0">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow
                            key={headerGroup.id}
                            className=" hover:bg-[#2D2D2D] hover:bg-opacity-10"
                        >
                            {headerGroup.headers.map((header) => {
                                const style: CSSProperties =
                                    header.getSize() !== DEFAULT_COLUMN_WIDTH
                                        ? { width: `${header.getSize()}px` }
                                        : {};
                                return (
                                    <TableHead
                                        key={header.id}
                                        style={style}
                                        className="py-3"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="text-white xl:text-lg">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                className={twMerge(
                                    "border-t border-b border-2 border-[#2e2e2e] hover:bg-[#2D2D2D] hover:bg-opacity-10",
                                    row.getIsSelected() && "text-black"
                                )}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="py-4">
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
