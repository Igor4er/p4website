import OrientationGuard from "./OrientationGurad";
import First from "./sections/First";
import Second from "./sections/Second";
import Third from "./sections/Third";
import Fourth from "./sections/Fourth";
import Footer from "./sections/Footer";

function App() {
  return (
    <OrientationGuard>
      <div className="bg-gray-900 overflow-x-clip overflow-y-hidden">
        <First />

        <Second />
        <Third />
        <Fourth />
      </div>
    </OrientationGuard>
  );
}

export default App;
