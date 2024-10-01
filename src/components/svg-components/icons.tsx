import { SVGProps } from "react";
const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2h-4.04c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97ZM22 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23ZM10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97ZM10.5 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22h4.04c1.59 0 2.23-.64 2.23-2.23Z"
        />
    </svg>
);

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <g
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        >
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" />
        </g>
    </svg>
);

const CalculatorIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16.5 7.58v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.136 14h.012M11.995 14h.012M15.854 14h.012M8.136 17.5h.012M11.995 17.5h.012M15.854 17.5h.012"
        />
    </svg>
);

const NoteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m21.66 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.06 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27ZM12.64 8.53l4.85 1.23M11.66 12.4l2.9.74"
        />
    </svg>
);

const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M15.57 18.5v-3.9M15.57 7.45V5.5M15.57 12.65a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2ZM8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.55a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
        />
    </svg>
);

const BagIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.495 12h.01M8.495 12h.008"
        />
    </svg>
);

const WalletCheckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M9 19c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 23a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19c0-2.21 1.79-4 4-4s4 1.79 4 4Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m3.441 19 .99.99 2.13-1.97M17.751 7.05c-.24-.04-.49-.05-.75-.05h-10c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M22 12v5c0 3-2 5-5 5H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V12c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3"
        />
    </svg>
);

const CardTickIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M2 8.5h11.5M6 16.5h2M10.5 16.5h4"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M22 11.03v5.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16.5 6 18 7.5l4-4"
        />
    </svg>
);

const DiagramIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M2 2v17c0 1.66 1.34 3 3 3h17"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7"
        />
    </svg>
);

const SMSIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
        />
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
        />
    </svg>
);

const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#84828A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M17.44 14.62 20 12.06 17.44 9.5M9.76 12.06h10.17M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"
        />
    </svg>
);

const HighVoltageIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={29}
        height={38}
        fill="none"
        {...props}
    >
        <path fill="url(#a)" d="M0 0h29v38H0z" />
        <defs>
            <pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use xlinkHref="#b" transform="matrix(.01 0 0 .00763 0 .118)" />
            </pattern>
            <image
                xlinkHref="data:image/png;base64,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"
                id="b"
                width={100}
                height={100}
            />
        </defs>
    </svg>
);

const HappyBagIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="none"
        {...props}
    >
        <path
            stroke="#0F0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M17.708 29.688c0 4 3.292 7.291 7.292 7.291s7.291-3.291 7.291-7.291M18.354 4.167l-7.541 7.562M31.645 4.167l7.542 7.562"
        />
        <path
            stroke="#0F0"
            strokeWidth={1.5}
            d="M4.167 16.354c0-3.854 2.062-4.166 4.625-4.166h32.417c2.562 0 4.625.312 4.625 4.166 0 4.48-2.063 4.167-4.625 4.167H8.792c-2.563 0-4.625.312-4.625-4.167Z"
        />
        <path
            stroke="#0F0"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="m7.292 20.833 2.938 18c.666 4.042 2.27 7 8.229 7H31.02c6.48 0 7.438-2.833 8.188-6.75l3.5-18.25"
        />
    </svg>
);

const StatusUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={51}
        fill="none"
        {...props}
    >
        <path
            stroke="#1E40AF"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M14.327 38.475v-4.313M24.994 38.475V29.85M35.661 38.475V25.517M35.66 12.85l-.958 1.125a39.338 39.338 0 0 1-20.375 12.583"
        />
        <path
            stroke="#1E40AF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M29.557 12.85h6.104v6.083"
        />
        <path
            stroke="#1E40AF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.744 46.496h12.5c10.417 0 14.584-4.167 14.584-14.584v-12.5c0-10.416-4.167-14.583-14.584-14.583h-12.5C8.328 4.83 4.161 8.996 4.161 19.412v12.5c0 10.417 4.167 14.584 14.583 14.584Z"
        />
    </svg>
);

const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="none"
        {...props}
    >
        <path
            stroke="#ECF00F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M4.167 45.833h41.667"
        />
        <path
            stroke="#ECF00F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.313 8.333v37.5h9.375v-37.5c0-2.291-.938-4.166-3.75-4.166h-1.875c-2.813 0-3.75 1.875-3.75 4.166ZM6.25 20.833v25h8.333v-25c0-2.291-.833-4.166-3.333-4.166H9.583c-2.5 0-3.333 1.875-3.333 4.166ZM35.417 31.25v14.583h8.333V31.25c0-2.292-.833-4.167-3.333-4.167H38.75c-2.5 0-3.333 1.875-3.333 4.167Z"
        />
    </svg>
);

const UserOctagonIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="none"
        {...props}
    >
        <path
            stroke="#610C94"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M43.917 17.875v14.25c0 2.333-1.25 4.5-3.271 5.688L28.27 44.958a6.59 6.59 0 0 1-6.563 0L9.333 37.814a6.562 6.562 0 0 1-3.27-5.688v-14.25c0-2.333 1.25-4.5 3.27-5.687l12.375-7.146a6.59 6.59 0 0 1 6.563 0l12.375 7.146a6.587 6.587 0 0 1 3.27 5.687Z"
        />
        <path
            stroke="#610C94"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M25 22.917a4.854 4.854 0 1 0 0-9.709 4.854 4.854 0 0 0 0 9.709ZM33.334 34.708c0-3.75-3.73-6.791-8.334-6.791-4.604 0-8.333 3.041-8.333 6.791"
        />
    </svg>
);

export {
    DashboardIcon,
    UserIcon,
    CalculatorIcon,
    NoteIcon,
    SettingIcon,
    BagIcon,
    WalletCheckIcon,
    CardTickIcon,
    DiagramIcon,
    SMSIcon,
    LogoutIcon,
    HighVoltageIcon,
    HappyBagIcon,
    StatusUp,
    ChartIcon,
    UserOctagonIcon,
};
