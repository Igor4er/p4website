import React from "react";
import { useHardwareMode } from "../contexts/HardwareModeContext";
import Aurora from "../Backgrounds/Aurora/Aurora";
import Magnet from "../Animations/Magnet/Magnet";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";

const Fourth: React.FC = () => {
  const { isHardware, toggleMode } = useHardwareMode();

  const onContactClick = () => {
    window.open("https://t.me/ig4er", "_blank");
  };

  return (
    <section className="py-16 min-h-screen w-screen flex flex-col items-center justify-center relative bg-gray-900 text-white px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FE", "#FE94B4", "#FE3232"]}
          blend={0.6}
          amplitude={1.8}
          speed={0.4}
        />
      </div>

      {/* Content */}
      <div className="z-10 max-w-3xl w-full flex flex-col items-center gap-8 text-center font-mono">
        <h2 className="text-3xl md:text-5xl font-bold mt-2">Зацікавлені?</h2>

        <Magnet padding={250} disabled={false} magnetStrength={25}>
          <button
            onClick={onContactClick}
            className="cursor-pointer border border-rose-500/30 backdrop-blur-2xl hover:bg-rose-700/40 duration-300 transition-colors text-white text-xl md:text-2xl font-semibold py-4 px-8 rounded-2xl shadow-xl"
          >
            Contact me
          </button>
        </Magnet>

        {/* Skills Section */}
        <div className="w-full mt-6 text-left">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">
              {isHardware ? "Technical Skills" : "Скіли"}
            </h3>

            {!isHardware && (
              <Magnet padding={30} disabled={false} magnetStrength={15}>
                <button
                  onClick={toggleMode}
                  className="text-xs md:text-sm font-semibold tracking-wide
                           text-cyan-400 hover:text-cyan-300
                           border border-cyan-500/40
                           px-3 py-1 rounded-lg
                            cursor-pointer"
                >
                  SWITCH TO HARDWARE
                </button>
              </Magnet>
            )}
          </div>

          {isHardware ? (
            // Hardware Skills
            <div className="bg-white/10 p-6 rounded-xl text-sm text-slate-300 space-y-4">
              <div>
                <h4 className="font-bold text-white mb-2">
                  Embedded & Firmware:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Microcontrollers:</strong> ESP32 / ESP8266, AVR
                    (Arduino), RP2040, nRF52 series
                  </li>
                  <li>
                    <strong>Frameworks & SDKs:</strong> ESP-IDF, Arduino
                    Framework
                  </li>
                  <li>
                    <strong>RTOS:</strong> FreeRTOS (tasks, event groups,
                    multitasking design)
                  </li>
                  <li>
                    <strong>Communication & Peripherals:</strong> GPIO, UART,
                    SPI, I2C, Timers, PWM, ADC (basic)
                  </li>
                  <li>
                    <strong>Debugging:</strong> UART logging, SWD/JTAG
                    fundamentals, oscilloscopes (analog & digital), multimeter,
                    signal generator
                  </li>
                  <li>
                    <strong>OTA:</strong> WiFi-based OTA updates using ESP-IDF
                    (proof of concept)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Hardware:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Schematic design for small embedded systems</li>
                  <li>
                    Power supply design (linear regulators, decoupling
                    capacitors)
                  </li>
                  <li>
                    MOSFET switching, pull-up / pull-down resistors, PTC fuses
                  </li>
                  <li>
                    Working with sensors, LCD displays, buttons, potentiometers
                  </li>
                  <li>
                    Confident reading schematics, datasheets, and reference
                    designs
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Software & Tools:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Languages:</strong> C (good), C++ (basic), Python
                    (advanced), Rust, Zig
                  </li>
                  <li>
                    <strong>Build systems:</strong> PlatformIO, basic CMake
                  </li>
                  <li>
                    <strong>Version control:</strong> Git (confident)
                  </li>
                  <li>
                    <strong>OS:</strong> Linux, macOS (developer-level, daily),
                    Windows (user-level)
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            // Software Skills
            <>
              <div className="bg-white/10 p-4 rounded-xl text-sm text-slate-300 flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Python
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Flask
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  GitLab CI/CD
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Docker
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Oracle SQL
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  PostgreSQL
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Linux
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Aiogram
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Asyncio
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Aiohttp
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  WebSockets
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  SystemD
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  OpenAI API
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Claude API
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Deepgram API
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Asterisk
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Rust</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  FastAPI
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Django
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  MongoDB
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  SQLite
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  RabbitMQ
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Nginx
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  AWS (S3, CloudFront, CodeDeploy)
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  GitHub Actions
                </span>
              </div>
              <span className="text-sm text-slate-400/80">
                Reminder: use Cmd+F to search on page
              </span>
            </>
          )}
        </div>

        {/* Experience Section */}
        <div className="w-full mt-10 text-left">
          <h3 className="text-2xl font-semibold mb-4">Досвід</h3>
          <div className="bg-white/10 p-4 rounded-xl">
            <DecryptedText
              className="text-lg font-bold"
              text="Python Developer — Fructus-X, Львів"
              animateOn="view"
              sequential={true}
              speed={45}
            />
            <p className="text-sm text-slate-400">Січень 2024 - зараз</p>
            <ul className="list-disc list-inside mt-2 text-sm text-slate-300 space-y-1">
              <li>
                Оптимізував життєвий цикл застосунку, чим зменшив використання
                памʼяті на 220% і суттєво скоротив витрати на сервери.
              </li>
              <li>
                Реалізував крос-сервісний SSO для уніфікації досвіду як
                користувача так і розробника, що дозволило легко впровадити 2FA
                та OAuth2.
              </li>
              <li>
                Створив новий застосунок для керування підписками клієнтів через
                зручний Telegram бот.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
