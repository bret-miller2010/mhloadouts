

import axios from "axios";

export const fetchAllWeapons = async (): Promise<WeaponObject[]> => {
    const { data } = await axios.get("https://wilds.mhdb.io/en/weapons");
    if (!data) {
        throw new Error("Failed to fetch weapon data");
    }
    console.log(data);
    return data;
};
