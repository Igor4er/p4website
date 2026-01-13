import OrientationGuard from "./OrientationGurad";
import { HardwareModeProvider } from "./contexts/HardwareModeProvider";
import First from "./sections/First";
import Second from "./sections/Second";
import Third from "./sections/Third";
import Fourth from "./sections/Fourth";
import Last from "./sections/Last";

function App() {
  return (
    <OrientationGuard>
      <HardwareModeProvider>
        <div className="bg-gray-900 overflow-x-clip overflow-y-hidden">
          <First />

          <Second />
          <Third />
          <Fourth />

          <Last />
        </div>
      </HardwareModeProvider>
    </OrientationGuard>
  );
}

export default App;
