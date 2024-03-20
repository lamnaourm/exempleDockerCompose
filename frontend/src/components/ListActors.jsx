import React, { useEffect, useState } from 'react'

export default function ListActors() {

    const [actors, setActors] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:5000/actor/all");
            const users = await response.json();
            return users;
        };
        getData().then((actors) => setActors(actors));
    }, [])

    return (
        <div>
            {
                actors.map((item) => (
                <li>{item.name}</li>
            ))
            }
        </div>
    )
}
