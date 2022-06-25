import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'



import Rpic from '../public/images/R.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        
          <GridItem title='PCODE: R package' thumbnail={Rpic} href='https://pcode.shinyapps.io/pcode/'>
            
          </GridItem>
          
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
