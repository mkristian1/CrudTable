import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemAction, deleteSelectedItemAction, editItemAction } from "../Redux/actions";
import TableView from "../Views/TableView";

const TableComponent = () => {
    const [editItem, setEditItem] = useState();
    const [editItemValue, setEditItemValue] = useState();
    const [selectedItems, setSelectedItems] = useState([]);
    const cars = useSelector((state) => state?.cars);
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(deleteItemAction(id));
    }

    const onEditItem = (value) => {
        setEditItemValue(value)
    }

    const saveChanges = (key) => {
        if (key === 'Enter') {
            const editItemFormat = { id: editItem.id, [editItem.field]: editItemValue };
            dispatch(editItemAction(editItemFormat))
            setEditItem('')
        }
    }

    const isEditItem = (id, field) => {
        setEditItemValue('')
        setEditItem({ id, field })
    }

    const getSelectedItems = (e) => {
        const itemId = +e.target.dataset.id;
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedItems((prevArray) => [...prevArray, { id: itemId, isChecked }])
        } else {
            const checkedArr = selectedItems.filter(({ id }) => id !== itemId)
            setSelectedItems([...checkedArr])
        }
    }

    const deleteSelectedItems = () => {
        dispatch(deleteSelectedItemAction(selectedItems));        
    }

    return (
        <TableView.Table
            cars={cars}
            editItem={editItem}
            deleteItem={deleteItem}
            isEditItem={isEditItem}
            onEditItem={onEditItem}
            editItemValue={editItemValue}
            saveChanges={saveChanges}
            getSelectedItems={getSelectedItems}
            deleteSelectedItems={deleteSelectedItems}
            selectedCount={selectedItems.length}
        />
    )
}

export default TableComponent;