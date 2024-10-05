import { ProductsManagementTable } from "@/components/dashboard/products-management-table";
import {
    Columns,
    Products,
} from "@/components/table-columns/product-management-columns";

export default function ProductManagement() {
    const data: Products[] = [
        {
            product_id: "PRD001",
            product: {
                product_name: "Ergonomic Desk Chair",
                product_category: "Office Furniture",
                product_image: "https://i.pravatar.cc/300?img=1",
            },
            product_inventory: 0,
            product_price: 199.99,
            product_rating: 4.5,
        },
        {
            product_id: "PRD002",
            product: {
                product_name: "Wireless Bluetooth Headphones",
                product_category: "Electronics",
                product_image: "https://i.pravatar.cc/300?img=2",
            },
            product_inventory: 120,
            product_price: 79.99,
            product_rating: 4.2,
        },
        {
            product_id: "PRD003",
            product: {
                product_name: "Stainless Steel Water Bottle",
                product_category: "Kitchenware",
                product_image: "https://i.pravatar.cc/300?img=3",
            },
            product_inventory: 200,
            product_price: 24.99,
            product_rating: 4.7,
        },
        {
            product_id: "PRD004",
            product: {
                product_name: "Yoga Mat",
                product_category: "Fitness",
                product_image: "https://i.pravatar.cc/300?img=4",
            },
            product_inventory: 0,
            product_price: 29.99,
            product_rating: 4.3,
        },
        {
            product_id: "PRD005",
            product: {
                product_name: "Smart Home Security Camera",
                product_category: "Home Security",
                product_image: "https://i.pravatar.cc/300?img=5",
            },
            product_inventory: 60,
            product_price: 129.99,
            product_rating: 4.6,
        },
    ];

    return (
        <section className="space-y-5">
            <ProductsManagementTable columns={Columns} data={data} />
        </section>
    );
}
