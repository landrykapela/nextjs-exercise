
const Business = ({params}:any) =>{
    const businessName = params.name;
    return <div className="mx-auto text-center">
        <h1 className="text-2xl">{businessName} Business Page</h1>
    </div>
}
export default Business;