import CardForeground from "./cardForeground";
import CardBackground from "./cardBackground";
export default function Card({props}){
    const {title,description,imageURL,frontColor,backColor,backClass,border} = props
    return(
        <div className={"relative " }>
            <CardBackground color={backColor} rotationClass={backClass}/>
            <CardForeground description={description} color={frontColor} imageURL={imageURL} title={title} border={border}/>
        </div>
    )
}