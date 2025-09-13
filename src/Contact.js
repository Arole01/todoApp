import { useContext } from "react";
import { context } from "./Context";

const Contact =()=>{


const {realName} = useContext(context)

    return(
        <div>
            <h1>
                Contact us on {realName} IG.
            </h1>
        </div>
    )
}

export default Contact;