
import { create } from 'zustand'
import { mainApi } from '../api/movies';

export const store = create((set) => ({
    data:{},
    dataCtrl:async () => {        
        set({data:await mainApi()});
    }
}))



