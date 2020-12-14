import axios from 'axios';
import { Member } from '../interface/Member';

export const sendMember = (path:string, member: Member) => {
  const createMember = {
    email: member.email,
    password: member.password
  }
 return axios.post(path, createMember)
}