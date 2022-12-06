import { NavLink } from "react-router-dom";
function useRender(data){

    const renderLinks = Object.keys(data).map((dataId)=> (
        <li key = {dataId}>
            <NavLink to= {`/movies/${dataId}`}>{data[dataId].title}</NavLink>
        </li>))

        return (renderLinks)
}

export default useRender;