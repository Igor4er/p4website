import React from "react";
import Aurora from "../Backgrounds/Aurora/Aurora";
import Magnet from "../Animations/Magnet/Magnet";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";

const Fourth: React.FC = () => {
  const onContactClick = () => {
    window.open("https://t.me/ig4er", "_blank");
  };

  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center relative bg-gray-900 plexmono text-white px-4">
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
      <div className="z-10 max-w-3xl w-full flex flex-col items-center gap-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Зацікавлені?</h2>

        <Magnet padding={250} disabled={false} magnetStrength={25}>
          <button
            onClick={onContactClick}
            className="cursor-pointer border-1 border-rose-500/30 backdrop-blur-2xl hover:bg-rose-700/40 duration-300 transition-colors text-white text-xl md:text-2xl font-semibold py-4 px-8 rounded-2xl shadow-xl"
          >
            Contact me
          </button>
        </Magnet>

        {/* Skills Section */}
        <div className="w-full mt-6 text-left">
          <h3 className="text-2xl font-semibold mb-4">Скіли</h3>
          <div className="bg-white/10 p-4 rounded-xl text-sm text-slate-300 flex flex-wrap gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full">Python</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Flask</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              GitLab CI/CD
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Docker</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              Oracle SQL
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              PostgreSQL
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Linux</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Aiogram</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Asyncio</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Aiohttp</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              WebSockets
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">SystemD</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              OpenAI API
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              Claude API
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              Deepgram API
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Asterisk</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Rust</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">FastAPI</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Django</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">SQLite</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">RabbitMQ</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Nginx</span>
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
            ></DecryptedText>
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
