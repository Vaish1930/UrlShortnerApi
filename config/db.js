import mongoose from "mongoose";

const connectDb = async () => {
  const DBURI = `mongodb+srv://root:${process.env.PASSWORD}@cluster0.esbzy.mongodb.net/url'sDatabase?retryWrites=true&w=majority`;
  try {
    const conn = await mongoose.connect(DBURI, { autoIndex: false });
    console.log(`mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`error connecting mongodb ${error}`);
  }
};

export default connectDb;
