import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const myComponent = ()=>{
return (


 <div>
<Heading as="h3" fontSize={20} mb={4}>
        CV
      </Heading>
    <iframe
            style={{ width: "100%", height: "1000px" }}
            src={"../public/haixuwang_cv.pdf"}
            type='application/pdf'
            title='CV'
          />
</div>

   


)
}
export default myComponent



