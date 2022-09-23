function point_generator({ text, icon }) {
  return (
    <div
      className={
        "flex gap-2 border-2 border-[#ffffff10] rounded-md p-1 items-center w-fit my-2"
      }
    >
      <div className={"bg-[#ffffff50] rounded-md p-2"}>{icon}</div>
      <div> {text}</div>
    </div>
  );
}
export default function Advantages_card({ advantage }) {
  const { title, description, points, button, imgURL, color } = advantage;
  console.log(title);
  return (
    <div
      className={`flex md:flex-row flex-col ${color} rounded-3xl justify-between w-fit`}
    >
      <div id={"advantage-card-text"} className={"text-white p-12 w-1/2"}>
        <div className={"flex"}>
          <div id={"timeline"} className={"w-8 mr-4"}>
            <div
              className={
                "bg-[#ffffff80] border-4 border-white w-8 h-8 rounded-full mr-4"
              }
            >
              {" "}
            </div>
            <div className={"h-1/2 mx-auto w-[1px] my-4 bg-white"}></div>
          </div>
          <div id={"text"} className={""}>
            <h1 className={"text-5xl font-bold"}>{title}</h1>
            <h3 className={"text-xl my-8"}>{description}</h3>
          </div>
        </div>
        {button ? (
          <button></button>
        ) : (
          <div id={"points-container"} className={""}>
            {points.map((point) => point_generator(point))}
          </div>
        )}
      </div>
      <div id={"advantage-card-image"} className={""}>
        <img src={imgURL} />
      </div>
    </div>
  );
}
