import produce from 'immer'; // Lib para manipular o state

const INITIAL_STATE = {
    token: null,
    isLogged: false,
    loading: false
};


export default function auth (state = INITIAL_STATE, action) {
    switch(action.type){
        case '@auth/SIGN_IN_REQUEST':
            return produce(state, (draft)  => {
                draft.loading = true;
            });

        case '@auth/SIGN_IN_SUCCESS':
            return produce(state, (draft)  => {
                draft.token = action.payload.token;
                draft.isLogged = true;
                draft.loading = false;
            });
        
        case '@auth/SIGN_IN_FAILURE':
            return produce(state, (draft)  => {
                draft.loading = false;
            });

        case '@auth/SIGN_OUT':
            return produce(state, (draft)  => {
                draft.token = null;
                draft.isLogged = false;
            });
        
        default:
            return state;
    }

}