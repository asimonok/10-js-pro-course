export interface ThemeContextType {
  mode: string;
  toggle(): void;
}
export type Author = {
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
