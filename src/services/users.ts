import Api from "../api";

const fetchUsers = async (): Promise<any[]> => await Api.get(`/users`);

export { fetchUsers };
