import React from 'react';
import { Heading} from '@chakra-ui/react'

const myComponent = ()=>{
return (


 <div>
<Heading as="h3" fontSize={20} mb={4}>
        CV
      </Heading>
    <embed
            style={{ width: "100%", height: "1000px" }}
            src={"https://drive.google.com/file/d/1B17slZPCBhqR6TPSP9CzB8-tJva6j-JM/view?usp=sharing"}
            //type='application/pdf'
            title='CV'
          />
</div>

   


)
}
export default myComponent



