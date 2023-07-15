import UserModel from '../database/models/UserModel';

export type UserLogin = Omit<UserModel, 'name' | 'id'>;

export type CreateUserRequest = Omit<UserModel, 'id' | 'role'>;
