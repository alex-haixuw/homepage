import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import spiketrain from '../public/images/posts/allspiketrain.png'

const Posts = () => (
  
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section>
          <PostGridItem id="Directednetwork" title="Directednetwork" thumbnail={spiketrain}>
            Network of Neurons
          </PostGridItem>
        </Section>
      </SimpleGrid>


    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
