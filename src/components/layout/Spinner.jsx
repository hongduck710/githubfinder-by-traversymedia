import spinner from "./assets/6os.gif";

function Spinner(){
    return (
        <div className="w-100 mt-200">
            <img width="180" 
            src={spinner} 
            alt="Loading..."
            className="text-center mx-auto" />
        </div>
    )
}


export default Spinner;