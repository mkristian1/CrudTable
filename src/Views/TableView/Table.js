import style from './styles/index.module.scss';
import Tbody from './tbody';
import Thead from './thead';

const Table = ({ cars, deleteItem, editItem, isEditItem, onEditItem, editItemValue, saveChanges }) => {
    return (
        <table className={style.table}>
            <Thead />
            <Tbody
                cars={cars}
                deleteItem={deleteItem}
                isEditItem={isEditItem}
                editItem={editItem}
                onEditItem={onEditItem}
                editItemValue={editItemValue}
                saveChanges={saveChanges}
            />
        </table>
    )
}

export default Table;