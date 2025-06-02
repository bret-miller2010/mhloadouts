/** @format */
import { type ArmorObject } from "../types/types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const GearSlot = ({ gearData }: { gearData: ArmorObject[] }) => {
    if (!gearData || gearData.length === 0) {
        return null;
    }

    const gearPiece = gearData[50];
    console.log("name", gearData[50]);
    console.log("test", gearPiece.kind);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-100 h-20 bg-gray-700 rounded-md flex justify-between items-center p-2 hover:bg-gray-600 cursor-pointer">
                    <div className="flex w-1/2 h-full justify-between items-center">
                        <div>
                            <Image
                                src={`/images/${gearPiece.kind}.webp`}
                                width={50}
                                height={50}
                                alt="test"
                            />
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-gray-300">{gearPiece.name}</div>
                            {gearPiece.skills.map((skill) => {
                                return (
                                    <div
                                        className="text-gray-400"
                                        key={skill.id}>
                                        {skill.skill.name} {skill.level}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="text-gray-300">X</div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tester</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
            </DialogContent>
        </Dialog>
    );
};

export default GearSlot;
