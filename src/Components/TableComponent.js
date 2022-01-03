import { useSelector } from "react-redux";
import TableView from "../Views/TableView";

const TableComponent = () => {
    const cars = useSelector((state) => state);
    return (
        <TableView.Table cars={cars} />
    )
}

export default TableComponent;