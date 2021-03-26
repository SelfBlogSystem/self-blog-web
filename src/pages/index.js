import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Nav from '../components/nav'
import Meta from '../../gatsby-config'

function IndexPage(props) {
    const siteTitle = Meta.siteMetadata.title

    return (
        <Layout location={props.location} title={siteTitle}>
            <Nav title={siteTitle} />
            <SEO
                title="Home"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
        </Layout>
    )
}

export default IndexPage
