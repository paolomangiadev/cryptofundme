import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currentBalances: <T = CurrentBalance[]>(args: { where?: CurrentBalanceWhereInput, orderBy?: CurrentBalanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    totalBalances: <T = TotalBalance[]>(args: { where?: TotalBalanceWhereInput, orderBy?: TotalBalanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    earnings: <T = Earning[]>(args: { where?: EarningWhereInput, orderBy?: EarningOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    expenses: <T = Expense[]>(args: { where?: ExpenseWhereInput, orderBy?: ExpenseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    balances: <T = Balance[]>(args: { where?: BalanceWhereInput, orderBy?: BalanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currentBalance: <T = CurrentBalance | null>(args: { where: CurrentBalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    totalBalance: <T = TotalBalance | null>(args: { where: TotalBalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    earning: <T = Earning | null>(args: { where: EarningWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    expense: <T = Expense | null>(args: { where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    balance: <T = Balance | null>(args: { where: BalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currentBalancesConnection: <T = CurrentBalanceConnection>(args: { where?: CurrentBalanceWhereInput, orderBy?: CurrentBalanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    totalBalancesConnection: <T = TotalBalanceConnection>(args: { where?: TotalBalanceWhereInput, orderBy?: TotalBalanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    earningsConnection: <T = EarningConnection>(args: { where?: EarningWhereInput, orderBy?: EarningOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    expensesConnection: <T = ExpenseConnection>(args: { where?: ExpenseWhereInput, orderBy?: ExpenseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    balancesConnection: <T = BalanceConnection>(args: { where?: BalanceWhereInput, orderBy?: BalanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCurrentBalance: <T = CurrentBalance>(args: { data: CurrentBalanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTotalBalance: <T = TotalBalance>(args: { data: TotalBalanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEarning: <T = Earning>(args: { data: EarningCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createExpense: <T = Expense>(args: { data: ExpenseCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBalance: <T = Balance>(args: { data: BalanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCurrentBalance: <T = CurrentBalance | null>(args: { data: CurrentBalanceUpdateInput, where: CurrentBalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTotalBalance: <T = TotalBalance | null>(args: { data: TotalBalanceUpdateInput, where: TotalBalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEarning: <T = Earning | null>(args: { data: EarningUpdateInput, where: EarningWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateExpense: <T = Expense | null>(args: { data: ExpenseUpdateInput, where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBalance: <T = Balance | null>(args: { data: BalanceUpdateInput, where: BalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCurrentBalance: <T = CurrentBalance | null>(args: { where: CurrentBalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTotalBalance: <T = TotalBalance | null>(args: { where: TotalBalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEarning: <T = Earning | null>(args: { where: EarningWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteExpense: <T = Expense | null>(args: { where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBalance: <T = Balance | null>(args: { where: BalanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCurrentBalance: <T = CurrentBalance>(args: { where: CurrentBalanceWhereUniqueInput, create: CurrentBalanceCreateInput, update: CurrentBalanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTotalBalance: <T = TotalBalance>(args: { where: TotalBalanceWhereUniqueInput, create: TotalBalanceCreateInput, update: TotalBalanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEarning: <T = Earning>(args: { where: EarningWhereUniqueInput, create: EarningCreateInput, update: EarningUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertExpense: <T = Expense>(args: { where: ExpenseWhereUniqueInput, create: ExpenseCreateInput, update: ExpenseUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBalance: <T = Balance>(args: { where: BalanceWhereUniqueInput, create: BalanceCreateInput, update: BalanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCurrentBalances: <T = BatchPayload>(args: { data: CurrentBalanceUpdateInput, where?: CurrentBalanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTotalBalances: <T = BatchPayload>(args: { data: TotalBalanceUpdateInput, where?: TotalBalanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEarnings: <T = BatchPayload>(args: { data: EarningUpdateInput, where?: EarningWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyExpenses: <T = BatchPayload>(args: { data: ExpenseUpdateInput, where?: ExpenseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBalances: <T = BatchPayload>(args: { data: BalanceUpdateInput, where?: BalanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCurrentBalances: <T = BatchPayload>(args: { where?: CurrentBalanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTotalBalances: <T = BatchPayload>(args: { where?: TotalBalanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEarnings: <T = BatchPayload>(args: { where?: EarningWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyExpenses: <T = BatchPayload>(args: { where?: ExpenseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBalances: <T = BatchPayload>(args: { where?: BalanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    currentBalance: <T = CurrentBalanceSubscriptionPayload | null>(args: { where?: CurrentBalanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    totalBalance: <T = TotalBalanceSubscriptionPayload | null>(args: { where?: TotalBalanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    earning: <T = EarningSubscriptionPayload | null>(args: { where?: EarningSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    expense: <T = ExpenseSubscriptionPayload | null>(args: { where?: ExpenseSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    balance: <T = BalanceSubscriptionPayload | null>(args: { where?: BalanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  CurrentBalance: (where?: CurrentBalanceWhereInput) => Promise<boolean>
  TotalBalance: (where?: TotalBalanceWhereInput) => Promise<boolean>
  Earning: (where?: EarningWhereInput) => Promise<boolean>
  Expense: (where?: ExpenseWhereInput) => Promise<boolean>
  Balance: (where?: BalanceWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBalance {
  count: Int!
}

type AggregateCurrentBalance {
  count: Int!
}

type AggregateEarning {
  count: Int!
}

type AggregateExpense {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateTotalBalance {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Balance implements Node {
  id: ID!
  current(where: CurrentBalanceWhereInput): CurrentBalance!
  total(where: TotalBalanceWhereInput): TotalBalance!
  earnings(where: EarningWhereInput, orderBy: EarningOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Earning!]
  outgoings(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Expense!]
  createdAt: DateTime!
  updatedAt: DateTime!
  owner(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type BalanceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BalanceEdge]!
  aggregate: AggregateBalance!
}

input BalanceCreateInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput!
  total: TotalBalanceCreateOneWithoutBalanceInput!
  earnings: EarningCreateManyWithoutBalanceInput
  outgoings: ExpenseCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput!
}

input BalanceCreateOneWithoutCurrentInput {
  create: BalanceCreateWithoutCurrentInput
  connect: BalanceWhereUniqueInput
}

input BalanceCreateOneWithoutEarningsInput {
  create: BalanceCreateWithoutEarningsInput
  connect: BalanceWhereUniqueInput
}

input BalanceCreateOneWithoutOutgoingsInput {
  create: BalanceCreateWithoutOutgoingsInput
  connect: BalanceWhereUniqueInput
}

input BalanceCreateOneWithoutOwnerInput {
  create: BalanceCreateWithoutOwnerInput
  connect: BalanceWhereUniqueInput
}

input BalanceCreateOneWithoutTotalInput {
  create: BalanceCreateWithoutTotalInput
  connect: BalanceWhereUniqueInput
}

input BalanceCreateWithoutCurrentInput {
  total: TotalBalanceCreateOneWithoutBalanceInput!
  earnings: EarningCreateManyWithoutBalanceInput
  outgoings: ExpenseCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput!
}

input BalanceCreateWithoutEarningsInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput!
  total: TotalBalanceCreateOneWithoutBalanceInput!
  outgoings: ExpenseCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput!
}

input BalanceCreateWithoutOutgoingsInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput!
  total: TotalBalanceCreateOneWithoutBalanceInput!
  earnings: EarningCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput!
}

input BalanceCreateWithoutOwnerInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput!
  total: TotalBalanceCreateOneWithoutBalanceInput!
  earnings: EarningCreateManyWithoutBalanceInput
  outgoings: ExpenseCreateManyWithoutBalanceInput
}

input BalanceCreateWithoutTotalInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput!
  earnings: EarningCreateManyWithoutBalanceInput
  outgoings: ExpenseCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput!
}

"""An edge in a connection."""
type BalanceEdge {
  """The item at the end of the edge."""
  node: Balance!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BalanceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BalancePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BalanceSubscriptionPayload {
  mutation: MutationType!
  node: Balance
  updatedFields: [String!]
  previousValues: BalancePreviousValues
}

input BalanceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BalanceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BalanceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BalanceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BalanceWhereInput
}

input BalanceUpdateInput {
  current: CurrentBalanceUpdateOneWithoutBalanceInput
  total: TotalBalanceUpdateOneWithoutBalanceInput
  earnings: EarningUpdateManyWithoutBalanceInput
  outgoings: ExpenseUpdateManyWithoutBalanceInput
  owner: UserUpdateOneWithoutBalanceInput
}

input BalanceUpdateOneWithoutCurrentInput {
  create: BalanceCreateWithoutCurrentInput
  connect: BalanceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BalanceUpdateWithoutCurrentDataInput
  upsert: BalanceUpsertWithoutCurrentInput
}

input BalanceUpdateOneWithoutEarningsInput {
  create: BalanceCreateWithoutEarningsInput
  connect: BalanceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BalanceUpdateWithoutEarningsDataInput
  upsert: BalanceUpsertWithoutEarningsInput
}

input BalanceUpdateOneWithoutOutgoingsInput {
  create: BalanceCreateWithoutOutgoingsInput
  connect: BalanceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BalanceUpdateWithoutOutgoingsDataInput
  upsert: BalanceUpsertWithoutOutgoingsInput
}

input BalanceUpdateOneWithoutOwnerInput {
  create: BalanceCreateWithoutOwnerInput
  connect: BalanceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BalanceUpdateWithoutOwnerDataInput
  upsert: BalanceUpsertWithoutOwnerInput
}

input BalanceUpdateOneWithoutTotalInput {
  create: BalanceCreateWithoutTotalInput
  connect: BalanceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BalanceUpdateWithoutTotalDataInput
  upsert: BalanceUpsertWithoutTotalInput
}

input BalanceUpdateWithoutCurrentDataInput {
  total: TotalBalanceUpdateOneWithoutBalanceInput
  earnings: EarningUpdateManyWithoutBalanceInput
  outgoings: ExpenseUpdateManyWithoutBalanceInput
  owner: UserUpdateOneWithoutBalanceInput
}

input BalanceUpdateWithoutEarningsDataInput {
  current: CurrentBalanceUpdateOneWithoutBalanceInput
  total: TotalBalanceUpdateOneWithoutBalanceInput
  outgoings: ExpenseUpdateManyWithoutBalanceInput
  owner: UserUpdateOneWithoutBalanceInput
}

input BalanceUpdateWithoutOutgoingsDataInput {
  current: CurrentBalanceUpdateOneWithoutBalanceInput
  total: TotalBalanceUpdateOneWithoutBalanceInput
  earnings: EarningUpdateManyWithoutBalanceInput
  owner: UserUpdateOneWithoutBalanceInput
}

input BalanceUpdateWithoutOwnerDataInput {
  current: CurrentBalanceUpdateOneWithoutBalanceInput
  total: TotalBalanceUpdateOneWithoutBalanceInput
  earnings: EarningUpdateManyWithoutBalanceInput
  outgoings: ExpenseUpdateManyWithoutBalanceInput
}

input BalanceUpdateWithoutTotalDataInput {
  current: CurrentBalanceUpdateOneWithoutBalanceInput
  earnings: EarningUpdateManyWithoutBalanceInput
  outgoings: ExpenseUpdateManyWithoutBalanceInput
  owner: UserUpdateOneWithoutBalanceInput
}

input BalanceUpsertWithoutCurrentInput {
  update: BalanceUpdateWithoutCurrentDataInput!
  create: BalanceCreateWithoutCurrentInput!
}

input BalanceUpsertWithoutEarningsInput {
  update: BalanceUpdateWithoutEarningsDataInput!
  create: BalanceCreateWithoutEarningsInput!
}

input BalanceUpsertWithoutOutgoingsInput {
  update: BalanceUpdateWithoutOutgoingsDataInput!
  create: BalanceCreateWithoutOutgoingsInput!
}

input BalanceUpsertWithoutOwnerInput {
  update: BalanceUpdateWithoutOwnerDataInput!
  create: BalanceCreateWithoutOwnerInput!
}

input BalanceUpsertWithoutTotalInput {
  update: BalanceUpdateWithoutTotalDataInput!
  create: BalanceCreateWithoutTotalInput!
}

input BalanceWhereInput {
  """Logical AND on all given filters."""
  AND: [BalanceWhereInput!]

  """Logical OR on all given filters."""
  OR: [BalanceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BalanceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  current: CurrentBalanceWhereInput
  total: TotalBalanceWhereInput
  earnings_every: EarningWhereInput
  earnings_some: EarningWhereInput
  earnings_none: EarningWhereInput
  outgoings_every: ExpenseWhereInput
  outgoings_some: ExpenseWhereInput
  outgoings_none: ExpenseWhereInput
  owner: UserWhereInput
}

input BalanceWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type CurrentBalance implements Node {
  id: ID!
  count: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  balance(where: BalanceWhereInput): Balance
}

"""A connection to a list of items."""
type CurrentBalanceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CurrentBalanceEdge]!
  aggregate: AggregateCurrentBalance!
}

input CurrentBalanceCreateInput {
  count: Float
  balance: BalanceCreateOneWithoutCurrentInput
}

input CurrentBalanceCreateOneWithoutBalanceInput {
  create: CurrentBalanceCreateWithoutBalanceInput
  connect: CurrentBalanceWhereUniqueInput
}

input CurrentBalanceCreateWithoutBalanceInput {
  count: Float
}

"""An edge in a connection."""
type CurrentBalanceEdge {
  """The item at the end of the edge."""
  node: CurrentBalance!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CurrentBalanceOrderByInput {
  id_ASC
  id_DESC
  count_ASC
  count_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CurrentBalancePreviousValues {
  id: ID!
  count: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CurrentBalanceSubscriptionPayload {
  mutation: MutationType!
  node: CurrentBalance
  updatedFields: [String!]
  previousValues: CurrentBalancePreviousValues
}

input CurrentBalanceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CurrentBalanceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CurrentBalanceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CurrentBalanceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CurrentBalanceWhereInput
}

input CurrentBalanceUpdateInput {
  count: Float
  balance: BalanceUpdateOneWithoutCurrentInput
}

input CurrentBalanceUpdateOneWithoutBalanceInput {
  create: CurrentBalanceCreateWithoutBalanceInput
  connect: CurrentBalanceWhereUniqueInput
  delete: Boolean
  update: CurrentBalanceUpdateWithoutBalanceDataInput
  upsert: CurrentBalanceUpsertWithoutBalanceInput
}

input CurrentBalanceUpdateWithoutBalanceDataInput {
  count: Float
}

input CurrentBalanceUpsertWithoutBalanceInput {
  update: CurrentBalanceUpdateWithoutBalanceDataInput!
  create: CurrentBalanceCreateWithoutBalanceInput!
}

input CurrentBalanceWhereInput {
  """Logical AND on all given filters."""
  AND: [CurrentBalanceWhereInput!]

  """Logical OR on all given filters."""
  OR: [CurrentBalanceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CurrentBalanceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  count: Float

  """All values that are not equal to given value."""
  count_not: Float

  """All values that are contained in given list."""
  count_in: [Float!]

  """All values that are not contained in given list."""
  count_not_in: [Float!]

  """All values less than the given value."""
  count_lt: Float

  """All values less than or equal the given value."""
  count_lte: Float

  """All values greater than the given value."""
  count_gt: Float

  """All values greater than or equal the given value."""
  count_gte: Float
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  balance: BalanceWhereInput
}

input CurrentBalanceWhereUniqueInput {
  id: ID
}

scalar DateTime

type Earning implements Node {
  id: ID!
  title: String!
  description: String!
  note: String
  count: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  balance(where: BalanceWhereInput): Balance
}

"""A connection to a list of items."""
type EarningConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EarningEdge]!
  aggregate: AggregateEarning!
}

input EarningCreateInput {
  title: String!
  description: String!
  note: String
  count: Float!
  balance: BalanceCreateOneWithoutEarningsInput
}

input EarningCreateManyWithoutBalanceInput {
  create: [EarningCreateWithoutBalanceInput!]
  connect: [EarningWhereUniqueInput!]
}

input EarningCreateWithoutBalanceInput {
  title: String!
  description: String!
  note: String
  count: Float!
}

"""An edge in a connection."""
type EarningEdge {
  """The item at the end of the edge."""
  node: Earning!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EarningOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  note_ASC
  note_DESC
  count_ASC
  count_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EarningPreviousValues {
  id: ID!
  title: String!
  description: String!
  note: String
  count: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type EarningSubscriptionPayload {
  mutation: MutationType!
  node: Earning
  updatedFields: [String!]
  previousValues: EarningPreviousValues
}

input EarningSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EarningSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EarningSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EarningSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EarningWhereInput
}

input EarningUpdateInput {
  title: String
  description: String
  note: String
  count: Float
  balance: BalanceUpdateOneWithoutEarningsInput
}

input EarningUpdateManyWithoutBalanceInput {
  create: [EarningCreateWithoutBalanceInput!]
  connect: [EarningWhereUniqueInput!]
  disconnect: [EarningWhereUniqueInput!]
  delete: [EarningWhereUniqueInput!]
  update: [EarningUpdateWithWhereUniqueWithoutBalanceInput!]
  upsert: [EarningUpsertWithWhereUniqueWithoutBalanceInput!]
}

input EarningUpdateWithoutBalanceDataInput {
  title: String
  description: String
  note: String
  count: Float
}

input EarningUpdateWithWhereUniqueWithoutBalanceInput {
  where: EarningWhereUniqueInput!
  data: EarningUpdateWithoutBalanceDataInput!
}

input EarningUpsertWithWhereUniqueWithoutBalanceInput {
  where: EarningWhereUniqueInput!
  update: EarningUpdateWithoutBalanceDataInput!
  create: EarningCreateWithoutBalanceInput!
}

input EarningWhereInput {
  """Logical AND on all given filters."""
  AND: [EarningWhereInput!]

  """Logical OR on all given filters."""
  OR: [EarningWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EarningWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  count: Float

  """All values that are not equal to given value."""
  count_not: Float

  """All values that are contained in given list."""
  count_in: [Float!]

  """All values that are not contained in given list."""
  count_not_in: [Float!]

  """All values less than the given value."""
  count_lt: Float

  """All values less than or equal the given value."""
  count_lte: Float

  """All values greater than the given value."""
  count_gt: Float

  """All values greater than or equal the given value."""
  count_gte: Float
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  balance: BalanceWhereInput
}

input EarningWhereUniqueInput {
  id: ID
}

type Expense implements Node {
  id: ID!
  title: String!
  description: String!
  note: String
  count: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  balance(where: BalanceWhereInput): Balance
}

"""A connection to a list of items."""
type ExpenseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ExpenseEdge]!
  aggregate: AggregateExpense!
}

input ExpenseCreateInput {
  title: String!
  description: String!
  note: String
  count: Float!
  balance: BalanceCreateOneWithoutOutgoingsInput
}

input ExpenseCreateManyWithoutBalanceInput {
  create: [ExpenseCreateWithoutBalanceInput!]
  connect: [ExpenseWhereUniqueInput!]
}

input ExpenseCreateWithoutBalanceInput {
  title: String!
  description: String!
  note: String
  count: Float!
}

"""An edge in a connection."""
type ExpenseEdge {
  """The item at the end of the edge."""
  node: Expense!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ExpenseOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  note_ASC
  note_DESC
  count_ASC
  count_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExpensePreviousValues {
  id: ID!
  title: String!
  description: String!
  note: String
  count: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ExpenseSubscriptionPayload {
  mutation: MutationType!
  node: Expense
  updatedFields: [String!]
  previousValues: ExpensePreviousValues
}

input ExpenseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ExpenseSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExpenseSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExpenseSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ExpenseWhereInput
}

input ExpenseUpdateInput {
  title: String
  description: String
  note: String
  count: Float
  balance: BalanceUpdateOneWithoutOutgoingsInput
}

input ExpenseUpdateManyWithoutBalanceInput {
  create: [ExpenseCreateWithoutBalanceInput!]
  connect: [ExpenseWhereUniqueInput!]
  disconnect: [ExpenseWhereUniqueInput!]
  delete: [ExpenseWhereUniqueInput!]
  update: [ExpenseUpdateWithWhereUniqueWithoutBalanceInput!]
  upsert: [ExpenseUpsertWithWhereUniqueWithoutBalanceInput!]
}

input ExpenseUpdateWithoutBalanceDataInput {
  title: String
  description: String
  note: String
  count: Float
}

input ExpenseUpdateWithWhereUniqueWithoutBalanceInput {
  where: ExpenseWhereUniqueInput!
  data: ExpenseUpdateWithoutBalanceDataInput!
}

input ExpenseUpsertWithWhereUniqueWithoutBalanceInput {
  where: ExpenseWhereUniqueInput!
  update: ExpenseUpdateWithoutBalanceDataInput!
  create: ExpenseCreateWithoutBalanceInput!
}

input ExpenseWhereInput {
  """Logical AND on all given filters."""
  AND: [ExpenseWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExpenseWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExpenseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  count: Float

  """All values that are not equal to given value."""
  count_not: Float

  """All values that are contained in given list."""
  count_in: [Float!]

  """All values that are not contained in given list."""
  count_not_in: [Float!]

  """All values less than the given value."""
  count_lt: Float

  """All values less than or equal the given value."""
  count_lte: Float

  """All values greater than the given value."""
  count_gt: Float

  """All values greater than or equal the given value."""
  count_gte: Float
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  balance: BalanceWhereInput
}

input ExpenseWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  createCurrentBalance(data: CurrentBalanceCreateInput!): CurrentBalance!
  createTotalBalance(data: TotalBalanceCreateInput!): TotalBalance!
  createEarning(data: EarningCreateInput!): Earning!
  createExpense(data: ExpenseCreateInput!): Expense!
  createBalance(data: BalanceCreateInput!): Balance!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCurrentBalance(data: CurrentBalanceUpdateInput!, where: CurrentBalanceWhereUniqueInput!): CurrentBalance
  updateTotalBalance(data: TotalBalanceUpdateInput!, where: TotalBalanceWhereUniqueInput!): TotalBalance
  updateEarning(data: EarningUpdateInput!, where: EarningWhereUniqueInput!): Earning
  updateExpense(data: ExpenseUpdateInput!, where: ExpenseWhereUniqueInput!): Expense
  updateBalance(data: BalanceUpdateInput!, where: BalanceWhereUniqueInput!): Balance
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCurrentBalance(where: CurrentBalanceWhereUniqueInput!): CurrentBalance
  deleteTotalBalance(where: TotalBalanceWhereUniqueInput!): TotalBalance
  deleteEarning(where: EarningWhereUniqueInput!): Earning
  deleteExpense(where: ExpenseWhereUniqueInput!): Expense
  deleteBalance(where: BalanceWhereUniqueInput!): Balance
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCurrentBalance(where: CurrentBalanceWhereUniqueInput!, create: CurrentBalanceCreateInput!, update: CurrentBalanceUpdateInput!): CurrentBalance!
  upsertTotalBalance(where: TotalBalanceWhereUniqueInput!, create: TotalBalanceCreateInput!, update: TotalBalanceUpdateInput!): TotalBalance!
  upsertEarning(where: EarningWhereUniqueInput!, create: EarningCreateInput!, update: EarningUpdateInput!): Earning!
  upsertExpense(where: ExpenseWhereUniqueInput!, create: ExpenseCreateInput!, update: ExpenseUpdateInput!): Expense!
  upsertBalance(where: BalanceWhereUniqueInput!, create: BalanceCreateInput!, update: BalanceUpdateInput!): Balance!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCurrentBalances(data: CurrentBalanceUpdateInput!, where: CurrentBalanceWhereInput): BatchPayload!
  updateManyTotalBalances(data: TotalBalanceUpdateInput!, where: TotalBalanceWhereInput): BatchPayload!
  updateManyEarnings(data: EarningUpdateInput!, where: EarningWhereInput): BatchPayload!
  updateManyExpenses(data: ExpenseUpdateInput!, where: ExpenseWhereInput): BatchPayload!
  updateManyBalances(data: BalanceUpdateInput!, where: BalanceWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCurrentBalances(where: CurrentBalanceWhereInput): BatchPayload!
  deleteManyTotalBalances(where: TotalBalanceWhereInput): BatchPayload!
  deleteManyEarnings(where: EarningWhereInput): BatchPayload!
  deleteManyExpenses(where: ExpenseWhereInput): BatchPayload!
  deleteManyBalances(where: BalanceWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  currentBalances(where: CurrentBalanceWhereInput, orderBy: CurrentBalanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CurrentBalance]!
  totalBalances(where: TotalBalanceWhereInput, orderBy: TotalBalanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TotalBalance]!
  earnings(where: EarningWhereInput, orderBy: EarningOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Earning]!
  expenses(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Expense]!
  balances(where: BalanceWhereInput, orderBy: BalanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Balance]!
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  currentBalance(where: CurrentBalanceWhereUniqueInput!): CurrentBalance
  totalBalance(where: TotalBalanceWhereUniqueInput!): TotalBalance
  earning(where: EarningWhereUniqueInput!): Earning
  expense(where: ExpenseWhereUniqueInput!): Expense
  balance(where: BalanceWhereUniqueInput!): Balance
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  currentBalancesConnection(where: CurrentBalanceWhereInput, orderBy: CurrentBalanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CurrentBalanceConnection!
  totalBalancesConnection(where: TotalBalanceWhereInput, orderBy: TotalBalanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TotalBalanceConnection!
  earningsConnection(where: EarningWhereInput, orderBy: EarningOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EarningConnection!
  expensesConnection(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExpenseConnection!
  balancesConnection(where: BalanceWhereInput, orderBy: BalanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BalanceConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  currentBalance(where: CurrentBalanceSubscriptionWhereInput): CurrentBalanceSubscriptionPayload
  totalBalance(where: TotalBalanceSubscriptionWhereInput): TotalBalanceSubscriptionPayload
  earning(where: EarningSubscriptionWhereInput): EarningSubscriptionPayload
  expense(where: ExpenseSubscriptionWhereInput): ExpenseSubscriptionPayload
  balance(where: BalanceSubscriptionWhereInput): BalanceSubscriptionPayload
}

type TotalBalance implements Node {
  id: ID!
  count: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  balance(where: BalanceWhereInput): Balance
}

"""A connection to a list of items."""
type TotalBalanceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TotalBalanceEdge]!
  aggregate: AggregateTotalBalance!
}

input TotalBalanceCreateInput {
  count: Float
  balance: BalanceCreateOneWithoutTotalInput
}

input TotalBalanceCreateOneWithoutBalanceInput {
  create: TotalBalanceCreateWithoutBalanceInput
  connect: TotalBalanceWhereUniqueInput
}

input TotalBalanceCreateWithoutBalanceInput {
  count: Float
}

"""An edge in a connection."""
type TotalBalanceEdge {
  """The item at the end of the edge."""
  node: TotalBalance!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TotalBalanceOrderByInput {
  id_ASC
  id_DESC
  count_ASC
  count_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TotalBalancePreviousValues {
  id: ID!
  count: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TotalBalanceSubscriptionPayload {
  mutation: MutationType!
  node: TotalBalance
  updatedFields: [String!]
  previousValues: TotalBalancePreviousValues
}

input TotalBalanceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TotalBalanceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TotalBalanceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TotalBalanceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TotalBalanceWhereInput
}

input TotalBalanceUpdateInput {
  count: Float
  balance: BalanceUpdateOneWithoutTotalInput
}

input TotalBalanceUpdateOneWithoutBalanceInput {
  create: TotalBalanceCreateWithoutBalanceInput
  connect: TotalBalanceWhereUniqueInput
  delete: Boolean
  update: TotalBalanceUpdateWithoutBalanceDataInput
  upsert: TotalBalanceUpsertWithoutBalanceInput
}

input TotalBalanceUpdateWithoutBalanceDataInput {
  count: Float
}

input TotalBalanceUpsertWithoutBalanceInput {
  update: TotalBalanceUpdateWithoutBalanceDataInput!
  create: TotalBalanceCreateWithoutBalanceInput!
}

input TotalBalanceWhereInput {
  """Logical AND on all given filters."""
  AND: [TotalBalanceWhereInput!]

  """Logical OR on all given filters."""
  OR: [TotalBalanceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TotalBalanceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  count: Float

  """All values that are not equal to given value."""
  count_not: Float

  """All values that are contained in given list."""
  count_in: [Float!]

  """All values that are not contained in given list."""
  count_not_in: [Float!]

  """All values less than the given value."""
  count_lt: Float

  """All values less than or equal the given value."""
  count_lte: Float

  """All values greater than the given value."""
  count_gt: Float

  """All values greater than or equal the given value."""
  count_gte: Float
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  balance: BalanceWhereInput
}

input TotalBalanceWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  balance(where: BalanceWhereInput): Balance
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
  balance: BalanceCreateOneWithoutOwnerInput
}

input UserCreateOneWithoutBalanceInput {
  create: UserCreateWithoutBalanceInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBalanceInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
  balance: BalanceCreateOneWithoutOwnerInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  balance: BalanceUpdateOneWithoutOwnerInput
}

input UserUpdateOneWithoutBalanceInput {
  create: UserCreateWithoutBalanceInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutBalanceDataInput
  upsert: UserUpsertWithoutBalanceInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutBalanceDataInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
  balance: BalanceUpdateOneWithoutOwnerInput
}

input UserUpsertWithoutBalanceInput {
  update: UserUpdateWithoutBalanceDataInput!
  create: UserCreateWithoutBalanceInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  balance: BalanceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type EarningOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'note_ASC' |
  'note_DESC' |
  'count_ASC' |
  'count_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ExpenseOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'note_ASC' |
  'note_DESC' |
  'count_ASC' |
  'count_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CurrentBalanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'count_ASC' |
  'count_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type TotalBalanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'count_ASC' |
  'count_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BalanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface BalanceCreateOneWithoutTotalInput {
  create?: BalanceCreateWithoutTotalInput
  connect?: BalanceWhereUniqueInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface ExpenseCreateInput {
  title: String
  description: String
  note?: String
  count: Float
  balance?: BalanceCreateOneWithoutOutgoingsInput
}

export interface EarningWhereInput {
  AND?: EarningWhereInput[] | EarningWhereInput
  OR?: EarningWhereInput[] | EarningWhereInput
  NOT?: EarningWhereInput[] | EarningWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  count?: Float
  count_not?: Float
  count_in?: Float[] | Float
  count_not_in?: Float[] | Float
  count_lt?: Float
  count_lte?: Float
  count_gt?: Float
  count_gte?: Float
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  balance?: BalanceWhereInput
}

export interface BalanceCreateOneWithoutOutgoingsInput {
  create?: BalanceCreateWithoutOutgoingsInput
  connect?: BalanceWhereUniqueInput
}

export interface TotalBalanceWhereInput {
  AND?: TotalBalanceWhereInput[] | TotalBalanceWhereInput
  OR?: TotalBalanceWhereInput[] | TotalBalanceWhereInput
  NOT?: TotalBalanceWhereInput[] | TotalBalanceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  count?: Float
  count_not?: Float
  count_in?: Float[] | Float
  count_not_in?: Float[] | Float
  count_lt?: Float
  count_lte?: Float
  count_gt?: Float
  count_gte?: Float
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  balance?: BalanceWhereInput
}

export interface BalanceCreateWithoutOwnerInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput
  total: TotalBalanceCreateOneWithoutBalanceInput
  earnings?: EarningCreateManyWithoutBalanceInput
  outgoings?: ExpenseCreateManyWithoutBalanceInput
}

export interface BalanceUpsertWithoutOwnerInput {
  update: BalanceUpdateWithoutOwnerDataInput
  create: BalanceCreateWithoutOwnerInput
}

export interface CurrentBalanceCreateOneWithoutBalanceInput {
  create?: CurrentBalanceCreateWithoutBalanceInput
  connect?: CurrentBalanceWhereUniqueInput
}

export interface BalanceCreateWithoutOutgoingsInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput
  total: TotalBalanceCreateOneWithoutBalanceInput
  earnings?: EarningCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput
}

export interface CurrentBalanceCreateWithoutBalanceInput {
  count?: Float
}

export interface ExpenseSubscriptionWhereInput {
  AND?: ExpenseSubscriptionWhereInput[] | ExpenseSubscriptionWhereInput
  OR?: ExpenseSubscriptionWhereInput[] | ExpenseSubscriptionWhereInput
  NOT?: ExpenseSubscriptionWhereInput[] | ExpenseSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ExpenseWhereInput
}

export interface TotalBalanceCreateOneWithoutBalanceInput {
  create?: TotalBalanceCreateWithoutBalanceInput
  connect?: TotalBalanceWhereUniqueInput
}

export interface TotalBalanceSubscriptionWhereInput {
  AND?: TotalBalanceSubscriptionWhereInput[] | TotalBalanceSubscriptionWhereInput
  OR?: TotalBalanceSubscriptionWhereInput[] | TotalBalanceSubscriptionWhereInput
  NOT?: TotalBalanceSubscriptionWhereInput[] | TotalBalanceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TotalBalanceWhereInput
}

export interface TotalBalanceCreateWithoutBalanceInput {
  count?: Float
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface EarningCreateManyWithoutBalanceInput {
  create?: EarningCreateWithoutBalanceInput[] | EarningCreateWithoutBalanceInput
  connect?: EarningWhereUniqueInput[] | EarningWhereUniqueInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface EarningCreateWithoutBalanceInput {
  title: String
  description: String
  note?: String
  count: Float
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
  balance?: BalanceWhereInput
}

export interface ExpenseCreateManyWithoutBalanceInput {
  create?: ExpenseCreateWithoutBalanceInput[] | ExpenseCreateWithoutBalanceInput
  connect?: ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput
}

export interface BalanceUpsertWithoutOutgoingsInput {
  update: BalanceUpdateWithoutOutgoingsDataInput
  create: BalanceCreateWithoutOutgoingsInput
}

export interface ExpenseCreateWithoutBalanceInput {
  title: String
  description: String
  note?: String
  count: Float
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
  balance?: BalanceCreateOneWithoutOwnerInput
}

export interface TotalBalanceWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface ExpenseWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface BalanceUpdateWithoutOutgoingsDataInput {
  current?: CurrentBalanceUpdateOneWithoutBalanceInput
  total?: TotalBalanceUpdateOneWithoutBalanceInput
  earnings?: EarningUpdateManyWithoutBalanceInput
  owner?: UserUpdateOneWithoutBalanceInput
}

export interface CurrentBalanceCreateInput {
  count?: Float
  balance?: BalanceCreateOneWithoutCurrentInput
}

export interface ExpenseUpdateInput {
  title?: String
  description?: String
  note?: String
  count?: Float
  balance?: BalanceUpdateOneWithoutOutgoingsInput
}

export interface BalanceCreateOneWithoutCurrentInput {
  create?: BalanceCreateWithoutCurrentInput
  connect?: BalanceWhereUniqueInput
}

export interface BalanceUpdateWithoutEarningsDataInput {
  current?: CurrentBalanceUpdateOneWithoutBalanceInput
  total?: TotalBalanceUpdateOneWithoutBalanceInput
  outgoings?: ExpenseUpdateManyWithoutBalanceInput
  owner?: UserUpdateOneWithoutBalanceInput
}

export interface BalanceCreateWithoutCurrentInput {
  total: TotalBalanceCreateOneWithoutBalanceInput
  earnings?: EarningCreateManyWithoutBalanceInput
  outgoings?: ExpenseCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput
}

export interface EarningUpdateInput {
  title?: String
  description?: String
  note?: String
  count?: Float
  balance?: BalanceUpdateOneWithoutEarningsInput
}

export interface UserCreateOneWithoutBalanceInput {
  create?: UserCreateWithoutBalanceInput
  connect?: UserWhereUniqueInput
}

export interface BalanceUpdateWithoutTotalDataInput {
  current?: CurrentBalanceUpdateOneWithoutBalanceInput
  earnings?: EarningUpdateManyWithoutBalanceInput
  outgoings?: ExpenseUpdateManyWithoutBalanceInput
  owner?: UserUpdateOneWithoutBalanceInput
}

export interface UserCreateWithoutBalanceInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
}

export interface TotalBalanceUpdateInput {
  count?: Float
  balance?: BalanceUpdateOneWithoutTotalInput
}

export interface TotalBalanceCreateInput {
  count?: Float
  balance?: BalanceCreateOneWithoutTotalInput
}

export interface UserUpsertWithoutBalanceInput {
  update: UserUpdateWithoutBalanceDataInput
  create: UserCreateWithoutBalanceInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
  balance?: BalanceUpdateOneWithoutOwnerInput
}

export interface UserUpdateOneWithoutBalanceInput {
  create?: UserCreateWithoutBalanceInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutBalanceDataInput
  upsert?: UserUpsertWithoutBalanceInput
}

export interface BalanceCreateWithoutTotalInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput
  earnings?: EarningCreateManyWithoutBalanceInput
  outgoings?: ExpenseCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput
}

export interface BalanceUpdateOneWithoutCurrentInput {
  create?: BalanceCreateWithoutCurrentInput
  connect?: BalanceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BalanceUpdateWithoutCurrentDataInput
  upsert?: BalanceUpsertWithoutCurrentInput
}

export interface EarningCreateInput {
  title: String
  description: String
  note?: String
  count: Float
  balance?: BalanceCreateOneWithoutEarningsInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface BalanceCreateOneWithoutEarningsInput {
  create?: BalanceCreateWithoutEarningsInput
  connect?: BalanceWhereUniqueInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface BalanceCreateWithoutEarningsInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput
  total: TotalBalanceCreateOneWithoutBalanceInput
  outgoings?: ExpenseCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface ExpenseWhereInput {
  AND?: ExpenseWhereInput[] | ExpenseWhereInput
  OR?: ExpenseWhereInput[] | ExpenseWhereInput
  NOT?: ExpenseWhereInput[] | ExpenseWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  count?: Float
  count_not?: Float
  count_in?: Float[] | Float
  count_not_in?: Float[] | Float
  count_lt?: Float
  count_lte?: Float
  count_gt?: Float
  count_gte?: Float
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  balance?: BalanceWhereInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  name: String
  balance?: BalanceCreateOneWithoutOwnerInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface BalanceSubscriptionWhereInput {
  AND?: BalanceSubscriptionWhereInput[] | BalanceSubscriptionWhereInput
  OR?: BalanceSubscriptionWhereInput[] | BalanceSubscriptionWhereInput
  NOT?: BalanceSubscriptionWhereInput[] | BalanceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BalanceWhereInput
}

export interface CurrentBalanceSubscriptionWhereInput {
  AND?: CurrentBalanceSubscriptionWhereInput[] | CurrentBalanceSubscriptionWhereInput
  OR?: CurrentBalanceSubscriptionWhereInput[] | CurrentBalanceSubscriptionWhereInput
  NOT?: CurrentBalanceSubscriptionWhereInput[] | CurrentBalanceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CurrentBalanceWhereInput
}

export interface BalanceWhereInput {
  AND?: BalanceWhereInput[] | BalanceWhereInput
  OR?: BalanceWhereInput[] | BalanceWhereInput
  NOT?: BalanceWhereInput[] | BalanceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  current?: CurrentBalanceWhereInput
  total?: TotalBalanceWhereInput
  earnings_every?: EarningWhereInput
  earnings_some?: EarningWhereInput
  earnings_none?: EarningWhereInput
  outgoings_every?: ExpenseWhereInput
  outgoings_some?: ExpenseWhereInput
  outgoings_none?: ExpenseWhereInput
  owner?: UserWhereInput
}

export interface BalanceCreateInput {
  current: CurrentBalanceCreateOneWithoutBalanceInput
  total: TotalBalanceCreateOneWithoutBalanceInput
  earnings?: EarningCreateManyWithoutBalanceInput
  outgoings?: ExpenseCreateManyWithoutBalanceInput
  owner: UserCreateOneWithoutBalanceInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneWithoutPostsInput
}

export interface EarningWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface BalanceUpdateOneWithoutOutgoingsInput {
  create?: BalanceCreateWithoutOutgoingsInput
  connect?: BalanceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BalanceUpdateWithoutOutgoingsDataInput
  upsert?: BalanceUpsertWithoutOutgoingsInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  name?: String
  balance?: BalanceUpdateOneWithoutOwnerInput
}

export interface BalanceUpdateOneWithoutEarningsInput {
  create?: BalanceCreateWithoutEarningsInput
  connect?: BalanceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BalanceUpdateWithoutEarningsDataInput
  upsert?: BalanceUpsertWithoutEarningsInput
}

export interface BalanceUpdateOneWithoutOwnerInput {
  create?: BalanceCreateWithoutOwnerInput
  connect?: BalanceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BalanceUpdateWithoutOwnerDataInput
  upsert?: BalanceUpsertWithoutOwnerInput
}

export interface BalanceUpdateOneWithoutTotalInput {
  create?: BalanceCreateWithoutTotalInput
  connect?: BalanceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BalanceUpdateWithoutTotalDataInput
  upsert?: BalanceUpsertWithoutTotalInput
}

export interface BalanceUpdateWithoutOwnerDataInput {
  current?: CurrentBalanceUpdateOneWithoutBalanceInput
  total?: TotalBalanceUpdateOneWithoutBalanceInput
  earnings?: EarningUpdateManyWithoutBalanceInput
  outgoings?: ExpenseUpdateManyWithoutBalanceInput
}

export interface UserUpdateWithoutBalanceDataInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface CurrentBalanceUpdateOneWithoutBalanceInput {
  create?: CurrentBalanceCreateWithoutBalanceInput
  connect?: CurrentBalanceWhereUniqueInput
  delete?: Boolean
  update?: CurrentBalanceUpdateWithoutBalanceDataInput
  upsert?: CurrentBalanceUpsertWithoutBalanceInput
}

export interface CurrentBalanceUpdateInput {
  count?: Float
  balance?: BalanceUpdateOneWithoutCurrentInput
}

export interface CurrentBalanceUpdateWithoutBalanceDataInput {
  count?: Float
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface CurrentBalanceUpsertWithoutBalanceInput {
  update: CurrentBalanceUpdateWithoutBalanceDataInput
  create: CurrentBalanceCreateWithoutBalanceInput
}

export interface BalanceCreateOneWithoutOwnerInput {
  create?: BalanceCreateWithoutOwnerInput
  connect?: BalanceWhereUniqueInput
}

export interface TotalBalanceUpdateOneWithoutBalanceInput {
  create?: TotalBalanceCreateWithoutBalanceInput
  connect?: TotalBalanceWhereUniqueInput
  delete?: Boolean
  update?: TotalBalanceUpdateWithoutBalanceDataInput
  upsert?: TotalBalanceUpsertWithoutBalanceInput
}

export interface CurrentBalanceWhereInput {
  AND?: CurrentBalanceWhereInput[] | CurrentBalanceWhereInput
  OR?: CurrentBalanceWhereInput[] | CurrentBalanceWhereInput
  NOT?: CurrentBalanceWhereInput[] | CurrentBalanceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  count?: Float
  count_not?: Float
  count_in?: Float[] | Float
  count_not_in?: Float[] | Float
  count_lt?: Float
  count_lte?: Float
  count_gt?: Float
  count_gte?: Float
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  balance?: BalanceWhereInput
}

export interface TotalBalanceUpdateWithoutBalanceDataInput {
  count?: Float
}

export interface CurrentBalanceWhereUniqueInput {
  id?: ID_Input
}

export interface TotalBalanceUpsertWithoutBalanceInput {
  update: TotalBalanceUpdateWithoutBalanceDataInput
  create: TotalBalanceCreateWithoutBalanceInput
}

export interface BalanceUpsertWithoutEarningsInput {
  update: BalanceUpdateWithoutEarningsDataInput
  create: BalanceCreateWithoutEarningsInput
}

export interface EarningUpdateManyWithoutBalanceInput {
  create?: EarningCreateWithoutBalanceInput[] | EarningCreateWithoutBalanceInput
  connect?: EarningWhereUniqueInput[] | EarningWhereUniqueInput
  disconnect?: EarningWhereUniqueInput[] | EarningWhereUniqueInput
  delete?: EarningWhereUniqueInput[] | EarningWhereUniqueInput
  update?: EarningUpdateWithWhereUniqueWithoutBalanceInput[] | EarningUpdateWithWhereUniqueWithoutBalanceInput
  upsert?: EarningUpsertWithWhereUniqueWithoutBalanceInput[] | EarningUpsertWithWhereUniqueWithoutBalanceInput
}

export interface BalanceUpsertWithoutCurrentInput {
  update: BalanceUpdateWithoutCurrentDataInput
  create: BalanceCreateWithoutCurrentInput
}

export interface EarningUpdateWithWhereUniqueWithoutBalanceInput {
  where: EarningWhereUniqueInput
  data: EarningUpdateWithoutBalanceDataInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface EarningUpdateWithoutBalanceDataInput {
  title?: String
  description?: String
  note?: String
  count?: Float
}

export interface EarningSubscriptionWhereInput {
  AND?: EarningSubscriptionWhereInput[] | EarningSubscriptionWhereInput
  OR?: EarningSubscriptionWhereInput[] | EarningSubscriptionWhereInput
  NOT?: EarningSubscriptionWhereInput[] | EarningSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EarningWhereInput
}

export interface EarningUpsertWithWhereUniqueWithoutBalanceInput {
  where: EarningWhereUniqueInput
  update: EarningUpdateWithoutBalanceDataInput
  create: EarningCreateWithoutBalanceInput
}

export interface BalanceWhereUniqueInput {
  id?: ID_Input
}

export interface ExpenseUpsertWithWhereUniqueWithoutBalanceInput {
  where: ExpenseWhereUniqueInput
  update: ExpenseUpdateWithoutBalanceDataInput
  create: ExpenseCreateWithoutBalanceInput
}

export interface ExpenseUpdateWithoutBalanceDataInput {
  title?: String
  description?: String
  note?: String
  count?: Float
}

export interface ExpenseUpdateWithWhereUniqueWithoutBalanceInput {
  where: ExpenseWhereUniqueInput
  data: ExpenseUpdateWithoutBalanceDataInput
}

export interface ExpenseUpdateManyWithoutBalanceInput {
  create?: ExpenseCreateWithoutBalanceInput[] | ExpenseCreateWithoutBalanceInput
  connect?: ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput
  disconnect?: ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput
  delete?: ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput
  update?: ExpenseUpdateWithWhereUniqueWithoutBalanceInput[] | ExpenseUpdateWithWhereUniqueWithoutBalanceInput
  upsert?: ExpenseUpsertWithWhereUniqueWithoutBalanceInput[] | ExpenseUpsertWithWhereUniqueWithoutBalanceInput
}

export interface BalanceUpsertWithoutTotalInput {
  update: BalanceUpdateWithoutTotalDataInput
  create: BalanceCreateWithoutTotalInput
}

export interface BalanceUpdateInput {
  current?: CurrentBalanceUpdateOneWithoutBalanceInput
  total?: TotalBalanceUpdateOneWithoutBalanceInput
  earnings?: EarningUpdateManyWithoutBalanceInput
  outgoings?: ExpenseUpdateManyWithoutBalanceInput
  owner?: UserUpdateOneWithoutBalanceInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface BalanceUpdateWithoutCurrentDataInput {
  total?: TotalBalanceUpdateOneWithoutBalanceInput
  earnings?: EarningUpdateManyWithoutBalanceInput
  outgoings?: ExpenseUpdateManyWithoutBalanceInput
  owner?: UserUpdateOneWithoutBalanceInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface BalancePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface EarningPreviousValues {
  id: ID_Output
  title: String
  description: String
  note?: String
  count: Float
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

export interface BalanceSubscriptionPayload {
  mutation: MutationType
  node?: Balance
  updatedFields?: String[]
  previousValues?: BalancePreviousValues
}

/*
 * An edge in a connection.

 */
export interface BalanceEdge {
  node: Balance
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  posts?: Post[]
  balance?: Balance
}

export interface AggregateExpense {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * A connection to a list of items.

 */
export interface ExpenseConnection {
  pageInfo: PageInfo
  edges: ExpenseEdge[]
  aggregate: AggregateExpense
}

export interface ExpensePreviousValues {
  id: ID_Output
  title: String
  description: String
  note?: String
  count: Float
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface EarningEdge {
  node: Earning
  cursor: String
}

export interface Expense extends Node {
  id: ID_Output
  title: String
  description: String
  note?: String
  count: Float
  createdAt: DateTime
  updatedAt: DateTime
  balance?: Balance
}

export interface AggregateTotalBalance {
  count: Int
}

export interface ExpenseSubscriptionPayload {
  mutation: MutationType
  node?: Expense
  updatedFields?: String[]
  previousValues?: ExpensePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface TotalBalanceConnection {
  pageInfo: PageInfo
  edges: TotalBalanceEdge[]
  aggregate: AggregateTotalBalance
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CurrentBalanceEdge {
  node: CurrentBalance
  cursor: String
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

export interface AggregateUser {
  count: Int
}

export interface Earning extends Node {
  id: ID_Output
  title: String
  description: String
  note?: String
  count: Float
  createdAt: DateTime
  updatedAt: DateTime
  balance?: Balance
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

/*
 * A connection to a list of items.

 */
export interface BalanceConnection {
  pageInfo: PageInfo
  edges: BalanceEdge[]
  aggregate: AggregateBalance
}

export interface Balance extends Node {
  id: ID_Output
  current: CurrentBalance
  total: TotalBalance
  earnings?: Earning[]
  outgoings?: Expense[]
  createdAt: DateTime
  updatedAt: DateTime
  owner: User
}

export interface AggregateEarning {
  count: Int
}

export interface CurrentBalanceSubscriptionPayload {
  mutation: MutationType
  node?: CurrentBalance
  updatedFields?: String[]
  previousValues?: CurrentBalancePreviousValues
}

/*
 * An edge in a connection.

 */
export interface TotalBalanceEdge {
  node: TotalBalance
  cursor: String
}

export interface CurrentBalancePreviousValues {
  id: ID_Output
  count: Float
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface CurrentBalanceConnection {
  pageInfo: PageInfo
  edges: CurrentBalanceEdge[]
  aggregate: AggregateCurrentBalance
}

export interface TotalBalance extends Node {
  id: ID_Output
  count: Float
  createdAt: DateTime
  updatedAt: DateTime
  balance?: Balance
}

export interface AggregatePost {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ExpenseEdge {
  node: Expense
  cursor: String
}

export interface EarningSubscriptionPayload {
  mutation: MutationType
  node?: Earning
  updatedFields?: String[]
  previousValues?: EarningPreviousValues
}

export interface CurrentBalance extends Node {
  id: ID_Output
  count: Float
  createdAt: DateTime
  updatedAt: DateTime
  balance?: Balance
}

export interface TotalBalancePreviousValues {
  id: ID_Output
  count: Float
  createdAt: DateTime
  updatedAt: DateTime
}

export interface TotalBalanceSubscriptionPayload {
  mutation: MutationType
  node?: TotalBalance
  updatedFields?: String[]
  previousValues?: TotalBalancePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EarningConnection {
  pageInfo: PageInfo
  edges: EarningEdge[]
  aggregate: AggregateEarning
}

export interface AggregateBalance {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateCurrentBalance {
  count: Int
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number