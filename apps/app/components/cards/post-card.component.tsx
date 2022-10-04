import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { apolloClient } from 'apps/app/client';
import { useSayHello_QueryQuery } from '@lodictio/graphql';

export function PostCardComponent() {
  const { data } = useSayHello_QueryQuery({
    variables: {
      name: 'John Doe',
    },
    client: apolloClient,
  });
  return (
    <Card sx={{ minWidth: 320, maxWidth: 384, marginTop: 2 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">K</Avatar>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      ></CardHeader>
      <Image
        src="/images/maps.png"
        alt="maps"
        width="384px"
        height="180px"
        sizes="(max-width: 384px) 100vw, 384px"
      />
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam
        illo beatae, exercitationem hic quia magni eaque totam reiciendis
        officiis?
        <p>{data?.sayHello}</p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
