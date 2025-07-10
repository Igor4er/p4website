import histscaff_scr from "../../assets/histscaff.png";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

import BaseCard from "./BaseCard";
import type { ReactElement } from "react";

// Icon map for stack items
const iconMap: Record<string, ReactElement> = {
  Python: <FaPython className="text-yellow-400" />,
  Flask: <SiFlask className="text-gray-100" />,
  "HTML/CSS": <FaHtml5 className="text-blue-400" />,
};

const Project1 = () => {
  const stack_items = ["Python", "Flask", "HTML/CSS"];
  const features = [
    "Створено для тестів з варіантами відповідей",
    "Предача сигналів з допомогою вібрацій телефону",
    "Підтвердження отримання повідомлень",
    "Одностороння комунцікація з другом за дверима",
    "Налаштування сили та довжини вібрацій",
  ];

  return (
    <BaseCard
      title="histscaff"
      borderColor="border-red-500/20"
      bgColor="bg-neutral-900/85"
      spotlightColor="rgba(255, 76, 54, 0.3)"
      ghLink="https://github.com/Igor4er/histscaff"
    >
      <p className="text-sm text-white/90 mb-2">
        Додаток який допомагає списувати на екзаменах незамітно.
      </p>

      <div className="mb-2 flex flex-row justify-evenly">
        <div>
          <span className="font-bold text-white/90">Стек:</span>
          <ul className="ml-4 mt-1 list-none space-y-1">
            {stack_items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-white/90"
              >
                {iconMap[item] ?? (
                  <span className="w-4 h-4 bg-white/50 rounded-sm inline-block" />
                )}
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="font-bold text-white/90">Фічі:</span>
          <ul className="ml-4 mt-1 list-disc text-sm text-white/90">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-center z-20">
        <img
          src={histscaff_scr}
          alt="lecture4text transcript showcase"
          className="max-h-[60dvh] rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </BaseCard>
  );
};

export default Project1;
