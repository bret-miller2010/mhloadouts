/** @format */

import { type WeaponObject, type SharpnessObject, type SharpnessColor } from "../types/types";

const SharpnessGuage = ({ gearPiece }: { gearPiece: WeaponObject }) => {
    if (!gearPiece) {
        return null;
    }

    const sharpnessLevels = Object.keys(gearPiece.sharpness) as SharpnessColor[];
    const sharpnessColors: SharpnessObject[] = sharpnessLevels.map((color) => ({
        color,
        value: (Number(gearPiece.sharpness[color]) / 400) * 100,
    }));
    const colorMap: Record<SharpnessColor, string> = {
        red: "bg-red-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
        white: "bg-white",
        purple: "bg-purple-500",
    };

    return (
        <div className="flex justify-center">
            <div className="border-l-2"></div>
            {sharpnessColors.map((ele) => {
                return (
                    <div
                        key={ele.color}
                        style={{ width: `${ele.value}px` }}
                        className={`h-5 ${colorMap[ele.color]} border-t-2 border-b-2`}></div>
                );
            })}
            <div className="border-r-2"></div>
        </div>
    );
};

export default SharpnessGuage;
