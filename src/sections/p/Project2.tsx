import l4t_scr from "../../assets/l4t_screenshot.png";
import l4t_set from "../../assets/l4t_settings.png";
import { FaPython } from "react-icons/fa";
import { SiMongodb, SiOpenai, SiDeepgram, SiTelegram } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";

import BaseCard from "./BaseCard";
import type { ReactElement } from "react";

// Icon map for stack items
const iconMap: Record<string, ReactElement> = {
  Python: <FaPython className="text-yellow-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  OpenAI: <SiOpenai className="text-blue-400" />,
  Deepgram: <SiDeepgram className="text-purple-400" />,
  aiogram: <SiTelegram className="text-cyan-400" />,
};

const Project2 = () => {
  const stack_items = ["Python", "aiogram", "MongoDB", "Deepgram", "OpenAI"];
  const features = [
    "Автоматичне збереження в Gist",
    "Використання власних API ключів",
    "Автенитфікація кожного клієнта через особистий JWT ключ",
    "Узагальнення тексту з допомогою ChatGPT",
    "Контроль дозволів кожного окремого користувача",
  ];

  return (
    <BaseCard
      title="lecture4text"
      borderColor="border-lime-500/20"
      bgColor="bg-zinc-900/85"
      spotlightColor="rgba(255, 229, 0, 0.2)"
      tryItLink="https://t.me/lecture4text_bot?start=l4t__229ff1b8104ff6d49c67c25b01d823011b97e7a0"
      tryItIcon={<FaTelegramPlane />}
      tryItClassName="bg-sky-800 hover:bg-sky-600"
    >
      <p className="text-sm text-white/90 mb-2">
        Телеграм бот, який перетворює записи лекцій, або будь які голосові
        повідомлення в текст.
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
          src={l4t_scr}
          alt="lecture4text transcript showcase"
          className="max-h-[60dvh] rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src={l4t_set}
          alt="lecture4text settings showcase"
          className="max-h-[60dvh] rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </BaseCard>
  );
};

export default Project2;
