import Card from './card'
export default function Features(){
    let features = [
        {
            title:"Task Prograss",
            description:"Send scheduling links guests love",
            imageURL:"/assets/card-1.png",
            frontColor: "bg-amber-50",
            backColor:"bg-zinc-100",
            backClass:"-rotate-[8deg] origin-bottom-right ",
            border:"border-amber-200"
        },
        {
            title:"Plan Calendar",
            description:"Send scheduling links guests love",
            imageURL:"/assets/card-2.png",
            frontColor: "bg-violet-100",
            backColor:"bg-black",
            backClass:"-rotate-[5deg] origin-bottom-right",
            border:"border-violet-200"
        },
        {
            title:"Collaborations",
            description:"Send scheduling links guests love",
            imageURL:"/assets/card-3.png",
            frontColor: "bg-sky-100",
            backColor:"bg-zinc-100",
            backClass:"rotate-[5deg] origin-top-left",
            border:"border-sky-200"
        }
    ]
    return (
<section className={"mx-auto text-center container"}>
    <div className={"line-through text-zinc-400 italic before:content-[' '] before:w-3 before:h-3 before:rounded-full before:border-2 before:mr-2 before:bg-circle-bg before:border-circle-border before:inline-block"}>Features</div>
    <h1 className={"text-4xl mx-auto mt-2 mb-12 font-bold"}>The features <br/> Both familiar and new.</h1>
    <div className={"container flex justify-evenly md:flex-row flex-col items-center gap-12"} >
        {features.map(feature=>{
            return <Card props={feature} />
        })}
    </div>
</section>
    )
}