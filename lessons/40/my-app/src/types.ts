export interface ThemeContextType {
  mode: string;
  toggle(): void;
}
export type UsersT = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    suite: string;
  };
};
export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
