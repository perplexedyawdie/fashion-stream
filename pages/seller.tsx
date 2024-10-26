import React from 'react'
import dynamic from 'next/dynamic'

const VideoConf = dynamic(() => import('@/components/VidConf'), {
    ssr: false
  })

function Seller() {

    return (
        <>
            <VideoConf />
        </>
    )
}

export default Seller