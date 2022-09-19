import React, { useEffect, useState } from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import axios from "axios"

import { Game } from "../../App"
import { GameBanner } from "../GameBanner"

export default function GameBannerTest() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        axios('http://localhost:3333/games')
            .then(response => {
                setGames(response.data)
            })
    }, [])
    
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 7,
            spacing: 20,
        }
    })

    return (
        <div ref={sliderRef} className="keen-slider mt-10 flex flex-row">
            {games.map(game => {
                return (
                    <div className="keen-slider__slide">
                        <GameBanner title='App' bannerURL='https://static-cdn.jtvnw.net/ttv-boxart/502732_IGDB-285x380.jpg'
                            key={game.id} adsCounnt={3} />
                    </div>
                )
            })}
        </div>
    )
}
