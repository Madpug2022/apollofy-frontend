
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';
import { ImLoop } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import "./soundPlayer.css"
import { useRef, useState } from 'react';


export const SoundPlayer = ({ ...props }) => {

    const [expandedMenu, setExpandedMenu] = useState(false)


    const playerContainer = useRef<HTMLDivElement | null>(null)

    const soundBarClickRef = useRef<HTMLDivElement | null>(null)




    const handlePlayPause = (event: any) => {
        event.stopPropagation()
        props.setIsPlaying(!props.isPlaying)

    }

    const handleClickNavigation = (event: any) => {
        if (soundBarClickRef.current && props.currentTrack.duration) {
            let soundBarWidth = soundBarClickRef.current.clientWidth
            let offset: number = event.nativeEvent.offsetX
            let offsetPercentage = offset / soundBarWidth * 100
            props.audioElement.current.currentTime = offsetPercentage / 100 * props.currentTrack.duration

        }
    }

    const handleToggleMenu = () => {
        setExpandedMenu(!expandedMenu)
    }

    const handleLoopState = () => {
        props.setloopActive(!props.loopActive)
    }



    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return formattedTime;
    }



    return (

        <>
            {!expandedMenu ?


                <div ref={playerContainer} className="player-container">
                    <div className="player-heading" onClick={handleToggleMenu}>
                        <div className="player-info">

                            <img className="track-image" src={props.currentTrack.imageUrl} alt="" />
                            <div className='track-info'>
                                <p>{props.currentTrack.name}</p>
                                <p>{props.currentTrack.artistName}</p>
                            </div>

                        </div>

                        <div id="controls-icon" className="controls-container">
                            {props.isPlaying ? <BsFillPauseCircleFill id="controls-icon" className="controls-icon" onClick={handlePlayPause} /> : <BsFillPlayCircleFill id="controls-icon" className="controls-icon" onClick={handlePlayPause} />}

                        </div>
                    </div>
                    <div className="content-bar">
                        <div className="navigation-content-bar" ref={soundBarClickRef} onClick={handleClickNavigation}>
                            <div className="progress-bar" style={{ width: `${props.currentTrack.progress}%` }}>

                            </div>
                        </div>
                    </div>

                </div>

                :

                <div ref={playerContainer} className="player-container expanded">
                    <IoIosArrowDown className="close-player-icon" onClick={handleToggleMenu} />
                    <div className="player-heading heading-expanded">
                        <img className="track-image image-big" src={props.currentTrack.imageUrl} alt="" />
                        <div className="player-info info-expanded">


                            <div className='track-info'>
                                <p className='expanded-title'>{props.currentTrack.name}</p>
                                <p className='expanded-subtitle'>{props.currentTrack.artistName}</p>
                            </div>

                        </div>


                        <div className='track-progress-bar'>
                            <div className="loop-icon-container">
                                <ImLoop onClick={handleLoopState} className={props.loopActive ? "loop-active" : ""} />
                            </div>
                            <div className="expanded-content-bar">
                                <div className="navigation-content-bar" ref={soundBarClickRef} onClick={handleClickNavigation}>
                                    <div className="progress-bar" style={{ width: `${props.currentTrack.progress}%` }}>

                                    </div>
                                </div>
                            </div>
                            <div className='numeric-progress-container'>
                                <span>{formatTime(props.currentTrack.progress / 100 * props.currentTrack.duration)}</span>
                                <span>{formatTime(props.currentTrack.duration)}</span>
                            </div>
                        </div>


                        <div className="expanded-controls-container">
                            <BsFillSkipStartCircleFill className="expanded-control-icon" onClick={props.handlePrevTrack} />
                            {props.isPlaying ? <BsFillPauseCircleFill className="expanded-control-icon" onClick={handlePlayPause} /> : <BsFillPlayCircleFill className="expanded-control-icon" onClick={handlePlayPause} />}
                            <BsFillSkipEndCircleFill className="expanded-control-icon" onClick={props.handleNextTrack} />

                        </div>
                    </div>

                </div>
            }
        </>


    )
}









        // <div ref={playerContainer} className="player-container">
        //     <div className="player-heading" onClick={handleToggle}>
        //         <div className="player-info">

        //             <img className="track-image" src={props.currentTrack.imageUrl} alt="" />
        //             <div className='track-info'>
        //                 <p>{props.currentTrack.name}</p>
        //                 <p>{props.currentTrack.artistName}</p>
        //             </div>

        //         </div>

        //         <div id="controls-icon" className="controls-container">
        //             {props.isPlaying ? <BsFillPauseCircleFill id="controls-icon" className="controls-icon" onClick={handlePlayPause} /> : <BsFillPlayCircleFill id="controls-icon" className="controls-icon" onClick={handlePlayPause} />}

        //         </div>
        //     </div>
        //    <div className="content-bar">
        //         <div className="navigation-content-bar" ref={soundBarClickRef} onClick={handleClickNavigation}>
        //             <div className="progress-bar" style={{ width: `${props.currentTrack.progress}%` }}>

        //             </div>
        //         </div>
        //     </div>

        // </div>