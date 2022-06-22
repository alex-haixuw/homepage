import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
const Posts = () => (
  
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section>
          <PostGridItem id="inkdrop" title="Inkdddrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </PostGridItem>
        </Section>
      </SimpleGrid>


    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
