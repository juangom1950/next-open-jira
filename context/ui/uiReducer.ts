import { UIState } from './';


type UIActionType = 
    | { type: 'UI - Open Sidebar' } 
    | { type: 'UI - Close Sidebar' }
    //We could have apayload here. It has the information that we are going to receive
    //| { type: 'UI - Close Sidebar', payload }

// The reducer is a pure function. It need to be solved with these two arguments
// It es expected that the reducer return a new State not a mutation of the State
export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {

   switch (action.type) {
      case 'UI - Open Sidebar':
         // It es expected that the reducer return a new State not a mutation of the State
         return {
            ...state,
            sidemenuOpen: true,
          }

      case 'UI - Close Sidebar':
          return {
            ...state,
            sidemenuOpen: false,
           }

       default:
          return state;
   }

}