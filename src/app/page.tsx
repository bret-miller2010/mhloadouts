/** @format */
"use client";

import { fetchAllArmor } from "./api/fetchAllArmor";
import { fetchAllWeapons } from "./api/fetchAllWeapons";
import { useQuery } from "@tanstack/react-query";
import GearSlot from "./components/GearSlot";
import WeaponSlot from "./components/WeaponSlot";
import GearLoadoutWrapper from "./components/GearLoadoutWrapper";
import LeftSkillList from "./components/LeftSkillList";

export default function LandingPage() {
    const { data: armorData } = useQuery({
        queryKey: ["armor"],
        queryFn: fetchAllArmor,
    });

    const { data: weaponData } = useQuery({
        queryKey: ["weapons"],
        queryFn: fetchAllWeapons,
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
        <div className="w-screen h-screen flex justify-center bg-gray-200 border-2">
            <LeftSkillList />
            <GearLoadoutWrapper>
                <WeaponSlot gearData={weaponData} />
                <GearSlot gearData={helmetData} />
                <GearSlot gearData={chestData} />
                <GearSlot gearData={armsData} />
                <GearSlot gearData={waistData} />
                <GearSlot gearData={legsData} />
            </GearLoadoutWrapper>
        </div>
    );
}
