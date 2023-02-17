import { loadContent } from "../../actions/contentActions";

const loadContentData = () => {
    return async (dispatch, getData) => {
        const res  = await fetch("http://localhost:5000/api/post");
        const data = await res.json();

        if (data.length){
            dispatch(loadContent(data))
        }
    };
}

export default loadContentData;