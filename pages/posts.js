import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import animatenet from '../public/images/posts/animate_static.png'
import spiketrain from '../public/images/posts/allspiketrain.png'


const Posts = () => (
  
  <Layout title="Posts">
    <Container >
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <SimpleGrid columns={[2, 2, 2]} gap={5}>
        <Section>
          <PostGridItem id="Directednetwork" thumbnail={spiketrain}>
           Directed network of neurons based on spike sequence data
          </PostGridItem>
        </Section>

          <Section>
          <PostGridItem id="DNE" thumbnail={animatenet}>
             Dynamic network embedding
          </PostGridItem>
        </Section>
      </SimpleGrid>


    </Container>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
