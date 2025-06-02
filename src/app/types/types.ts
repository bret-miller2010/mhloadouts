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
  recipes: any[];
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
  name?: any;
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

