import { Construction } from "lucide-react"


export default function Inprogress() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center p-8 bg-white/[.07] rounded-lg shadow-md text-white">
                <Construction className="w-24 h-24 mx-auto text-white mb-4" />
                <h1 className="text-3xl font-bold mb-2">Page Under Construction</h1>
                <p className="text-xl mb-4">We're working hard to bring you something amazing!</p>
                <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
                <p className="text-gray-500">Please check back soon for updates.</p>
            </div>
        </div>
    )
}