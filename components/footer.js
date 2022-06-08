import { Box, Text} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Takuya Matsuyama. https://www.craftz.dog/. All Rights Reserved.
      <Text>
        Windmill Artwork: _Alexandr (https://sketchfab.com/a_l_e_x_a_n_d_e_r)
      </Text> 
    </Box>
  )
}

export default Footer
