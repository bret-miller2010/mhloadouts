/** @format */
"use client";
import { useSkillStore } from "../stores/skill";

const LeftSkillList = () => {
    const { skills } = useSkillStore((state) => state);

    function extractSkills() {
        const freq: Record<string, number> = {};
        const allSkills = Object.values(skills).flatMap((skillList) => skillList.map((skill) => skill.name));
        for (const skillName of allSkills) {
            freq[skillName] = (freq[skillName] || 0) + 1;
        }

        return freq;
    }

    const skillList = extractSkills();

    return (
        <div className="w-40 h-40 bg-gray-500 flex justify-center flex-col">
            {Object.entries(skillList).map(([key, value], index) => {
                return (
                    <div
                        key={index}
                        className="text-white">
                        {key} - {value}
                    </div>
                );
            })}
        </div>
    );
};

export default LeftSkillList;
