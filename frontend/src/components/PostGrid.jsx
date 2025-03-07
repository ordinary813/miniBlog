import { Grid } from '@chakra-ui/react'
import React from 'react'

const PostGrid = () => {
  return (
    <Grid templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)"
    }}>

    </Grid>
  )
}

export default PostGrid