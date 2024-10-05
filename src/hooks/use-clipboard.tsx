import { useState } from "react";

export function useClipboard() {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (text: string) => {
        if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } else {
            return Promise.reject("Clipboard API not supported");
        }
    };

    return { isCopied, copyToClipboard };
}
