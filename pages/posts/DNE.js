import {
    Container,
    Badge,
    List,
    ListItem,
    Image,
    Stack
   
  } from '@chakra-ui/react'
  import { Title,  Meta } from '../../components/post'
  import Layout from '../../components/layouts/article'


  const Post = () => (

      <Layout title="Directed networks of neurons">
        
          <Container>
  
              <Title>
                  Dynamic network embedding <Badge> 2021 Feb </Badge>
              </Title>

              <List ml={3} my={1}>
                  <ListItem>
                      <Meta>Network embedding </Meta>
                      <Meta>Functional Data Analysis</Meta>
                      <Meta>Machine learning</Meta>
                      <Meta>Dimension reduction</Meta>
                  </ListItem>
              </List>


              <br></br>

            <Stack direction ='column'>
                
              
                 <Image src="/images/posts/animate.gif" boxsize ='200px'/>
                 <Image src="/images/posts/dne_animate.gif" boxsize ='200px'/>                       

                    </Stack>
                
          </Container>
      </Layout>
   
  
  
  )
  
  export default Post
  export { getServerSideProps } from '../../components/chakra'
  