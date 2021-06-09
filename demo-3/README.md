## graphql-codegen + @neo4j/graphql demo

For this frontend app to work, you must be running the graphql endpoint from the [@neo4j/graphql demo](../demo-2)
Then, run

```console
yarn
yarn start
```

to start the app. If you're interested in the codegen, you can run

```console
yarn codegen
```

and have a look at [types.ts](./src/codegen/types.ts) and [hooks.tsx](./src/codegen/hooks.tsx) to see what is generated from our simple schema.

If you're still curious about codegen and how the hooks are generated, have a look at the input file [operations.graphql](./src/codegen/operations.graphql)
