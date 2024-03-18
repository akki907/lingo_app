import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2aCvxLMQYagsMj4HkhvWw9hWNc9",
];

export const isAdmin = () => {
  const { userId } = auth();
console.log({userId})
  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
