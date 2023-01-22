import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { slice } from "../store/taxiSlice"

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(slice.actions, dispatch)
}