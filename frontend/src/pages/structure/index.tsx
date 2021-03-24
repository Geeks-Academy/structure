import { useEffect } from "react";
import Raphael from "raphael";
import { members } from './members'
import './style.css'
import Treant from './Treant'

const Structure = () => {
    useEffect(() => {
        window.Raphael = Raphael
        new Treant(members)
    }, [])

    return (
        <div id="basic-example" style={{height:"100vh", width:"100vw"}} />
    );
}

export default Structure
