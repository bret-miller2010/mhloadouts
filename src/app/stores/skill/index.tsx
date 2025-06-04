/** @format */

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type ArmorSkills } from "./types";
import type { SkillStore } from "./interfaces";

export const useSkillStore = create<SkillStore>()(
    persist(
        (set) => ({
            skills: {
                head: [],
                chest: [],
                arms: [],
                waist: [],
                legs: [],
            } as ArmorSkills,

            updateArmorPieceSkills: (gearPiece: Partial<ArmorSkills>) =>
                set((state) => ({
                    skills: {
                        ...state.skills,
                        ...gearPiece,
                    },
                })),

            clearSkills: () =>
                set(() => ({
                    skills: {
                        head: [],
                        chest: [],
                        arms: [],
                        waist: [],
                        legs: [],
                    },
                })),
        }),
        {
            name: "skill-storage", // unique name for the storage
            storage: createJSONStorage(() => localStorage), // use localStorage as the storage
        }
    )
);
