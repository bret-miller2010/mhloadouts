/** @format */
import Image from "next/image";
import SharpnessGuage from "../components/SharpnessGuage";
import { type WeaponObject } from "../types/types";

const WeaponPiece = ({ gearPiece }: { gearPiece: WeaponObject }) => {
    if (!gearPiece) {
        return null;
    }

    return (
        <div className="flex gap-2">
            <div className="w-100 h-28 bg-gray-700 rounded-md flex justify-between items-center p-2 hover:bg-gray-600 cursor-pointer">
                <div className="flex w-3/4 h-full justify-between items-center">
                    <div className="w-1/4 flex justify-center">
                        <Image
                            src={`/images/weapons/${gearPiece.kind}.webp`}
                            width={50}
                            height={50}
                            alt="test"
                        />
                    </div>
                    <div className="text-center w-full h-full">
                        <div className="font-bold text-gray-300">{gearPiece.name}</div>
                        <div className="gap-2 flex justify-center text-gray-400">
                            <div>Power</div>
                            <div>Affinity</div>
                        </div>

                        {gearPiece.sharpness && <SharpnessGuage gearPiece={gearPiece} />}
                    </div>
                </div>
                <div className="text-gray-300 h-full">X</div>
            </div>
            <div className="w-100 h-28 flex flex-col gap-1">
                {gearPiece.slots.map((slot, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full h-[30px] bg-gray-700 rounded-md flex items-center pl-1 hover:bg-gray-600 cursor-pointer">
                            <Image
                                src={`/images/${slot}.png`}
                                width={20}
                                height={20}
                                alt="test"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WeaponPiece;
