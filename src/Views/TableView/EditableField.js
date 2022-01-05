import Button from '../Button';

const EditableField = (
    {
        id, editItemId, editItemField, field, isEditItem,
        saveChanges, onEditItem, editItemValue, value
    }) => {
    return (
        <>
            {id === editItemId && editItemField === field ?
                <input
                    onChange={(e) => onEditItem(e.target.value)}
                    type='text'
                    defaultValue={editItemValue || value}
                    onKeyDown={(e) => saveChanges(e.key)}
                /> :
                <Button theme="field" onDoubleClick={() => isEditItem(id, field)}>{value}</Button>
            }
        </>
    )
}

export default EditableField;