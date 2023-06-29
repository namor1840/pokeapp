"use client";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Link from "next/link";

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function CardPokemon({ url }) {
    const [isLoading, setIsLoading] = useState(false);
    const [dataPokemon, setDataPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getData(url);
                setDataPokemon(data);
            } catch (error) {
                console.log(error);
                // Handle error state or display an error message
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000); // 1000 milliseconds (1 second) delay
            }
        };

        fetchData();
    }, [url]);

    if (isLoading) {
        return <CircularProgress />;
    }

    if (!dataPokemon) {
        return <div>Cargando...</div>;
    }

    const imagePokemon = dataPokemon.sprites.front_default;

    return (
        <Link href={`info/${dataPokemon.id}`}>
            <div className="cardPokemon cjas">
                <div>
                    <img src={imagePokemon} alt="Pokemon" />
                </div>
                <h1>{dataPokemon.name}</h1>
                <p>{dataPokemon.id}</p>
            </div>
        </Link>
    );
}

export default CardPokemon;