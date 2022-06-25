import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Flex,
  
  Button,
 
  Spacer,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoMail, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a researcher in statistics and machine learning!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Haixu (Alex) Wang
          </Heading>
          <p>Ph.D. Candidate @ Department of Statistics, Simon Fraser University</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.000"
            //borderWidth={2}
            //borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/backsquare.png" 
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          Haixu is a PhD student in the
          <NextLink href="https://www.sfu.ca/stat-actsci.html" passHref scroll={false}>
            <Link> Department of Statistics and Acturial Science</Link>
          </NextLink> at Simon Fraser University, Burnaby, B.C., Canada. He&apos;s currently working under the supervision of  <NextLink href="https://www.sfu.ca/science/stat/cao/" passHref scroll={false}>
            <Link> Dr. Jiguo Cao</Link>
          </NextLink>. Haixu has a passion for research and solving real-world problems. 

  
        </Paragraph>

        <Flex>
        <Box  my={4} >
          <NextLink href="/publications" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Publications
            </Button>
          </NextLink>
        </Box>
        <Spacer />
        <Box   my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Posts
            </Button>
          </NextLink>
        </Box>

        <Spacer />
        <Box my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Works
            </Button>
          </NextLink>
        </Box>

        <Spacer />
        <Box my={4}>
          <NextLink href="/CV" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My CV
            </Button>
          </NextLink>
        </Box>
        </Flex>

        
      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Research/work interests
        </Heading>
        <Paragraph>
        <ul>
          <li>Functional data analysis</li>
          <li>Neural networks</li>
          <li>Machine Learning</li>
          <li>Network/Graph Analaysis</li>
          <li>Bayesian theories/methods</li>
          <li>Interactive statistical/ML tools</li>
        </ul>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I enjoy
        </Heading>
        <Paragraph>
        Sports, Music, Digital Drawing, Programming, History
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Connect me on
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/alex-haixuw" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @alex-haixuw
              </Button>
            </Link>
          </ListItem>
        
        <ListItem>
        
        <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoMail />}
        >
        haixuw@sfu.ca
        </Button>
        
        </ListItem>
        
         
        </List>


      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
