import {
  buildClientSchema,
  getIntrospectionQuery,
  GraphQLSchema,
  OperationTypeNode,
  parse,
  print,
} from 'graphql';

import { buildOperationNodeForField } from '@graphql-tools/utils';

const getSchemaFromUrl = async (url: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery().toString(),
    }),
  });
  const { data } = await response.json();
  return buildClientSchema(data);
};

const main = async (schemaUrl: string) => {
  const schema = (await getSchemaFromUrl(schemaUrl)) as GraphQLSchema;

  const operationsDictionary = {
    query: { ...(schema.getQueryType()?.getFields() ?? {}) },
    mutation: { ...(schema.getMutationType()?.getFields() ?? {}) },
    subscription: { ...(schema.getSubscriptionType()?.getFields() ?? {}) },
  };

  let documentString = ``;
  for (const [operationKind, operationValue] of Object.entries(
    operationsDictionary
  )) {
    for (const operationName of Object.keys(operationValue)) {
      const operationAST = buildOperationNodeForField({
        schema,
        kind: operationKind as OperationTypeNode,
        field: operationName,
      });

      documentString += print(operationAST);
    }
  }

  return parse(documentString);
};

export default main;
