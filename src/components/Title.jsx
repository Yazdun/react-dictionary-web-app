import React, { useEffect, useRef, useState } from 'react'
import { HiSpeakerWave } from 'react-icons/hi2'
import cn from 'classnames'

export const Title = ({ data }) => {
  const audio = data[0].phonetics.find(item => item.audio.length > 1)
  const audioRef = useRef(null)
  const [timer, setTimer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    audioRef.current = new Audio(audio?.audio)
  }, [data])

  function playAudio() {
    clearTimeout(timer)
    audioRef.current.play()
    setIsPlaying(true)
    const newTimer = setTimeout(() => {
      setIsPlaying(false)
    }, audioRef.current.duration * 1000)
    setTimer(newTimer)
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold capitalize">{data[0].word}</h1>
        <p className="text-primary-100">
          {data[0].phonetic || data[0].phonetics[1].text}
        </p>
      </div>
      <button
        onClick={playAudio}
        className={cn(
          'w-16 h-16 bg-[#E8D0FA] transition-transform duration-300 disabled:cursor-not-allowed dark:bg-[#2D153F] rounded-full flex justify-center items-center',
          isPlaying && 'opacity-60 scale-110',
        )}
        disabled={isPlaying}
      >
        <HiSpeakerWave className="text-4xl text-primary-100" />
      </button>
    </div>
  )
}
