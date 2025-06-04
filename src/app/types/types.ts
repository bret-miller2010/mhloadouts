/** @format */

export interface ArmorObject {
    kind: "head" | "chest" | "arms" | "waist" | "legs";
    name: string;
    description: string;
    rank: string;
    rarity: number;
    resistances: Resistances;
    defense: Defense;
    skills: ArmorSkills[];
    slots: number[];
    armorSet: ArmorSet;
    crafting: Crafting;
    id: number;
}

interface Crafting {
    armor: Armor;
    materials: Material[];
    zennyCost: number;
    id: number;
}

interface Material {
    item: Item;
    quantity: number;
    id: number;
}

interface Item {
    id: number;
    gameId: number;
    rarity: number;
    name: string;
    description: string;
    value: number;
    carryLimit: number;
    icon: Icon2;
}

interface Icon2 {
    id: number;
    kind: string;
    colorId: number;
    color: string;
}

interface Armor {
    id: number;
}

interface ArmorSet {
    id: number;
    name: string;
}

interface ArmorSkills {
    skill: Skill;
    level: number;
    name?: string;
    description: string;
    id: number;
}

interface Skill {
    id: number;
    gameId: number;
    name: string;
    kind: string;
    icon: Icon;
}

interface Icon {
    id: number;
    kind: string;
}

interface Defense {
    base: number;
    max: number;
}

interface Resistances {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;
}

export interface WeaponObject {
    affintiy: number;
    crafting: Crafting;
    damage: Damage;
    defenseBonus: number;
    description: string;
    elserseal: number;
    gameId: number;
    hanicraft: number[];
    id: number;
    kind: string;
    name: string;
    rarity: number;
    sharpness: Sharpness;
    skills: WeaponSkills[];
    slots: number[];
}

interface Damage {
  raw: number;
  display: number;
}
interface Sharpness {
    red: number;
    orange: number;
    yellow: number;
    green: number;
    blue: number;
    white: number;
    purple: number;
}

interface WeaponSkills {
    skill: Skill;
    level: number;
    name?: string;
    description: string;
    id: number;
}

export type SharpnessObject = {
    color: SharpnessColor;
    value: number;
};

export type SharpnessColor = "red" | "orange" | "yellow" | "green" | "blue" | "white" | "purple";
