import { UserDescriptionProps } from "../interfaces/components/users";

const parseUsers = (res: any[]): UserDescriptionProps[] =>
  res
    .filter(({ id }) => !!id)
    .map(({ id, avatar, createdAt, description, name, website }) => ({
      id,
      avatar,
      createdAt: new Date(createdAt),
      description,
      name,
      website,
    }));

export { parseUsers };
