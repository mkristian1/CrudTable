import { useDispatch, useSelector } from "react-redux";
import { deleteItemAction } from "../Redux/actions";
import TableView from "../Views/TableView";

const TableComponent = () => {
    const cars = useSelector((state) => state?.cars);
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(deleteItemAction(id));
    }

    return (
        <TableView.Table deleteItem={deleteItem} cars={cars} />
    )
}

export default TableComponent;