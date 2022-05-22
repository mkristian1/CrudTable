import cn from 'classnames';
import { useState } from 'react';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { CAR_FIELDS } from '../../const';
import Button from '../Button';
import EditableField from './EditableField';
import style from './styles/index.module.scss';

const Tbody = ({ cars, deleteItem, isEditItem, editItem, onEditItem, editItemValue, saveChanges, getSelectedItems }) => {
    const [status, setStatus] = useState(false)

    return (
        <tbody className={style.tbody}>
            <TransitionGroup className='todo'>
                {cars?.map(({ id, brand, model, maxSpeed, speedType }) => (
                    <CSSTransition
                        key={id}
                        timeout={200}
                        classNames={{
                            enterActive: style['item-enter'],
                            enterDone: style['item-enter-active'],
                            exitActive: style['item-exit'],
                            exitDone: style['item-exit-active'],
                        }}
                    >
                        <tr className={cn(style.tbody__tr, style[`tbody__tr_`])} key={id}>
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
                    </CSSTransition>

                ))}
            </TransitionGroup>
        </tbody>
    )
}

export default Tbody;