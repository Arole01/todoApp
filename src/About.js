import { useContext } from "react";
import { context } from "./Context";

const About =()=>{


const {realName} = useContext(context)

    return(
        <div>
            <h1>
                welcome {realName.split(" ")[1]} , this is about us page
            </h1>
        </div>
    )
}

export default About;