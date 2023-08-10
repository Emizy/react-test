import React from 'react'
import "./Header.css"

export default function Header({
                                   title
                               }) {
    return (
        <>
            <h1 className="header">{title}</h1>
            {/*<h2 title={'Header'} className="header" data-testid={'header-2'}>Cats</h2>*/}
        </>
    )
}
