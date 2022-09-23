export default function Advantages() {
  return (
    <div id={"advantages-container"} className={"container mx-auto mt-12"}>
      <div
        className={
          "text-center line-through text-zinc-400 italic before:content-[' '] before:w-3 before:h-3 before:rounded-full before:border-2 before:mr-2 before:bg-[#975BEC08] before:border-[#975BEC] before:inline-block"
        }
      >
        Advantages
      </div>
      <h1 className={"text-center text-4xl my-6"}>
        A task manager you can trust for teams
      </h1>
      <h3 className={"text-center text-xl"}>
        Plan projects, stay on track, and deliver on time without overworking
        your team.
      </h3>
      <div className={"flex justify-center"}>
        <button
          className={
            "bg-[#975BEC] my-6 border-[#7345B3] border-2 rounded-[52px] p-2 text-white font-bold text-md shadow-[7px_7px_0px_#7345B3]"
          }
        >
          <h1
            className={
              "before:content-[' '] before:w-3 before:h-3 before:rounded-full before:border-2 before:mx-2 before:border-[#ffffff] before:inline-block"
            }
          >
            Get Started
          </h1>
        </button>
      </div>
    </div>
  );
}
