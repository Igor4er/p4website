import React from "react";
import { ArrowDown } from "lucide-react";
import ScrollFloat from "../TextAnimations/ScrollFloat/ScrollFloat";
import DotGrid from "../Backgrounds/DotGrid/DotGrid";
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import useIsLargeScreen from "../useIsLargeScreen";
import me from "../assets/me.png";
import pattern from "../assets/pattern.png";
import Magnet from "../Animations/Magnet/Magnet";
import grain from "../assets/grain.jpg";
import Squares from "../Backgrounds/Squares/Squares";
import Folder from "../Components/Folder/Folder";
import { useState } from "react";
import Project1 from "./p/Project1";
import Project2 from "./p/Project2";
import Project3 from "./p/Project3";
import Project0 from "./p/Project0";

const Third: React.FC = () => {
  const isDesktop = useIsLargeScreen();
  const [clickCount, setClickCount] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };

  const handleFolderClick = () => {
    setClickCount((prev) => Math.min(prev + 1, 2)); // максимум 2 кліки
  };

  // Визначаємо текст, який треба показувати під папкою
  let folderHint;
  if (clickCount === 0) folderHint = "(натисни на папку)";
  else if (clickCount === 1) folderHint = "(натисни на проєкт)";
  else folderHint = null; // після другого кліку текст зникає
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center relative bg-gray-900 plexmono text-white">
      {/* Main content area divided into two vertical blocks */}
      <div className="flex flex-row w-full flex-1 relative">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares
            speed={0.45}
            squareSize={48}
            direction="diagonal"
            borderColor="#484848"
          />
        </div>

        {selectedProject !== 1 &&
          selectedProject !== 2 &&
          selectedProject !== 3 && <Project0 />}
        {selectedProject === 1 && <Project1 />}
        {selectedProject === 2 && <Project2 />}
        {selectedProject === 3 && <Project3 />}
        <div className="flex flex-col sm:gap-2 md:gap-14 items-center justify-center h-screen sm:mr-12 lg:mr-36 z-10 text-slate-100">
          <div onClick={handleFolderClick}>
            <Folder
              size={isDesktop ? 2 : 1}
              color="#00b8db"
              className=""
              items={[
                <div
                  className="flex flex-col p-1 items-start text-slate-900"
                  onClick={() => handleProjectClick(1)}
                >
                  <div className="text-2xl">1</div>
                  <div className="text-xs text-slate-600">😋😈😚</div>
                </div>,
                <div
                  className="flex flex-col p-1 items-end text-slate-900"
                  onClick={() => handleProjectClick(3)}
                >
                  <div className="text-2xl">3</div>
                  <div className="text-xs text-slate-600">🫶👌🥳</div>
                </div>,
                <div
                  className="flex flex-col p-1 items-center text-slate-900"
                  onClick={() => handleProjectClick(2)}
                >
                  <div className="text-2xl">2</div>
                  <div className="text-xs text-slate-600">🎉❤️🤗</div>
                </div>,
              ]}
            />
          </div>
          <div>
            <p className="sm:text-2xl lg:text-3xl">Проєктики)))</p>
            <p
              className={`text-xs text-slate-600 transition-opacity duration-300 ${folderHint ? "opacity-100" : "opacity-0"}`}
            >
              {folderHint || "(тепер на проєкт)"}
            </p>
          </div>
        </div>
      </div>

      {isDesktop && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-row items-center text-white/70 animate-bounce gap-1">
          <ArrowDown className="w-5 h-5" />
          <p className="text-sm font-mono">Scroll</p>
        </div>
      )}
    </section>
  );
};

export default Third;
