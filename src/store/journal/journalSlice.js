import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    },
})

export const { isSaving } = journalSlice.actions