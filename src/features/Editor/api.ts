import { User } from './types';

export async function searchUsers(query: string): Promise<User[]> {
  const res = await fetch('https://challenge.surfe.com/users');
  const users: User[] = await res.json();
  const lcQuery = query.toLowerCase();

  return users
    .sort(({ first_name: a }, { first_name: b }) => a.localeCompare(b))
    .filter(({ username, first_name, last_name }) => {
      const fullName = `${first_name} ${last_name}`;

      return !lcQuery
        || [username, first_name, last_name, fullName].some((str) => str.startsWith(lcQuery));
    })
    .slice(0, 5);
}
