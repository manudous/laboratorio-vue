import Axios from "axios";

export interface MemberEntity {
  avatar_url: string;
  id: string;
  login: string;
}

export const getMembers = {
  async get(entity: string): Promise<MemberEntity[]> {
    const { data } = await Axios.get(
      `https://api.github.com/orgs/${entity}/members`
    );
    return data;
  },
};

export const getMember = {
  async get(id: string): Promise<MemberEntity> {
    const { data } = await Axios.get(`https://api.github.com/users/${id}`);
    return data;
  },
};