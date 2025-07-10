import poc4a from "../../assets/poc4a.mov";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiResend } from "react-icons/si";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useRef, useEffect, useState } from "react";

import BaseCard from "./BaseCard";
import type { ReactElement } from "react";

// Icon map for stack items
const iconMap: Record<string, ReactElement> = {
  Python: <FaPython className="text-yellow-400" />,
  FastAPI: <SiFastapi className="text-green-100" />,
  Jinja2: <FaHtml5 className="text-orange-400" />,
  Websockets: <VscDebugDisconnect className="text-rose-400" />,
  Resend: <SiResend className="text-cyan-400" />,
};

const Project3 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playbackRate, setPlaybackRate] = useState(2);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const stack_items = ["Python", "FastAPI", "Websockets", "Resend", "Jinja2"];
  const features = [
    "Перевикористання старої сторінки",
    "Інтеграція з Resend API",
    "Автоматичне закриття використаного посилання",
    "Безпечні JWT токени",
  ];

  return (
    <BaseCard
      title="poc4auth"
      borderColor="border-blue-500/20"
      bgColor="bg-gray-900/85"
      spotlightColor="rgba(0, 229, 255, 0.2)"
      ghLink="https://github.com/Igor4er/poc4auth"
    >
      <p className="text-sm text-white/90 mb-2">
        Доказ концепту входу користувача за посиланням, коли фактичний вхід
        відбувається на початковій сторінці а не сторінці з посилання.
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
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          src={poc4a}
          className="max-h-[50dvh] rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </BaseCard>
  );
};

export default Project3;
