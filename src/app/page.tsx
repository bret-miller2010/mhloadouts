/** @format */
"use client";

import { fetchAllArmor } from "./api/fetchAllArmor";
import { useQuery } from "@tanstack/react-query";
import GearSlot from "./components/GearSlot";

export default function LandingPage() {
    const { data } = useQuery({
        queryKey: ["armor"],
        queryFn: fetchAllArmor,
    });

    if (!data) {
        return <div>Loading...</div>;
    }

    const helmetData = data.filter((piece) => piece.kind === "head");
    const chestData = data.filter((piece) => piece.kind === "chest");
    const armsData = data.filter((piece) => piece.kind === "arms");
    const waistData = data.filter((piece) => piece.kind === "waist");
    const legsData = data.filter((piece) => piece.kind === "legs");

    console.log(helmetData);

    // console.log(data);

    return (
        <div className="w-3/4 h-screen flex justify-content flex-col items-center gap-5 bg-red-500 mt-20 p-2">
            <GearSlot gearData={helmetData} />
            <GearSlot gearData={chestData} />
            <GearSlot gearData={armsData} />
            <GearSlot gearData={waistData} />
            <GearSlot gearData={legsData} />
        </div>
    );
}
