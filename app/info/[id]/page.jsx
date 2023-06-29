"use client";
import React from "react";
import Link from "next/link";

async function getData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}

async function page({ params }) {
  const data = await getData(params.id);
  console.log(data);
  return (
    <div className="detail"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        color: "black",
        fontSize: "30px",
      }}
    >
      <h1 style={{ color: "black", fontSize: "50px", color: "red" }}>
        Elegiste
      </h1>
      <h1 style={{ fontSize: "60px" }}>Nombre: {data.name}</h1>
      <p>Experiencia base: {data.base_experience}</p>
      <p>Tipo: {data.types[0].type.name}</p>
      <div>
        <img src={data.sprites.front_default} alt="Front" />
        <img src={data.sprites.back_default} alt="Back" />
      </div>
      <Link
        href={`/`}
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
          padding: "8px",
          border: "2px red solid",
        }}
      >
        Inicio
      </Link>
    </div>
  );
}
export default page;