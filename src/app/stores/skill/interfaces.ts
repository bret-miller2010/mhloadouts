/** @format */

import type { ArmorSkills } from "./types";

type SkillState = {
    skills: ArmorSkills;
};

type SkillActions = {
    updateArmorPieceSkills: (gearPiece: Partial<ArmorSkills>) => void;
    clearSkills: () => void;
};

export type SkillStore = SkillState & SkillActions;
