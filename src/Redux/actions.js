const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const addItemAction = (values) => {
    return { type: ADD_ITEM, payload: values }
}

export const deleteItemAction = (id) => {
    return { type: DELETE_ITEM, payload: id }
}