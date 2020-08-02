import React from 'react'
import {useFetch} from '../hooks/useFetch'

function Hooks() {
    const {data, loading } = useFetch('http://numbersapi.com/42/trivia')
    return (
        <div style={{textAlign: 'center'}}>
            Testing hooks
            <br />
            {!loading ? data : 'loading...'}
        </div>
    )
}

export default Hooks
