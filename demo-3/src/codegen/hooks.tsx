import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export const CreateBarberDocument = gql`
    mutation CreateBarber($name: String!) {
  createBarbers(input: [{name: $name}]) {
    barbers {
      name
    }
  }
}
    `;
export type CreateBarberMutationFn = Apollo.MutationFunction<Types.CreateBarberMutation, Types.CreateBarberMutationVariables>;

/**
 * __useCreateBarberMutation__
 *
 * To run a mutation, you first call `useCreateBarberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBarberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBarberMutation, { data, loading, error }] = useCreateBarberMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateBarberMutation(baseOptions?: Apollo.MutationHookOptions<Types.CreateBarberMutation, Types.CreateBarberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.CreateBarberMutation, Types.CreateBarberMutationVariables>(CreateBarberDocument, options);
      }
export type CreateBarberMutationHookResult = ReturnType<typeof useCreateBarberMutation>;
export type CreateBarberMutationResult = Apollo.MutationResult<Types.CreateBarberMutation>;
export type CreateBarberMutationOptions = Apollo.BaseMutationOptions<Types.CreateBarberMutation, Types.CreateBarberMutationVariables>;
export const CreateClientDocument = gql`
    mutation CreateClient($name: String!) {
  createClients(input: [{name: $name, needsHaircut: true}]) {
    clients {
      name
      needsHaircut
    }
  }
}
    `;
export type CreateClientMutationFn = Apollo.MutationFunction<Types.CreateClientMutation, Types.CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: Apollo.MutationHookOptions<Types.CreateClientMutation, Types.CreateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.CreateClientMutation, Types.CreateClientMutationVariables>(CreateClientDocument, options);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = Apollo.MutationResult<Types.CreateClientMutation>;
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<Types.CreateClientMutation, Types.CreateClientMutationVariables>;
export const GetBarbersDocument = gql`
    query GetBarbers {
  barbers {
    name
    clients {
      name
      needsHaircut
    }
  }
}
    `;

/**
 * __useGetBarbersQuery__
 *
 * To run a query within a React component, call `useGetBarbersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBarbersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBarbersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBarbersQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetBarbersQuery, Types.GetBarbersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetBarbersQuery, Types.GetBarbersQueryVariables>(GetBarbersDocument, options);
      }
export function useGetBarbersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetBarbersQuery, Types.GetBarbersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetBarbersQuery, Types.GetBarbersQueryVariables>(GetBarbersDocument, options);
        }
export type GetBarbersQueryHookResult = ReturnType<typeof useGetBarbersQuery>;
export type GetBarbersLazyQueryHookResult = ReturnType<typeof useGetBarbersLazyQuery>;
export type GetBarbersQueryResult = Apollo.QueryResult<Types.GetBarbersQuery, Types.GetBarbersQueryVariables>;
export const AddClientToBarberDocument = gql`
    mutation AddClientToBarber($barberName: String!, $clientName: String!) {
  updateBarbers(
    where: {name: $barberName}
    connect: {clients: [{where: {name: $clientName}}]}
  ) {
    barbers {
      name
    }
  }
}
    `;
export type AddClientToBarberMutationFn = Apollo.MutationFunction<Types.AddClientToBarberMutation, Types.AddClientToBarberMutationVariables>;

/**
 * __useAddClientToBarberMutation__
 *
 * To run a mutation, you first call `useAddClientToBarberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddClientToBarberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addClientToBarberMutation, { data, loading, error }] = useAddClientToBarberMutation({
 *   variables: {
 *      barberName: // value for 'barberName'
 *      clientName: // value for 'clientName'
 *   },
 * });
 */
export function useAddClientToBarberMutation(baseOptions?: Apollo.MutationHookOptions<Types.AddClientToBarberMutation, Types.AddClientToBarberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.AddClientToBarberMutation, Types.AddClientToBarberMutationVariables>(AddClientToBarberDocument, options);
      }
export type AddClientToBarberMutationHookResult = ReturnType<typeof useAddClientToBarberMutation>;
export type AddClientToBarberMutationResult = Apollo.MutationResult<Types.AddClientToBarberMutation>;
export type AddClientToBarberMutationOptions = Apollo.BaseMutationOptions<Types.AddClientToBarberMutation, Types.AddClientToBarberMutationVariables>;