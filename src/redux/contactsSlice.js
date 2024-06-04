import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
    name: 'contacts',
    initialState: { items: [] },
    reducers: {
        addItem: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare(newContact) {
                return {
                    payload: {
                        id: nanoid(),
                        ...newContact,
                    },
                };
            },
        },
        deleteItem: (state, action) => {
            const index = state.items.findIndex(
                item => item.id === action.payload,
            );
            state.items.splice(index, 1);
        },
    },
});
export const selectItem = state => state.contacts.items;
export const { addItem, deleteItem } = slice.actions;
export default slice.reducer;
