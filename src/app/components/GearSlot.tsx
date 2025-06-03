/** @format */
import { type ArmorObject } from "../types/types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import GearPiece from "./GearPiece";
import GearPieceModal from "./GearPieceModal";

const GearSlot = ({ gearData }: { gearData: ArmorObject[] }) => {
    const [selectedGear, setSelectedGear] = useState<ArmorObject>(gearData[39]);
    const [open, setOpen] = useState(false);

    if (!gearData || gearData.length === 0) {
        return null;
    }

    const handleUpdate = (newGear: ArmorObject) => {
        setSelectedGear(newGear);
        setOpen(false);
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <GearPiece gearPiece={selectedGear} />
            </DialogTrigger>
            <DialogContent className="!max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Item Search</DialogTitle>
                </DialogHeader>
                {/* This will have a list of gear items available to select. First need to make it so that state updates when I pick a new gear piece */}
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
