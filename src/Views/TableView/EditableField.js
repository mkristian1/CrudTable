import Button from '../Button';

const EditableField = (
    {
        id, editItemId, editItemField, field, isEditItem,
        saveChanges, onEditItem, editItemValue, value, type
    }) => {
    return (
        <>
            {id === editItemId && editItemField === field ?
                <input
                    onChange={(e) => onEditItem(e.target.value)}
                    type={type}
                    defaultValue={editItemValue || value}
                    onKeyDown={(e) => saveChanges(e.key)}
                /> :
                <Button theme="field" onDoubleClick={() => isEditItem(id, field)}>{value}</Button>
            }
        </>
    )
}

export default EditableField;