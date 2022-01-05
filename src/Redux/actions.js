export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const addItemAction = (values) => {
    return { type: ADD_ITEM, payload: values }
}

export const deleteItemAction = (id) => {
    return { type: DELETE_ITEM, payload: id }
}

export const editItemAction = (item) => {
    return { type: EDIT_ITEM, payload: item }
}