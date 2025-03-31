import mongoose, { Schema, Document } from "mongoose";

// Define User Type
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Define Mongoose Schema
const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Export the model (create it only if it doesn't exist)
export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
