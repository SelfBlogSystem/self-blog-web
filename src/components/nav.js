import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import '../styles/components/editor.scss'
function Nav(props) {
    const title = props.title
    console.log('Nav',title)
    return (
        <div className="nav">
            <div className="title">{title}</div>
        </div>
    )
}
export default Nav
