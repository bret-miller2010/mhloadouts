/** @format */
"use client";

import { fetchAllArmor } from "./api/fetchAllArmor";
import { useQuery } from "@tanstack/react-query";
import GearSlot from "./components/GearSlot";
import WeaponSlot from "./components/WeaponSlot";
import axios from "axios";

export default function LandingPage() {
    const { data: armorData } = useQuery({
        queryKey: ["armor"],
        queryFn: fetchAllArmor,
    });

    const { data: weaponData } = useQuery({
        queryKey: ["weapons"],
        queryFn: async () => {
            const { data } = await axios.get("https://wilds.mhdb.io/en/weapons");
            return data;
        },
    });

    if (!armorData || !weaponData) {
        return <div>Loading...</div>;
    }

    const helmetData = armorData.filter((piece) => piece.kind === "head");
    const chestData = armorData.filter((piece) => piece.kind === "chest");
    const armsData = armorData.filter((piece) => piece.kind === "arms");
    const waistData = armorData.filter((piece) => piece.kind === "waist");
    const legsData = armorData.filter((piece) => piece.kind === "legs");

    return (
        <div className="w-screen h-screen flex justify-content flex-col items-center gap-2 mt-20 p-2">
            <WeaponSlot gearData={weaponData} />
            <GearSlot gearData={helmetData} />
            <GearSlot gearData={chestData} />
            <GearSlot gearData={armsData} />
            <GearSlot gearData={waistData} />
            <GearSlot gearData={legsData} />
        </div>
    );
}
