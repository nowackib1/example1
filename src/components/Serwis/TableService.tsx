
type User = {
    id: number;
    username: string;
    email: string;
    action: string;
    // it's a good idea to add more properties to this type if your API response has more data
  };



export const getAllUsers = async (): Promise<User[]> => {
    const response = await fetch('http://localhost:8080/users');
    if (!response.ok) {
      return [];
    }
    const data: User[] = await response.json();
    return data;
  };