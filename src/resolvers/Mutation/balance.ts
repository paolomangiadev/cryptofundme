import { Context, getUserId } from "../../utils";

export const balance = {
  async createBalance(parent, { current, total }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const newBalance = await ctx.db.mutation.createBalance(
      {
        data: {
          current,
          owner: {
            connect: { id: userId },
          },
          total,
        },
      },
      info,
    );

    return {
      newBalance,
    };
  },
};
