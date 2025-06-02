/** @format */
import { type ArmorObject } from "../types/types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GearSlot = ({ gearData }: { gearData: ArmorObject[] }) => {
    console.log("GearSlot component rendered with gearData:", gearData);

    console.log("name", gearData[0]);
    return (
        <Dialog>
            <DialogTrigger>
                <Button>Test</Button>
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
