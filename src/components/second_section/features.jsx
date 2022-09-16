import Card from './card'
export default function Features(){
    return (
<section className={"mx-auto text-center"}>
    <div className={"line-through italic before:content-[' '] before:w-3 before:h-3 before:rounded-full before:border-2 before:mr-2 before:bg-circle-bg before:border-circle-border before:inline-block"}>Features</div>
    <h1 className={"text-4xl  mx-auto my-6 font-bold"}>The features <br/> Both familiar and new.</h1>
    <Card/>
</section>
    )
}