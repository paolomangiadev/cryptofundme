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
  async createEarning(parent, { id, title, description, note, count }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const where = {
      id,
    };
    const balanceFound = await ctx.db.query.balance({ where }, `{ current { count } }`);
    if (!balanceFound) {
      throw new Error(`Balance not found or you're not the owner`);
    }
    return ctx.db.mutation.updateBalance(
      {
        where: {
          id,
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
      info,
    );
  },
  async deleteEarning(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const where = {
      id,
    };
    const earningFound = await ctx.db.query.earning({ where }, `{ id, count, balance { id, current { count } } }`);
    console.log(earningFound);
    if (!earningFound) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.updateBalance(
      {
        where: {
          id: earningFound.balance.id,
        },
        data: {
          current: {
            update: {
              count: earningFound.balance.current.count - earningFound.count,
            },
          },
          total: {
            update: {
              count: earningFound.balance.current.count - earningFound.count,
            },
          },
          earnings: {
            delete: {
              id: earningFound.id,
            },
          },
        },
      },
      info,
    );
  },
};
