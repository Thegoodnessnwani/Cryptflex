import { SVGProps } from "react";
const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={35}
        fill="none"
        {...props}
    >
        <rect width={36} height={34.691} fill="#1E40AF" rx={6} />
        <path
            fill="#56B31F"
            d="M4.582 9.963 24.549 3.46l6.505 19.967-19.968 6.504z"
        />
        <circle cx={18.164} cy={16.855} r={9} fill="#ECF00F" />
    </svg>
);
export default Logo;
