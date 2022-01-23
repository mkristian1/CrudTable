import Button from '../Button';
import style from './styles/index.module.scss';

const Thead = ({ deleteSelectedItems, selectedCount }) => {
    const dataThead = [
        { id: 1, name: 'Brand' },
        { id: 2, name: 'Model' },
        { id: 3, name: 'Max speed' },
    ]
    return (
        <thead className={style.Thead}>
            <tr>
                <th><Button onClick={deleteSelectedItems} theme='danger'>DELETE ({selectedCount})</Button></th>
                {dataThead?.map(({ id, name }) => {
                    return (
                        <th key={id}>{name}</th>
                    )
                })}
            </tr>
        </thead>
    )
}

export default Thead;