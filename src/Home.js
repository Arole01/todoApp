import { useContext } from "react";
import { context } from "./Context";


const Home = () => {
    const {setnames,setRealname,names,realName} = useContext(context)
    return(
        <div>
            <form onSubmit={(e)=> {
                e.preventDefault()
                setRealname(names)
            }}>
        <input type="text" placeholder="what is your name" 
        onChange={(e)=>setnames(e.target.value)
        }/> 

        <button>Click to add name</button>
        </form>
        <h1>
            welcome {realName.toUpperCase()}, this is the homepage
        </h1>

        </div>
        
    )
}



export default Home;