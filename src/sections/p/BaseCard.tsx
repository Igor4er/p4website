import { type ReactNode, type ReactElement } from "react";
import SpotlightCard from "../../Components/SpotlightCard/SpotlightCard";
import { FaGithub } from "react-icons/fa";
import Magnet from "../../Animations/Magnet/Magnet";
import useIsLargeScreen from "../../useIsLargeScreen";

interface BaseCardProps {
  title: string;
  children: ReactNode;
  borderColor?: string;
  bgColor?: string;
  ghLink?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  tryItLink?: string;
  tryItIcon?: ReactElement;
  tryItClassName?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({
  title,
  children,
  borderColor = "border-lime-500/20",
  bgColor = "bg-zinc-900/85",
  ghLink = "https://github.com/Igor4er/lecture4text",
  spotlightColor = "rgba(255, 80, 73, 0.2)",
  tryItLink,
  tryItIcon,
  tryItClassName,
}) => {
  const isDesktop = useIsLargeScreen();

  return (
    <SpotlightCard
      className={`w-full max-h-[85dvh] sm:my-8 sm:ml-8 sm:mr-4 md:my-16 md:ml-16 md:mr-8 ${borderColor} ${bgColor}`}
      spotlightColor={spotlightColor}
    >
      <div className="flex flex-row justify-start items-center gap-4 mb-2 flex-wrap">
        <h3 className="text-xl font-semibold">{title}</h3>

        <Magnet padding={25} disabled={false} magnetStrength={10}>
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 text-sm px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 transition border border-white/10"
          >
            <FaGithub className="text-xl" />
            {isDesktop ? "View on GitHub" : "Github"}
          </a>
        </Magnet>

        {tryItLink && (
          <Magnet padding={40} disabled={false} magnetStrength={15}>
            <a
              href={tryItLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-white/90 text-sm px-3 py-1 rounded-md transition border border-white/10 ${tryItClassName}`}
            >
              {tryItIcon}
              {isDesktop ? "Try it out" : "Try it"}
            </a>
          </Magnet>
        )}
      </div>
      {children}
    </SpotlightCard>
  );
};

export default BaseCard;
