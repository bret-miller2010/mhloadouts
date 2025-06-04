/** @format */
import { type ArmorObject } from "../types/types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import GearPiece from "./GearPiece";
import GearPieceModal from "./GearPieceModal";
import { useSkillStore } from "@/stores/skill";
import { type ArmorSkills } from "@/stores/skill/types";

const GearSlot = ({ gearData }: { gearData: ArmorObject[] }) => {
    const [selectedGear, setSelectedGear] = useState<ArmorObject>(gearData[39]);
    const [open, setOpen] = useState(false);
    const { updateArmorPieceSkills } = useSkillStore((state) => state);

    if (!gearData || gearData.length === 0) {
        return null;
    }

    const handleUpdate = (newGear: ArmorObject) => {
        setSelectedGear(newGear);
        const newSkills = newGear.skills.map((skill) => {
            return {
                name: skill.skill.name,
                level: skill.level,
            };
        });
        // const gearUpdate: ArmorSkills = {
        //     [newGear["kind"]]: newSkills,
        // };
        updateArmorPieceSkills(newGear.kind, newSkills);
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}>
            <DialogTrigger>
                <GearPiece gearPiece={selectedGear} />
            </DialogTrigger>
            <DialogContent className="!max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Item Search</DialogTitle>
                </DialogHeader>
                <DialogDescription asChild>
                    <div className="h-[1000px] overflow-scroll flex flex-col gap-2">
                        {gearData.map((piece: ArmorObject, index) => {
                            return (
                                <GearPieceModal
                                    gearPiece={piece}
                                    key={index}
                                    handleUpdate={() => handleUpdate(piece)}
                                />
                            );
                        })}
                    </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
};

export default GearSlot;
