
export interface Address {
    city: string;
    street: string;
    suite: string;

}

export interface User {
    id: number;
    name: string;
    email: string;
    address: Address
}

export interface Post {
    userId?: number;
    id?: number;
    title: string;
    body: string
}

