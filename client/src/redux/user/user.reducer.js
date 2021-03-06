import UserActionTypes from "./user.types";
const INITIAL_STATE = {
  currentUser: null//quando a aplicação é iniciada, o usuário é null
};

//redutor do usuário ativo (ou não) da sessão atual da aplicação
//sempre q o usuario mudar ele pega o estado e a ação q a causou
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {//baseado no tipo da ação 
    case UserActionTypes.SIGN_IN_SUCCESS://se for desta determinada ação 
      return {//retorna esse novo objeto
        ...state, //tudo que tiver no estado + currentUser
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default://qualquer outras coisa
      return state;
  }

}

export default userReducer;