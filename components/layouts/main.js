import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Haixu's homepage" />
        <meta name="author" content="Haixu Wang" />
        <meta property="og:site_name" content="Haixu Wang" />
        <meta name="og:title" content="Haixu Wang" />
        <meta property="og:type" content="website" />
        <title>Haixu Wang - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
