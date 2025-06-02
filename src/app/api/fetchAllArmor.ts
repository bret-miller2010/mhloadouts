/** @format */

import axios from "axios";
import { ArmorObject } from "../types/types";

export const fetchAllArmor = async (): Promise<ArmorObject[]> => {
    const { data } = await axios.get("https://wilds.mhdb.io/en/armor");
    if (!data) {
        throw new Error("Failed to fetch armor data");
    }
    return data;
};
