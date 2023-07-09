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
        <u>Wang, H.</u> and Cao, J., 2023, &quot;Nonlinear Prediction for Functional Time Series&quot;, accepted by <i>Environmentrics</i>.
      </Text>
      </Section>

      <Section>
      <Text>
        <u>Wang, H.</u> and Cao, J., 2022, &quot;pCODE: Estimating Parameters of ODE Models&quot;, accepted by <i>The R Journal</i>.
      </Text>
      </Section>

      <Section>
      <Text>
      <u>Wang, H.</u> and Cao, J., 2023, &quot;Functional Nonlinear Learning&quot;, accepted by <i>Journal of Computational and Graphical Statistics</i>.
      
      </Text>
      </Section>
      
      
      
      <Section>
      <Text>
        <u>Wang, H.</u> and Cao, J., 2021, &quot;Functional Principal Component Analysis for Multiple Variables on Different Riemannian Manifolds&quot;, under invited revision for <i>Journal of Agricultural, Biological and Environmental Statistics</i>.
      </Text>
      </Section>


      <Section>
      <Text>
        <u>Wang, H.</u> and Cao, J., 2020, &quot;Estimating Time-varying Directed Neural Networks&quot;, <i>Statistics and Computing</i>, <b>20</b>, 1209-1220.
      </Text>
      </Section>

      <Section>
        <Text>
        Ithurbide, M., <u>Wang, H.</u>, Fassier, T., Li, Z., Pires, J., Larsen, T., Cao, J., Rupp, R., and Friggens, N., 2022, &quot; Multivariate analysis of milk metabolite measures shows potential for deriving new resilience phenotypes&quot;, under invited revision for <i>Journal of Dairy Science</i>.
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
        <u>Wang, H.</u>, &quot;Functional Nonlinear Learning&quot;, 2022 International Workshop on Complex Functional Data Analysis, Shanghai, China, 2022.
      </Text>
      </Section>

       <Section delay={0.3}>
      <Text>
      <u>Wang, H.</u>, &quot;Functional Nonlinear Learning&quot;, 2022 Annual Meeting of the Statistical Society of Canada, Online, 2022.
      </Text>
      </Section>

      <Section delay={0.3}>
      <Text>
      <u>Wang, H.</u>, &quot;Functional Nonlinear Learning&quot;, 2021 Canada Statistical Science Institute showcase, Online, 2021.
      </Text>
      </Section>

      <Section delay={0.3}>
      <Text>
      <u>Wang, H.</u>, &quot;Estimating Time-varying Directed Neural Networks&quot;, 2019 International Chinese Statistical Association conference, Tianjin, China, 2019.
      </Text>
      </Section >


      </SimpleGrid>

    </Container>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
