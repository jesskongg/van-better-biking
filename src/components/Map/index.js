/* global google */
import React, {useContext, useLayoutEffect} from 'react'
import {MapContext} from '../../context'
import './index.css'

const Map = props => {
  const {map, setMap} = useContext(MapContext)

  useLayoutEffect(() => {
    if (map) return

    setMap(
      new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
      }),
    )
  }, [])

  return (
    <div
      id="map"
      style={{position: 'absolute', top: 0, left: 0, right: 0}}
      {...props}
    />
  )
}

export default Map
