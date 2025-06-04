/** @format */

import type { Skill, ArmorSkills, ArmorPiece } from "./types";

type SkillState = {
    skills: ArmorSkills;
};

type SkillActions = {
    updateArmorPieceSkills: (piece: ArmorPiece, newSkills: Skill[]) => void;
    clearSkills: () => void;
};

export type SkillStore = SkillState & SkillActions;
