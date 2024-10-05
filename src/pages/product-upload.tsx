import ProductUploadForm from "@/components/dashboard/product-upload-form";
import BackButton from "@/components/global/back-button";
import { HighVoltageIcon } from "@/components/svg-components/icons";

export default function ProductUpload() {
    return (
        <section className="space-y-5">
            <BackButton />
            <h1 className="flex items-center space-x-2 text-xl">
                <HighVoltageIcon />
                <span className="block">Add Products</span>
            </h1>
            <ProductUploadForm />
        </section>
    );
}
