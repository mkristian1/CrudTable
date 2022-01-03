import style from './styles/index.module.scss';
import Tbody from './tbody';
import Thead from './thead';

const Table = ({ cars }) => {
    return (
        <table className={style.table}>
            <Thead />
            <Tbody cars={cars} />
        </table>
    )
}

export default Table;