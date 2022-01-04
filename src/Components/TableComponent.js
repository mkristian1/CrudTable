import { useDispatch, useSelector } from "react-redux";
import TableView from "../Views/TableView";

const TableComponent = () => {
    const cars = useSelector((state) => state?.cars);
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: id })
    }

    return (
        <TableView.Table deleteItem={deleteItem} cars={cars} />
    )
}

export default TableComponent;