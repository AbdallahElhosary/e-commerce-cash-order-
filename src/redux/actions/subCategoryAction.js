import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_SUB_CATEGORY, GET_ERROR } from "../type";



// funciton to create a sub category
export const createSubCategory = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/subcategories`, data);
        dispatch({
            type: CREATE_SUB_CATEGORY,
            payload: response,
            loading:true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}