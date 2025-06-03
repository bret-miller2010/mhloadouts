/** @format */
"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import WeaponPiece from "./WeaponPiece";
import { type WeaponObject } from "../types/types";
import WeaponPieceModal from "./WeaponPieceModal";

const WeaponSlot = ({ gearData }: { gearData: WeaponObject[] }) => {
    const [selectedGear, setSelectedGear] = useState<WeaponObject>(gearData.find((weapon) => weapon.id === 200)!);
    const [open, setOpen] = useState(false);

    if (!gearData || gearData.length === 0) {
        return null;
    }

    const handleUpdate = (newGear: WeaponObject) : void => {
        console.log(newGear);
        setSelectedGear(newGear);
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}>
            <DialogTrigger>
                <WeaponPiece gearPiece={selectedGear} />
            </DialogTrigger>
            <DialogContent className="!max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Item Search</DialogTitle>
                </DialogHeader>
                {/* This will have a list of gear items available to select. First need to make it so that state updates when I pick a new gear piece */}
                <DialogDescription asChild>
                    <div className="h-[1000px] overflow-scroll flex flex-col gap-2">
                        {gearData.map((piece, index) => {
                            return (
                                <WeaponPieceModal
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

export default WeaponSlot;
