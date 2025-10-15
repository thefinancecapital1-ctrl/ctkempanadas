import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Locations coordinates
const locations = [
  { name: "Hayward Farmers Market", coords: [-122.0808, 37.6688] },
  { name: "Danville Farmers Market", coords: [-121.9999, 37.8216] },
  { name: "San Rafael Civic Center", coords: [-122.5311, 37.9735] },
  { name: "Livermore Location", coords: [-121.7680, 37.6819] },
  { name: "San Francisco Location", coords: [-122.4194, 37.7749] },
];

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
      center: [-122.2, 37.8],
      zoom: 8.5,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each location
    locations.forEach((location) => {
      const marker = new mapboxgl.Marker({ color: '#B5482B' })
        .setLngLat(location.coords as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3 class="font-heading font-bold text-sm">${location.name}</h3>`
          )
        )
        .addTo(map.current!);
    });

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
