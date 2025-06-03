/** @format */
import Image from "next/image";

const WeaponPiece = ({ gearPiece }) => {
    const sharpnessColors = [
        { color: "red", value: gearPiece.sharpness["red"] || 0 },
        { color: "orange", value: gearPiece.sharpness["orange"] || 0 },
        { color: "yellow", value: gearPiece.sharpness["yellow"] || 0 },
        { color: "green", value: gearPiece.sharpness["green"] || 0 },
        { color: "blue", value: gearPiece.sharpness["blue"] || 0 },
        { color: "white", value: gearPiece.sharpness["white"] || 0 },
        { color: "purple", value: gearPiece.sharpness["purple"] || 0 },
    ];

    return (
        <div className="flex gap-2">
            <div className="w-100 h-28 bg-gray-700 rounded-md flex justify-between items-center p-2 hover:bg-gray-600 cursor-pointer">
                <div className="flex w-3/4 h-full justify-between items-center">
                    <div className="w-1/4 flex justify-center"></div>
                    <div className="text-center w-full h-full">
                        <div className="font-bold text-gray-300">{gearPiece.name}</div>
                        <div className="gap-2 flex justify-center text-gray-400">
                            <div>Power</div>
                            <div>Affinity</div>
                        </div>

                        <div className="flex justify-center border-2">
                            <div className="border-l-2"></div>
                            {sharpnessColors.map((ele) => {
                                return (
                                    <div
                                        key={ele.color}
                                        className={`w-[${(ele.value / 400) * 100}px] h-5 bg-${ele.color}-500 border-t-2 border-b-2`}>
                                        a
                                    </div>
                                );
                            })}
                            <div className="border-r-2"></div>
                        </div>
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
