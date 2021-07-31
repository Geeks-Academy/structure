import { UserRequests } from 'Services';


export const transformUsers = async () => {
  const members = {};


  const users = await UserRequests.getAllUsers();

  users.data.forEach((user) => {
    members[user._id] = { ...user };
    const currentUser = members[user._id];
    currentUser.socials = currentUser.socials.reduce((acc, social) => {
      acc[social.social.name] = social.link;
      return acc;
    }, {});
    currentUser.parent = members[currentUser.boss];
  });

  return await Object.values(members);
};
