import { Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

const PostGrid = ({ posts, setPosts }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts/')
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.error)
        }
        setPosts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    getPosts()
  }, [setPosts])
  return (
    <Grid templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)"
    }}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Grid>
  )
}

export default PostGrid