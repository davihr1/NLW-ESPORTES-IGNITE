import React, { useEffect, useState } from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import axios from "axios"

import { Game } from "../../App"
import { GameBanner } from "../GameBanner"

export default function GameBannerSlide() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        axios('http://localhost:3333/games')
            .then(response => {
                setGames(response.data)
            })
    }, [])

    const [sliderRef] = useKeenSlider({
        mode: "snap",
        slides: {
            origin: "center",
            perView: 4,
            spacing: 4,
        }
    })

    return (
        <div ref={sliderRef} className="keen-slider mt-10">
            {games.map(game => {
                return (
                    <div className="keen-slider__slide">
                        <GameBanner title={game.title} bannerURL={game.bannerURL}
                            key={game.id} adsCounnt={game._count.ads} />
                    </div>
                )
            })}
        </div>
    )
}
