import React from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ShowPodcastByAuthor from "components/Podcasts/showPodcastByAuthor";

const Index = () => {
    const params = useParams();
    return (
        <>
            <h1>Hola</h1>
            <ShowPodcastByAuthor author={params.id} />
        </>
    )
}

export default Index

