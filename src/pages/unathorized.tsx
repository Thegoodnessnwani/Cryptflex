export default function Unauthorized() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Unauthorized
                </h1>
                <p className="text-gray-500">
                    You are not authorized to view this page
                </p>
            </div>
        </div>
    );
}
