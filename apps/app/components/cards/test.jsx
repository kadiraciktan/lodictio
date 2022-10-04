import { useSayHello_QueryQuery } from '@lodictio/graphql';
import React from 'react';
import { apolloClient } from 'apps/app/client';

export function PostCardComponent() {
  const { data } = useSayHello_QueryQuery({
    variables: {
      name: 'John Doe',
    },
    client: apolloClient,
  });
  return (
    <div>
      <p>{data?.sayHello}</p>
    </div>
  );
}
