

export interface IRegisterForm {
    lastName: string,
    name: string,
    phone: string,
    email: string,
    password: string,
    password_confirmation: string
}

export interface IRegister {
    lastName: string,
    name: string,
    phone: string,
    email: string,
    password: string,
    password_confirmation: string
}

export interface ILogin {
    email: string,
    password: string
}

export interface ILoginResult {
    token: string
}

export interface IUser {
    email: string
}