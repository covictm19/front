/** @jsx jsx */
import { jsx } from '@emotion/core'

import Masonry from 'react-masonry-css'
import { Box } from 'rebass'


const Grid = props => {

    const {
        sx,
        children
    } = props

    return (
        <Box>
            <Masonry css={sx} breakpointCols={3}>
                { children }
            </Masonry>
        </Box>
    )
}

export default Grid