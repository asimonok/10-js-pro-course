export type AuthorTypes = {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    address: {
      city: string;
      street: string;
      suite: string;
    }
} 