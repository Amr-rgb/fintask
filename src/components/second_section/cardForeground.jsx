export default function CardForeground({title,description,color,imageURL,border}){
    return (
        <div className={`relative ${color} rounded-3xl ${border} border overflow-hidden w-[360px] h-[460px]`}>
            <div className={"before:absolute before:left-5 before:top-14 before:content-[' '] before:w-5 before:h-5 before:rounded-full before:border-2 before:mr-2 before:bg-circle-bg before:border-circle-border before:inline-block p-12 text-left"}>
                <h1 className={"text-3xl font-bold"}>{title}</h1>
                <h3 className={"text-xl"}>{description}</h3>
            </div>
            <div>
                <img className={"absolute bottom-0"} src={imageURL} />
            </div>
        </div>
    )
}