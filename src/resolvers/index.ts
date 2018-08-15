import { AuthPayload } from "./AuthPayload";
import { auth } from "./Mutation/auth";
import { balance } from "./Mutation/balance";
import { post } from "./Mutation/post";
import { Query } from "./Query";
import { Subscription } from "./Subscription";

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...balance,
  },
  Subscription,
  AuthPayload,
};
