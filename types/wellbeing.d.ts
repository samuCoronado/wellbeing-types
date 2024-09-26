import { Types } from 'mongoose';

export type Session = {
  userId: Types.ObjectId | string;
  sessionToken: Types.ObjectId | string;
  expiresAt: Date;
  createdAt: Date;
};

export type Token = {
  userId: Types.ObjectId | string;
  strategy: 'google' | 'github';
  accessToken: string;
  refreshToken: string;
  createdAt: Date;
};

export type User = {
  fullName: string;
  username: string;
  email: string;
  emailVerified?: boolean;
  createAt: Date;
  updateAt?: Date;
  profilePhoto?: string;
  tokens?: Token[];
  sessions?: Session[];
};
