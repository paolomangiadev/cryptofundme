import { Context, getUserId } from "../../utils";

export const post = {
  async createDraft(parent, { title, text }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createPost(
      {
        data: {
          author: {
            connect: { id: userId },
          },
          isPublished: false,
          text,
          title,
        },
      },
      info,
    );
  },

  async publish(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    );
  },

  async deletePost(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.deletePost({ where: { id } });
  },
};
