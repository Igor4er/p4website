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

const Second: React.FC = () => {
  const isDesktop = useIsLargeScreen();
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center relative bg-gray-900 plexmono text-gray-50">
      {/* Main content area divided into two vertical blocks */}
      <div className="flex flex-row w-full flex-1 relative">
        {/* DotGrid background for both blocks */}
        <div className="absolute inset-0 h-48 w-full sm:top-16 lg:top-64">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#073f0a"
            activeColor="#5326fe"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Left block - half screen width */}
        <div className="w-1/2 flex items-center justify-center p-4 flex-col relative z-10">
          <ScrollFloat
            animationDuration={2}
            ease="back.inOut(2)"
            scrollStart="top center+=20%"
            scrollEnd="bottom center-=3%"
            stagger={0.03}
          >
            Мене звати Ігор
          </ScrollFloat>
          {/* 80% */}
          <div className="max-w-[min(42rem,80%)] whitespace-break-spaces sm:text-sm lg:text-base">
            <Magnet padding={150} disabled={false} magnetStrength={30}>
              <div className="mt-3">
                Займаюсь розробкою на{" "}
                <span className="font-bold text-orange-400">Python</span>, також
                експерементую з{" "}
                <span className="font-bold text-orange-400">Rust</span> та{" "}
                <span className="font-bold text-orange-400">C++</span>
              </div>
            </Magnet>
            <Magnet padding={140} disabled={false} magnetStrength={35}>
              <div className="mt-2">
                Програмую вже понад{" "}
                <span className="font-bold text-rose-400">5 років</span>, з яких{" "}
                <span className="font-bold text-rose-400">1.5 року</span> це
                комерційна розробка.
              </div>
            </Magnet>
            <Magnet padding={130} disabled={false} magnetStrength={34}>
              <div className="mt-2">
                Активно використовую інструменти ШІ для оптимізації робочих
                процесів, водночас повністю розумію та контролюю увесь створений
                код. Можу ефективно працювати як з AI-підтримкою, так і без неї.
              </div>
            </Magnet>
          </div>
        </div>

        {/* Right block - half screen width, empty */}
        <div className="w-1/2 flex items-center justify-center p-4 sm:p-0 relative z-10">
          <ProfileCard
            className="sm:scale-150 md:scale-125 lg:scale-100"
            name="Ihor Cher"
            title="Python Engineer"
            handle="ihorcher"
            status="Active"
            contactText="Contact Me"
            avatarUrl={me}
            iconUrl={pattern}
            grainUrl={grain}
            showUserInfo={isDesktop}
            enableTilt={true}
            behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(333,100%,90%,var(--card-opacity)) 4%,hsla(333,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(333,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(333,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,hsl(338, 100%, 70%) 0%,transparent 100%),radial-gradient(100% 100% at 50% 50%,hsl(32, 100%, 65%) 1%,transparent 76%),conic-gradient(from 124deg at 50% 50%,hsl(122, 100%, 70%) 0%,hsl(338, 100%, 70%) 40%,hsl(338, 100%, 70%) 60%,hsl(122, 100%, 70%) 100%)"
            innerGradient="linear-gradient(145deg,hsla(333, 40%, 45%, 0.55) 0%,hsla(32, 60%, 70%, 0.27) 100%)"
            onContactClick={() => window.open("https://t.me/ig4er", "_blank")}
          />
        </div>
      </div>

      {/* Scroll indicator at the bottom */}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
        <p className="text-sm mb-2 font-mono">Scroll</p>
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Second;
