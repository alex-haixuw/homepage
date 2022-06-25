import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
    Image,
    Stack
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, PostImage, Meta } from '../../components/post'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'


import MathJax from 'react-mathjax'

  
  const tex = `p(s_{j+1} - s_{j} = w_{j}| s_{j}, μ(t)) = μ(s_{j+1})exp[-∫_{s_j}^{s_j+1}μ(t)dt]`
  const tex2 =`dμ_{g}(t)/dt = Σ_{l=1}^{12}f_{gl}(μ_{l}(t))`

  const Post = () => (

      <Layout title="Directed networks of neurons">
        
          <Container>
  
              <Title>
                  Directed networks of neurons <Badge> 2020 May </Badge>
              </Title>

              <List ml={3} my={1}>
                  <ListItem>
                      <Meta>Spike sequences </Meta>
                      <Meta>Point Processes</Meta>
                      <Meta>Functional Data Analysis</Meta>
                      <Meta>Network Analysis</Meta>
                      <Meta>Variable Selection</Meta>
                  </ListItem>
              </List>
              <br></br>
              <h1><b>Introduction</b></h1>
              <p>
                This work studies acitivities of neurons on both individual and group level. We aim to establish and analyze a time-varying network. The central objective is how to infer a dynamic network on the bottom from multiple point processes on the top in the following figure.
              </p>

              <br></br>
              <Stack direction ='column'>
                <Image src="/images/posts/allspiketrain.png" boxsize ='200px'/>
              
                 <Image src="/images/posts/animate.gif" boxsize ='200px'/>
             
              </Stack>
              <br></br>

            <h1><b>Conditional intensity function</b></h1>

            <p>
            First, we can convert a point process into a real-valued function for further analysis.
             Let <MathJax.Provider>{' '}
          <MathJax.Node inline formula={'μ(t)'} /></MathJax.Provider> be the conditional intensity function of a spike sequence at time t, such that
           <MathJax.Provider>
          <MathJax.Node formula={tex} />
            </MathJax.Provider>
            where <MathJax.Provider>{' '}
          <MathJax.Node inline formula={'s_j'}/></MathJax.Provider> is the time of last spike and <MathJax.Provider>{' '}
          <MathJax.Node inline formula={'s_+1'}/></MathJax.Provider> is the time of next one. After some computations, we can obtain
          <br></br>
          <br></br>
                        <Stack direction ='column'>
                <Image src="/images/posts/intensity_1.png" boxsize ='200px'/>
              
                 <Image src="/images/posts/intensity_2.png" boxsize ='200px'/>
             
              </Stack>
            </p>
            <br></br>
            <h1><b>Establish a network and inferences</b></h1>


<p>
A time-varying directed network is then established based on intensity functions <MathJax.Provider>{' '}
          <MathJax.Node inline formula={'μ_{1}(t),..., μ_{12}(t)'}/></MathJax.Provider>given a group of 12 neurons. The gist is to consider that the changes in spiking activities of $g$-th neuron depends on others in the group through

           <MathJax.Provider>
          <MathJax.Node formula={tex2} />
            </MathJax.Provider>

where we can consider <MathJax.Provider>{' '}
          <MathJax.Node inline formula={'[f_{gl}]_{g,l =1}^{12}'}/></MathJax.Provider> are the regulation effects of l-th neuron on g-gh. A dynamic network can be inferred by using 12 models in the above form so that we use regulation effects to illustrate the directed connectivity between neurons. If <MathJax.Provider>{' '}
          <MathJax.Node inline formula={'f_{gl}(μ_{l}(t))'}/></MathJax.Provider> is large, then l-th neuron has strong effects on g-th neuron at time t, for g, l = 1,..., 12. By assuming <MathJax.Provider>{' '}
          <MathJax.Node inline formula={'[f_{gl}]_{g,l =1}^{12}'}/></MathJax.Provider> are sparse functions, either<MathJax.Provider>{' '}
          <MathJax.Node inline formula={'f_{gl} ≡ 0'}/></MathJax.Provider> or <MathJax.Provider>{' '}
          <MathJax.Node inline formula={'f_{gl}(μ_{l}(t)) = 0'}/></MathJax.Provider> for some time t, we can select significant connections across neurons in the group. The below figure is the regulation functions on one of the neurons.

</p>      
<br></br>
  <Stack direction ='column'>
    <Image src="/images/posts/neuron9_reg.png"/>
</Stack>

                
          </Container>
      </Layout>
   
  
  
  )
  
  export default Post
  export { getServerSideProps } from '../../components/chakra'
  