import Message from "../../models/Message";

const Mutation = {
  createMessage: async (_, { title, content, author }) => {
    const message = new Message({ title, content, author });
    return await message.save();
  },
};

export default Mutation;
