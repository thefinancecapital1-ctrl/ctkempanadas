// Main location
const location = {
  name: "CTK Empanadas",
  address: "61 Rickenbacker Circle, Livermore, CA 94551",
};

const MapPreview = () => {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
    location.address
  )}&zoom=15`;

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${location.name} location`}
        className="absolute inset-0"
      />
    </div>
  );
};

export default MapPreview;
