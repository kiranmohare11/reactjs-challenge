import { get } from '../api/api'
import { GET_USERS } from '../api/apiUrl'

export function getUsers() {
    return get(`${GET_USERS}`);
}
