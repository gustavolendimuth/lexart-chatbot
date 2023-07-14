import UserModel from '../database/models/UserModel';

export type UserLogin = Omit<UserModel, 'name' | 'id'>;
