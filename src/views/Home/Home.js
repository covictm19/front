import React from 'react'
import { Flex, Box, Button, Heading, Image } from 'rebass'

import Grid from '../../components/presentational/Grid/Grid'

const Home = () => {
    return (
        <main>
            <HomeCTA />
            <HomePhotos />
        </main>
    )
}

const HomeCTA = () => {
    return (
        <Box as='section' width={[1, 1/1.25]} sx={{
            maxWidth: 'wide',
            mx: 'auto',
            px: 4,
        }}>
            <Flex sx={{
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
                <Heading
                    as='h1'
                    fontSize={[6, 8]}
                    maxWidth={['100%', '40pc']}
                >
                    Lorem ipsum dolor sit amet
                </Heading>

                <Box my={3} />

                <Box>
                    <Button mr={3}>Sei lá</Button>
                    <Button variant='outline'>Algum texto CTA</Button>
                </Box>
            </Flex>
        </Box>
    )
}

const HomePhotos = () => {

    return (
        <Grid sx={{
            maxWidth: 'compact',
            margin: '0 auto'
        }}>
            {
                [1, 2, 3, 4, 5, 6].map(() => (
                    <Image
                        maxWidth='100%'
                        src='https://source.unsplash.com/random'
                    />
                ))
            }
        </Grid>
    )
}

export default Home