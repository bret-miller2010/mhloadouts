/** @format */

import axios from "axios";

export const fetchAllArmor = async () => {
    const { data } = await axios.get("https://wilds.mhdb.io/en/armor");

    return data;
};
