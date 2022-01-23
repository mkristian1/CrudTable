import style from './styles/index.module.scss';
import Button from '../Button'
import { CAR_FIELDS } from '../../const';
import EditableField from './EditableField';

const Tbody = ({ cars, deleteItem, isEditItem, editItem, onEditItem, editItemValue, saveChanges, getSelectedItems }) => {
    return (
        <tbody className={style.tbody}>
            {cars?.map(({ id, brand, model, maxSpeed, speedType }) => {

                return (
                    <tr className={style.tbody__tr} key={id}>
                        <td className={style.tbody__td}>
                            <input data-id={id} onChange={getSelectedItems} type="checkbox" />
                        </td>
                        <td className={style.tbody__td}>
                            <EditableField
                                id={id}
                                editItemId={editItem?.id}
                                editItemField={editItem?.field}
                                isEditItem={isEditItem}
                                saveChanges={saveChanges}
                                onEditItem={onEditItem}
                                field={CAR_FIELDS.brand}
                                editItemValue={editItemValue}
                                value={brand}
                            />
                        </td>
                        <td className={style.tbody__td}>
                            <EditableField
                                id={id}
                                editItemId={editItem?.id}
                                editItemField={editItem?.field}
                                isEditItem={isEditItem}
                                saveChanges={saveChanges}
                                onEditItem={onEditItem}
                                field={CAR_FIELDS.model}
                                editItemValue={editItemValue}
                                value={model}
                            />
                        </td>
                        <td className={style.tbody__td}>
                            <EditableField
                                id={id}
                                editItemId={editItem?.id}
                                editItemField={editItem?.field}
                                isEditItem={isEditItem}
                                saveChanges={saveChanges}
                                onEditItem={onEditItem}
                                field={CAR_FIELDS.maxSpeed}
                                editItemValue={editItemValue}
                                value={maxSpeed}
                                type='number'
                            />
                            {speedType}/h
                        </td>
                        <td className={style.tbody__td}>
                            <Button onClick={() => deleteItem(id)} theme='danger'>DELETE</Button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default Tbody;