import {
    Container,
    Badge,
    List,
    ListItem,
    Image,
    Stack
   
  } from '@chakra-ui/react'
  import { Title,  Meta} from '../../components/post'
  import Layout from '../../components/layouts/article'
  import Paragraph from '../../components/paragraph'


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
            <h1><b>About this problem</b></h1>
            <Paragraph>
                We proposed a method to summarize a dynamic network by representing individual nodes, whose connections are dynamic, with multivariate functions. At each time, a single node is represented by a lower-dimensional vector, where the dimension is much less than the number of nodes in the network. This allows easier visualizations or analyses on the time-varying networks.
            </Paragraph>


              <br></br>
            <Container maxW ='500px'>
            <Stack direction ='column'>
                
              
                 <Image src="/images/posts/animate.gif" />
                 <Image src="/images/posts/dne_animate.gif"/>                       

            </Stack>
            </Container>
            <br></br>


            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </Container>
      </Layout>
   
  
  
  )
  
  export default Post
  export { getServerSideProps } from '../../components/chakra'
  