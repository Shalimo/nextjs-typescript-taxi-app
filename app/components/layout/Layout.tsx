/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from 'next/head'
import Script from 'next/script'
import {FC, PropsWithChildren, useEffect, useState} from 'react'
import Spinner from '../ui/Spinner/Spinner'

const Layout:FC<PropsWithChildren<{title?: string}>> = ({children, title}) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true)

        const timeoutID = setTimeout(() => {setLoading(false)}, 2000)

        return () => {
            clearTimeout(timeoutID)
        }
    }, [])

  return (
    <div>
        <Head>
            <title>{title} | Taxi App</title>
            <meta
                name="description"
                content="Taxi App"
            />
        </Head>
        <Script strategy='beforeInteractive' src={`https://maps.googleapis.com/maps/api/js?key=${String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY)}&libraries=places`}/>
            <div>
                {loading ? <Spinner/> : children}
            </div>
    </div>
  )
}

export default Layout