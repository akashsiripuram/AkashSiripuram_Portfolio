import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  iconColor: string;
}

export function SkillCard({ title, icon, skills, iconColor }: SkillCardProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm border h-[350px] border-gray-800 rounded-lg p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-black/10">
      <div className={cn("w-12 h-12 flex items-center justify-center rounded-md mb-4", iconColor)}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <span className="text-blue-400 text-sm">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}