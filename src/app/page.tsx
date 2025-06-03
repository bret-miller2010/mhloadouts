/** @format */
"use client";

import { fetchAllArmor } from "./api/fetchAllArmor";
import { useQuery } from "@tanstack/react-query";
import GearSlot from "./components/GearSlot";

export default function LandingPage() {
    const { data: armorData } = useQuery({
        queryKey: ["armor"],
        queryFn: fetchAllArmor,
    });

    if (!armorData) {
        return <div>Loading...</div>;
    }

    const helmetData = armorData.filter((piece) => piece.kind === "head");
    const chestData = armorData.filter((piece) => piece.kind === "chest");
    const armsData = armorData.filter((piece) => piece.kind === "arms");
    const waistData = armorData.filter((piece) => piece.kind === "waist");
    const legsData = armorData.filter((piece) => piece.kind === "legs");

    // console.log(data);

    return (
        <div className="w-screen h-screen flex justify-content flex-col items-center gap-5 bg-red-500 mt-20 p-2">
            <GearSlot gearData={helmetData} />
            <GearSlot gearData={chestData} />
            <GearSlot gearData={armsData} />
            <GearSlot gearData={waistData} />
            <GearSlot gearData={legsData} />
        </div>
    );
}
