import { Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Publications">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <Section>
      <Text>
        "The quick brown fox  <Text as='i'>Italic</Text> jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      </Section>

      <Section>
      <Text>
        "The quick brown fox  <Text as='i'>Italic</Text> jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      </Section>

      <Section>
      <Text>
        "The quick brown fox  <Text as='i'>Italic</Text> jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      </Section>

      <Section>
      <Text>
        "The quick brown fox  <Text as='i'>Italic</Text> jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      </Section>

      <Section>
      <Text>
        "The quick brown fox  <Text as='i'>Italic</Text> jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      </Section>

      <Section>
      <Text>
        "The quick brown fox  <Text as='i'>Italic</Text> jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      </Section>



      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Conferences
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 1]}>
       <Section delay={0.3}>
      <Text>
        "The quick brown fox  <Text as='i'>Italic</Text> jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      </Section>
      <Section delay={0.3}>
      <Text>
        "The quick brown fox  <Text as='i'>Italic</Text> jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      </Section >
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
