import {useRouteError} from "react-router-dom";
import { NOTFOUND_URL} from "../utils/constants";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <img className="h-2/3 w-2/3 border-black bg-white m-auto"  src={NOTFOUND_URL}/>
        </div>
    )
}

export default Error;