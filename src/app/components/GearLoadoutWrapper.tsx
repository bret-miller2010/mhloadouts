/** @format */

import { ReactNode } from "react";

const GearLoadoutWrapper = ({ children }: { children: ReactNode }) => {
    return <div className="flex justify-content flex-col items-center gap-2">{children}</div>;
};

export default GearLoadoutWrapper;
