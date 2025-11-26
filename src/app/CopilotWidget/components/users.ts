export interface User {
  id: string;
  name: string;
  avatar: string; // path to avatar image
}

export const users: Record<string, User> = {
  copilot: {
    id: 'copilot',
    name: 'Beezaro',
    avatar: 'icons/logo-bee.svg',
  },
  user: {
    id: 'user',
    name: 'Joshua',
    avatar: '/user-avatar.png',
  },
};
