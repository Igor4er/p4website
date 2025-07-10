import React from "react";

const Last: React.FC = () => {
  return (
    <section className="min-h-[2rem] max-h-[1rem] flex flex-col items-center justify-center relative plexmono py-2 px-6 bg-zinc-950">
      <p className="text-slate-500/50 text-xs">
        Сторінка вебсайтовмісна, сорт вищий. Згідно ТУ У 27.9-44125755-002-2023.
        Прочитати до 18.12.2025. Вага= (18±722) МіБ. Виробник:{" "}
        <a
          href="https://github.com/Igor4er"
          className="underline text-slate-500/65"
          target="_blank"
        >
          @ihorcher
        </a>
      </p>
    </section>
  );
};

export default Last;
