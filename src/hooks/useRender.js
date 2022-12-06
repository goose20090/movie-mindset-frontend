import { NavLink } from "react-router-dom";
function useRender(data, setShowState){

    function handleClick(e){
        setShowState(data[e.target.id].reviews[0])
    }
    const renderLinks = Object.keys(data).map((dataId)=> (
        <li key = {dataId}>
            <NavLink to= {`/movies/${dataId}`}  id = {dataId} onClick = {handleClick}>{data[dataId].title}</NavLink>
        </li>))

        return (renderLinks)
}

export default useRender;