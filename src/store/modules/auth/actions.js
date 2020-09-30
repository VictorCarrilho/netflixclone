export function signInRequest(email, password){
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password }
    }
}

// Function Success, gravar token \\
export function signInSuccess(token, user){
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user }
    }
}

// Function Failure, enviar falha na autenticação \\
export function signFailure(){
    return {
        type: '@auth/SIGN_FAILURE'
    }
}