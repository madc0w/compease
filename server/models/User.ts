import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
	email: string;
	password: string;
	preferredLanguage: 'en' | 'fr' | 'de';
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		preferredLanguage: {
			type: String,
			enum: ['en', 'fr', 'de'],
			default: 'en',
		},
	},
	{
		timestamps: true,
	}
);

// Index for faster email lookups
UserSchema.index({ email: 1 });

export const User =
	mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
