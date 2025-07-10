import SpotlightCard from "../../Components/SpotlightCard/SpotlightCard";

const Project0 = () => {
  return (
    <SpotlightCard
      className="w-full sm:my-8 sm:ml-8 sm:mr-4 md:my-16 md:ml-16 md:mr-8 border-0 bg-transparent flex items-center justify-center"
      spotlightColor="rgba(255, 80, 73, 0)"
    >
      <div className="flex items-center justify-center h-full">
        <span className="text-xl">📁</span>
        <h3 className="text-xl font-semibold ml-2">
          Натисни на папку {"--->"}
        </h3>
      </div>
    </SpotlightCard>
  );
};

export default Project0;
