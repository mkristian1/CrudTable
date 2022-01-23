import style from './styles/index.module.scss';
import Tbody from './tbody';
import Thead from './thead';

const Table = ({ cars, deleteItem, editItem, isEditItem, onEditItem, editItemValue, saveChanges, getSelectedItems, deleteSelectedItems, selectedCount }) => {
    return (
        <table className={style.table}>
            <Thead deleteSelectedItems={deleteSelectedItems} selectedCount={selectedCount} />
            <Tbody
                cars={cars}
                deleteItem={deleteItem}
                isEditItem={isEditItem}
                editItem={editItem}
                onEditItem={onEditItem}
                editItemValue={editItemValue}
                saveChanges={saveChanges}
                getSelectedItems={getSelectedItems}
            />
        </table>
    )
}

export default Table;