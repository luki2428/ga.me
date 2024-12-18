import GameCard from "../gameCard";

export default function Section4() {
  return (
    <section className="py-32 flex flex-col items-center justify-center gap-14 relative overflow-hidden">
      <h1 className="uppercase text-5xl sm:text-7xl px-4 font-bold text-center">
        To musisz ograć
      </h1>
      <div className="flex gap-4 flex-shrink-0 w-full sm:w-auto overflow-x-scroll sm:overflow-hidden">
        <div className="h-96 aspect-[4/5] hidden sm:block"></div>
        <GameCard players={2137} status={true} img={"cod_bo3.jpg"} />
        <GameCard players={13} status={true} img={"pubg-mobile.jpg"} />
        <GameCard players={2115} status={false} img={"fortnite.jpg"} />
      </div>
      <div className="flex gap-4 w-full sm:w-auto overflow-x-scroll sm:overflow-hidden">
        <GameCard players={53} status={true} img={"amogus.jpg"} />
        <GameCard players={0} status={false} img={"rdr2.jpg"} />
        <GameCard players={17} status={true} img={"gta5.jpg"} />
        <div className="h-96 aspect-[4/5] hidden sm:block"></div>
      </div>
    </section>
  );
}
