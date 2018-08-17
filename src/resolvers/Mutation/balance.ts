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
  async createEarning(parent, {balanceId, title, description, note, count}, ctx: Context, info) {
    const userId = getUserId(ctx);
    const where = {
      id: balanceId,
    };
    const balanceFound = await ctx.db.query.balance({ where: { id: balanceId } }, `{ current { count } }`);
    if (!balanceFound) {
      throw new Error(`Balance not found or you're not the owner`);
    }
    console.log(info);
    return ctx.db.mutation.updateBalance(
      {
        where: {
          id: balanceId,
        },
        data: {
          current: {
            update: {
              count: balanceFound.current.count + count,
            },
          },
          total: {
            update: {
              count: balanceFound.current.count + count,
            },
          },
          earnings: {
            create: {
              title,
              description,
              note,
              count,
            },
          },
        },
      },
    );
  },
};
