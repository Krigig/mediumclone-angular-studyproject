export interface CurrentUSerInterface {
  user: {
    id: number;
    email: string;
    createdAt: string;
    username: string;
    updatedAt: string;
    bio: string | null;
    image: string | null;
    token: string;
  };
}
