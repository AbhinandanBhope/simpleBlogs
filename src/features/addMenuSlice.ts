import { createSlice } from '@reduxjs/toolkit';

interface AddMenuState {
}
const initialState:any= [ 
   {
      title: "Burger",
      summary: "lorem loerem lorem",
      price: "10.99"
    },
    {
      title: "Pizza",
      summary: "Cheesy pizza loaded with toppings",
      price: "12.99"
    }]

const addMenuSlice = createSlice({
  name: 'addMenuSlice',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("stateIN ",action.payload);
      state.push(action.payload);
    }

  },
});
export const { addItem } = addMenuSlice.actions;
export default addMenuSlice.reducer;