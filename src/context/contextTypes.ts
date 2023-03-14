export interface ContextInterFace {
    isLogged: boolean;
    userName: string;
    checkIfLoggedIn: () => void;
}

export interface DataFromLogin extends Response {
    isLogged: boolean;
    userName: string;
}