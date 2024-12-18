export default function Section5() {
  const link = "LxHOrHfHnu8";

  return (
    <section className="pt-16 lg:py-32 flex flex-col items-center justify-center gap-14 relative">
      <div className="relative w-full px-1 sm:w-[700px] sm:h-[400px] gap-4 flex flex-col justify-center items-center bg-[#ba62ff1a]">
        <h1 className="uppercase lg:absolute text-5xl sm:text-7xl font-bold sm:-left-16 sm:-top-14 text-center lg:text-left">
          Nasze
          <br /> poradniki
        </h1>
        <iframe
          src={`https://www.youtube.com/embed/${link}?rel=0&showinfo=0`}
          allowFullScreen
          title="video"
          className="w-full aspect-[7/4]"
        ></iframe>
        <div className="absolute w-full h-full shadow-[0px_0px_200px_400px_rgba(186,98,255,0.1)] -z-10" />
      </div>
    </section>
  );
}
