import * as React from "react";
import { SVGProps } from "react";
const Quote = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M13.714 1.714V12h6.857a6.865 6.865 0 0 1-6.857 6.857v3.429C19.386 22.286 24 17.672 24 12V1.714H13.714ZM0 12h6.857A6.865 6.865 0 0 1 0 18.857v3.429c5.672 0 10.286-4.614 10.286-10.286V1.714H0V12Z"
        />
    </svg>
);
export default Quote;
