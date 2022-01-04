import style from './styles/index.module.scss';
import Tbody from './tbody';
import Thead from './thead';

const Table = ({ cars, deleteItem }) => {
    return (
        <table className={style.table}>
            <Thead />
            <Tbody cars={cars} deleteItem={deleteItem} />
        </table>
    )
}

export default Table;