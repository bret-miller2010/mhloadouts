/** @format */

export type ArmorPiece = "arms" | "chest" | "head" | "legs" | "waist";

export type Skill = {
    name: string;
    level: number;
};

export type ArmorSkills = Record<ArmorPiece, Skill[]>;
