import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {

        case 'sort': return action.payload === "up"
          ? state.sort((a: { name: string }, b: { name: string }) => {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();

              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            })
          : state.sort((a: { name: string; }, b: { name: string; }) => {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();

              if (nameA > nameB) return -1;
              if (nameA < nameB) return 1;
              return 0;
            });

        case 'check': return state.filter((item:any)=>item.age>=action.payload)

        default:
            return state
    }
}
