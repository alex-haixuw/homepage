import React from 'react';
import { Heading} from '@chakra-ui/react'

const myComponent = ()=>{
return (


 <div>
<Heading as="h3" fontSize={20} mb={4}>
        Curriculum Vitae
      </Heading>



      <iframe src="https://docs.google.com/gview?url=https://github.com/alex-haixuw/homepage/raw/master/public/haixuwang_cv.pdf&embedded=true" frameborder="0" height="1100" width="850"></iframe>




</div>

   


)
}
export default myComponent
export { getServerSideProps } from '../components/chakra'



