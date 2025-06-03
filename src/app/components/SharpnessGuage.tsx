/** @format */

import { type WeaponObject } from "../types/types";

type SharpnessObject = {
    color: SharpnessColor;
    value: number;
};

type SharpnessColor = "red" | "orange" | "yellow" | "green" | "blue" | "white" | "purple";

const SharpnessGuage = ({ gearPiece }: { gearPiece: WeaponObject }) => {
    if (!gearPiece) {
        return null;
    }

    const sharpnessColors: SharpnessObject[] = [
        { color: "red", value: (Number(gearPiece.sharpness["red"]) / 400) * 100 },
        { color: "orange", value: (Number(gearPiece.sharpness["orange"]) / 400) * 100 },
        { color: "yellow", value: (Number(gearPiece.sharpness["yellow"]) / 400) * 100 },
        { color: "green", value: (Number(gearPiece.sharpness["green"]) / 400) * 100 },
        { color: "blue", value: (Number(gearPiece.sharpness["blue"]) / 400) * 100 },
        { color: "white", value: (Number(gearPiece.sharpness["white"]) / 400) * 100 },
        { color: "purple", value: (Number(gearPiece.sharpness["purple"]) / 400) * 100 },
    ];

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
