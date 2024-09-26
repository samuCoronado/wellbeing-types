import { Types } from 'mongoose';

export type Session = {
  _id: Types.ObjectId;
  userId: Types.ObjectId | string;
  sessionToken: Types.ObjectId | string;
  expiresAt: Date;
  createdAt: Date;
};

export type Token = {
  _id: Types.ObjectId;
  userId: Types.ObjectId | string;
  strategy: 'google' | 'github';
  accessToken: string;
  refreshToken: string;
  createdAt: Date;
};

export type User = {
  _id: Types.ObjectId;
  fullName: string;
  username: string;
  email: string;
  emailVerified?: boolean;
  createAt: Date;
  updateAt?: Date;
  profilePhoto?: string;
  tokens?: Token[] | Types.ObjectId[];
  sessions?: Session[] | Types.ObjectId[];
};
