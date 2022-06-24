import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, PostImage, Meta } from '../../components/post'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Post = () => (
      <Layout title="Directed networks of neurons">
          <Container>
              <Title>
                  Directed networks of neurons <Badge> 2020 May </Badge>
              </Title>

              Key words:  
  
              <List ml={3} my={0}>
                  <ListItem>
                      <Meta>Spike sequences </Meta>
                  </ListItem>
              </List>

              
              <P>
                  Introduction or summary here 
              </P>
              
              <PostImage src="/images/posts/allspiketrain.png" alt="Allspiketrain" />
  

          </Container>
      </Layout>
   
  
  
  )
  
  export default Post
  export { getServerSideProps } from '../../components/chakra'
  