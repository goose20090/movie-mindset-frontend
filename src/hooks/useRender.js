import { NavLink } from "react-router-dom";
function useRender(data, setShowState, url, makeNavLinksBy){

    function handleClick(e){
        setShowState(data[e.target.id].reviews[0])
    }
    const renderLinks = Object.keys(data).map((dataId)=> (
        <li key = {dataId}>
            <NavLink to= {`/${url}/${dataId}`}  id = {dataId} onClick = {handleClick}>{data[dataId][makeNavLinksBy]}</NavLink>
        </li>))

        return (renderLinks)
}

export default useRender;