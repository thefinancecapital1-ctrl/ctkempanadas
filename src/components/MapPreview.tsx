import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Main location coordinates
const location = {
  name: "CTK Empanadas",
  address: "61 Rickenbacker Circle, Livermore, CA 94551",
  coords: [-121.7747, 37.6819]
};

const MapPreview = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Use a placeholder token for development - in production, add your Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: location.coords as [number, number],
      zoom: 14,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker for the location
    new mapboxgl.Marker({ color: '#B5482B' })
      .setLngLat(location.coords as [number, number])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="p-2">
            <h3 class="font-heading font-bold text-sm mb-1">${location.name}</h3>
            <p class="text-xs text-muted-foreground">${location.address}</p>
          </div>`
        )
      )
      .addTo(map.current!);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl hover-glow animate-scale-in-center border-4 border-primary/20">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapPreview;
