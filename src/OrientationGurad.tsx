import React, { useState, useEffect } from "react";
import { RefreshCcwDot } from "lucide-react";

interface OrientationGuardProps {
  children: React.ReactNode;
}

const OrientationGuard: React.FC<OrientationGuardProps> = ({ children }) => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Check if device is mobile (width less than 768px when in landscape)
      const mobile = width < 768 || height < 768;
      setIsMobile(mobile);

      // Check if in portrait mode
      setIsPortrait(height > width && mobile);
    };

    // Check on mount
    checkOrientation();

    // Listen for orientation changes
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", () => {
      // Small delay to ensure orientation change is complete
      setTimeout(checkOrientation, 100);
    });

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  // Show orientation prompt only on mobile devices in portrait mode
  if (isMobile && isPortrait) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 p-6 plexmono">
        <div className="text-center text-white">
          {/* Phone rotation icon */}
          <div className="flex justify-center">
            <div className="relative font-light">
              <RefreshCcwDot className="h-16 w-16" />
            </div>
          </div>

          {/* Text instructions */}
          <h2 className="text-2xl font-bold mb-2">Rotate device</h2>
          <p className="text-sm text-gray-300 font-bold">
            Or use desktop!!!1!11 ❤️
          </p>
          <p className="text-sm text-gray-300">
            This website wants horizontal view
          </p>
          <p className="text-sm text-gray-300">
            Also, of course disable Safari's Reader mode if it's enabled.
          </p>
          <p className="text-gray-500 text-xs mt-3">
            You should disengage 12h/day tiktok usage
          </p>
        </div>
      </div>
    );
  }

  // Render children when not in restricted orientation
  return <>{children}</>;
};

export default OrientationGuard;
