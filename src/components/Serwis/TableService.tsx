
type User = {
    id: number;
    username: string;
    email: string;
    action: string;
  };



export const getAllUsers = async (): Promise<User[]> => {
    const response = await fetch('http://localhost:8080/users');
    if (!response.ok) {
      console.log ("function doesn't seem to run ")
      return [];
    }
    const data: User[] = await response.json();
    return data;
  };

  export const getSingleUser = async (id: number) => {
    const response = await fetch(`http://localhost:8080/users/${id}`);
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    return data;
  };