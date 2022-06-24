import { Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = () => (
  <Layout title="Publications">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <Section>
      <Text>
        <u>Wang, H.</u> and Cao, J., 2022, "Nonlinear Prediction for Functional Time Series", submitted to <i>Enviromentrics</i>.
      </Text>
      </Section>

      <Section>
      <Text>
        <u>Wang, H.</u> and Cao, J., 2022, "pCODE: Estimating Parameters of ODE Models", submitted to <i>The R Journal</i>.
      </Text>
      </Section>

      <Section>
      <Text>
      <u>Wang, H.</u> and Cao, J., 2021, "Functional Nonlinear Learning", submitted to <i>Journal of Computational and Graphical Statistics</i>.
      
      </Text>
      </Section>
      
      
      
      <Section>
      <Text>
        <u>Wang, H.</u> and Cao, J., 2021, "Functional Principal Component Analysis for Multiple Variables on Different Riemannian Manifolds", submitted to <i>Journal of Agricultural, Biological and Environmental Statistics</i>.
      </Text>
      </Section>

      <Section>
      <Text>
      <u>Wang, H.</u> and Cao, J., 2020, "Dynamic Network Embedding: an Interpolation Approach", submitted to <i>Knowledge Discovery and Data Mining 2020 conference</i>.
      </Text>
      </Section>

      <Section>
      <Text>
        <u>Wang, H.</u> and Cao, J., 2020, "Estiamting Time-varying Directed Neural Networks", <i>Statistics and Computing</i>, <b>20</b>, 1209-1220.
      </Text>
      </Section>



      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Conferences/Talks
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 1]}>


       <Section delay={0.3}>
      <Text>
        <u>Wang, H.</u>, "Functional Nonlinear Learning", 2022 International Workshop on Complex Functional Data Analysis, Shanghai, China, 2022.
      </Text>
      </Section>

       <Section delay={0.3}>
      <Text>
      <u>Wang, H.</u>, "Functional Nonlinear Learning", 2022 Annual Meeting of the Statistical Society of Canada, Online, 2022.
      </Text>
      </Section>

      <Section delay={0.3}>
      <Text>
      <u>Wang, H.</u>, "Functional Nonlinear Learning", 2021 Canada Statistical Science Institute showcase, Online, 2021.
      </Text>
      </Section>

      <Section delay={0.3}>
      <Text>
      <u>Wang, H.</u>, "Estimating Time-varying Directed Neural Networks", 2019 International Chinese Statistical Association conference, Tianjin, China, 2019.
      </Text>
      </Section >
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
