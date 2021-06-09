export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Barber = {
  __typename?: 'Barber';
  name: Scalars['String'];
  clients: Array<Client>;
};


export type BarberClientsArgs = {
  where?: Maybe<ClientWhere>;
  options?: Maybe<ClientOptions>;
};

export type BarberClientsDeleteFieldInput = {
  where?: Maybe<ClientWhere>;
};

export type BarberClientsFieldInput = {
  create?: Maybe<Array<ClientCreateInput>>;
  connect?: Maybe<Array<ClientConnectFieldInput>>;
};

export type BarberClientsUpdateFieldInput = {
  where?: Maybe<ClientWhere>;
  update?: Maybe<ClientUpdateInput>;
  connect?: Maybe<Array<ClientConnectFieldInput>>;
  disconnect?: Maybe<Array<ClientDisconnectFieldInput>>;
  create?: Maybe<Array<ClientCreateInput>>;
  delete?: Maybe<Array<ClientDeleteFieldInput>>;
};

export type BarberConnectInput = {
  clients?: Maybe<Array<ClientConnectFieldInput>>;
};

export type BarberCreateInput = {
  name: Scalars['String'];
  clients?: Maybe<BarberClientsFieldInput>;
};

export type BarberDeleteInput = {
  clients?: Maybe<Array<BarberClientsDeleteFieldInput>>;
};

export type BarberDisconnectInput = {
  clients?: Maybe<Array<ClientDisconnectFieldInput>>;
};

export type BarberOptions = {
  /** Specify one or more BarberSort objects to sort Barbers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<BarberSort>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type BarberRelationInput = {
  clients?: Maybe<Array<ClientCreateInput>>;
};

/** Fields to sort Barbers by. The order in which sorts are applied is not guaranteed when specifying many fields in one BarberSort object. */
export type BarberSort = {
  name?: Maybe<SortDirection>;
};

export type BarberUpdateInput = {
  name?: Maybe<Scalars['String']>;
  clients?: Maybe<Array<BarberClientsUpdateFieldInput>>;
};

export type BarberWhere = {
  OR?: Maybe<Array<BarberWhere>>;
  AND?: Maybe<Array<BarberWhere>>;
  name?: Maybe<Scalars['String']>;
  name_NOT?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  clients?: Maybe<ClientWhere>;
  clients_NOT?: Maybe<ClientWhere>;
};

export type Client = {
  __typename?: 'Client';
  name: Scalars['String'];
  needsHaircut: Scalars['Boolean'];
};

export type ClientConnectFieldInput = {
  where?: Maybe<ClientWhere>;
};

export type ClientCreateInput = {
  name: Scalars['String'];
  needsHaircut: Scalars['Boolean'];
};

export type ClientDeleteFieldInput = {
  where?: Maybe<ClientWhere>;
};

export type ClientDisconnectFieldInput = {
  where?: Maybe<ClientWhere>;
};

export type ClientOptions = {
  /** Specify one or more ClientSort objects to sort Clients by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ClientSort>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

/** Fields to sort Clients by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientSort object. */
export type ClientSort = {
  name?: Maybe<SortDirection>;
  needsHaircut?: Maybe<SortDirection>;
};

export type ClientUpdateInput = {
  name?: Maybe<Scalars['String']>;
  needsHaircut?: Maybe<Scalars['Boolean']>;
};

export type ClientWhere = {
  OR?: Maybe<Array<ClientWhere>>;
  AND?: Maybe<Array<ClientWhere>>;
  name?: Maybe<Scalars['String']>;
  name_NOT?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  needsHaircut?: Maybe<Scalars['Boolean']>;
  needsHaircut_NOT?: Maybe<Scalars['Boolean']>;
};

export type CreateBarbersMutationResponse = {
  __typename?: 'CreateBarbersMutationResponse';
  barbers: Array<Barber>;
};

export type CreateClientsMutationResponse = {
  __typename?: 'CreateClientsMutationResponse';
  clients: Array<Client>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBarbers: CreateBarbersMutationResponse;
  deleteBarbers: DeleteInfo;
  updateBarbers: UpdateBarbersMutationResponse;
  createClients: CreateClientsMutationResponse;
  deleteClients: DeleteInfo;
  updateClients: UpdateClientsMutationResponse;
};


export type MutationCreateBarbersArgs = {
  input: Array<BarberCreateInput>;
};


export type MutationDeleteBarbersArgs = {
  where?: Maybe<BarberWhere>;
  delete?: Maybe<BarberDeleteInput>;
};


export type MutationUpdateBarbersArgs = {
  where?: Maybe<BarberWhere>;
  update?: Maybe<BarberUpdateInput>;
  connect?: Maybe<BarberConnectInput>;
  disconnect?: Maybe<BarberDisconnectInput>;
  create?: Maybe<BarberRelationInput>;
  delete?: Maybe<BarberDeleteInput>;
};


export type MutationCreateClientsArgs = {
  input: Array<ClientCreateInput>;
};


export type MutationDeleteClientsArgs = {
  where?: Maybe<ClientWhere>;
};


export type MutationUpdateClientsArgs = {
  where?: Maybe<ClientWhere>;
  update?: Maybe<ClientUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  barbers: Array<Maybe<Barber>>;
  clients: Array<Maybe<Client>>;
};


export type QueryBarbersArgs = {
  where?: Maybe<BarberWhere>;
  options?: Maybe<BarberOptions>;
};


export type QueryClientsArgs = {
  where?: Maybe<ClientWhere>;
  options?: Maybe<ClientOptions>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type UpdateBarbersMutationResponse = {
  __typename?: 'UpdateBarbersMutationResponse';
  barbers: Array<Barber>;
};

export type UpdateClientsMutationResponse = {
  __typename?: 'UpdateClientsMutationResponse';
  clients: Array<Client>;
};

export type CreateBarberMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateBarberMutation = (
  { __typename?: 'Mutation' }
  & { createBarbers: (
    { __typename?: 'CreateBarbersMutationResponse' }
    & { barbers: Array<(
      { __typename?: 'Barber' }
      & Pick<Barber, 'name'>
    )> }
  ) }
);

export type CreateClientMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateClientMutation = (
  { __typename?: 'Mutation' }
  & { createClients: (
    { __typename?: 'CreateClientsMutationResponse' }
    & { clients: Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'name' | 'needsHaircut'>
    )> }
  ) }
);

export type GetBarbersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBarbersQuery = (
  { __typename?: 'Query' }
  & { barbers: Array<Maybe<(
    { __typename?: 'Barber' }
    & Pick<Barber, 'name'>
    & { clients: Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'name' | 'needsHaircut'>
    )> }
  )>> }
);

export type AddClientToBarberMutationVariables = Exact<{
  barberName: Scalars['String'];
  clientName: Scalars['String'];
}>;


export type AddClientToBarberMutation = (
  { __typename?: 'Mutation' }
  & { updateBarbers: (
    { __typename?: 'UpdateBarbersMutationResponse' }
    & { barbers: Array<(
      { __typename?: 'Barber' }
      & Pick<Barber, 'name'>
    )> }
  ) }
);
