"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Star, X } from "lucide-react";

interface RenderProps {
  style: React.CSSProperties;
  className?: string;
}

type Location = {
  id: number;
  name: string;
  address: string;
  city: string;
  coordinates: { x: number; y: number };
  isOpen: boolean;
  rating: number;
  ratingCount: number;
  mapUrl: string;
};

export default function PizzaLocator() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [clickedLocationId, setClickedLocationId] = useState<number | null>(
    null
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const locations: Location[] = [
    {
      id: 1,
      name: "Khayaban-e-Bukhari - Karachi",
      address:
        "Shop No. 1, 2 & 3, Plot No. 20-C, Bukhari Commercial Lane, No.-1, Phase-VI, DHA, Karachi.",
      city: "Karachi",
      coordinates: { x: 42, y: 78 },
      isOpen: true,
      rating: 4.0,
      ratingCount: 120,
      mapUrl: "https://maps.app.goo.gl/Xj78m8FX23CgnNT67",
    },
    {
      id: 2,
      name: "Shaheed-e-Millat - Karachi",
      address:
        "Plot No. 209 Ammar Tower Main Shaheed-e-Millat Rd, Opposite to Medicare Hospital near UFONE Building, Karachi.",
      city: "Karachi",
      coordinates: { x: 45, y: 74 },
      isOpen: true,
      rating: 4.5,
      ratingCount: 143,
      mapUrl: "https://maps.app.goo.gl/PKTNaifzTMtnAJC7A",
    },
    {
      id: 3,
      name: "Gulshan-e-Iqbal - Karachi",
      address: "A6-7 Row 1/2 Block 10A, Gulshan-e-Iqbal, Karachi.",
      city: "Karachi",
      coordinates: { x: 48, y: 78 },
      isOpen: true,
      rating: 3.5,
      ratingCount: 143,
      mapUrl: "https://maps.app.goo.gl/bLyG75nepk4dSmLo9",
    },
    {
      id: 4,
      name: "Blue Area - Islamabad",
      address: "13/1 Block F, G, Muhammad Plaza Blue Area, Islamabad.",
      city: "Islamabad",
      coordinates: { x: 65, y: 22 },
      isOpen: false,
      rating: 4.2,
      ratingCount: 143,
      mapUrl: "https://maps.app.goo.gl/qwPfZbvgJrkGgymw5",
    },
    {
      id: 5,
      name: "G11 - Islamabad",
      address: "Address - Abu Baker Market, Street No. 11, G-11/1, Islamabad.",
      city: "Islamabad",
      coordinates: { x: 69, y: 22 },
      isOpen: false,
      rating: 3.8,
      ratingCount: 143,
      mapUrl: "https://maps.app.goo.gl/qwPfZbvgJrkGgymw5",
    },
    {
      id: 6,
      name: "Gulgasht Colony - Multan",
      address: "18A, Gulgasht Colony, Near Post Office, Multan.",
      city: "Multan",
      coordinates: { x: 56, y: 47 },
      isOpen: true,
      rating: 4.1,
      ratingCount: 143,
      mapUrl: "https://maps.app.goo.gl/Zgf9yGRiRafkKh5x5",
    },
    {
      id: 7,
      name: "Kohinoor City Road - Faisalabad",
      address: "Kohinoor City Road - Faisalabad",
      city: "Faisalabad",
      coordinates: { x: 65, y: 35 },
      isOpen: true,
      rating: 3.9,
      ratingCount: 143,
      mapUrl: "https://maps.app.goo.gl/rpSz6571uYUmb2XX7",
    },
    {
      id: 8,
      name: "Khayaban-e-Jinnah - Lahore",
      address:
        "Address - Plaza 140-CCA, Khayaban-e-Jinnah, DHA, Phase 5, Lahore.",
      city: "Lahore",
      coordinates: { x: 70, y: 35 },
      isOpen: true,
      rating: 4.3,
      ratingCount: 143,
      mapUrl: "https://maps.app.goo.gl/qwPfZbvgJrkGgymw5",
    },
  ];

  const cityCoordinates = {
    Karachi: { x: 45, y: 82 },
    Islamabad: { x: 67, y: 28 },
    Lahore: { x: 72, y: 39 },
    Faisalabad: { x: 64, y: 41 },
    Multan: { x: 58, y: 51 },
  };

  const openGoogleMaps = (mapUrl: string) => {
    window.open(mapUrl, "_blank");
  };

  const handleLocationClick = (location: Location) => {
    if (location.isOpen) {
      setClickedLocationId(location.id);
    }
    setSelectedLocation(location);
  };

  const handleCloseCard = () => {
    setSelectedLocation(null);
    setClickedLocationId(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const renderThumb = ({ style, ...props }: RenderProps) => {
    const thumbStyle = {
      backgroundColor: "#E0E0E0",
      borderRadius: "4px",
      cursor: "pointer",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const renderTrack = ({ style, ...props }: RenderProps) => {
    const trackStyle = {
      backgroundColor: "#F5F5F5",
      borderRadius: "4px",
      right: "2px",
      bottom: "2px",
      top: "2px",
      width: "6px",
    };
    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };

  return (
    <div
      className="p-8 mt-5 font-[Barlow]"
      style={{
        backgroundImage: "url('/Assets/map-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md h-[600px] overflow-hidden">
          <div className="h-full overflow-hidden rounded-lg">
            {isMounted && (
              <Scrollbars
                autoHeight
                autoHeightMax={600}
                renderThumbVertical={renderThumb}
                renderTrackVertical={renderTrack}
              >
                <div className="h-full pr-4">
                  {locations.map((location, index) => (
                    <div
                      key={location.id}
                      className={`cursor-pointer hover:bg-gray-100 p-5 transition duration-300 ${
                        index !== locations.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                      onClick={() => handleLocationClick(location)}
                    >
                      <h2 className="font-bold text-sm text-gray-800 mb-1">
                        {location.name}
                      </h2>
                      <p className="text-xs text-gray-600">
                        {location.address}
                      </p>
                    </div>
                  ))}
                </div>
              </Scrollbars>
            )}
          </div>
        </div>

        <div className="w-full md:w-2/3 relative h-[60vh] md:h-[600px] overflow-hidden">
          <Image
            src="/Assets/pak-map.png"
            alt="Map of Pakistan"
            layout="fill"
            objectFit="contain"
          />
          {Object.entries(cityCoordinates).map(([city, coords]) => (
            <div
              key={city}
              className="absolute"
              style={{
                top: `${coords.y}%`,
                left: `${coords.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={`/Assets/${city}.png`}
                alt={`${city} icon`}
                width={41}
                height={41}
              />
              <p className="text-[9px] font-bold text-center">{city}</p>
            </div>
          ))}

          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute"
              style={{
                top: `${location.coordinates.y}%`,
                left: `${location.coordinates.x}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => handleLocationClick(location)}
            >
              <Image
                src={
                  location.isOpen && clickedLocationId === location.id
                    ? "/Assets/hover.png"
                    : location.isOpen
                    ? "/Assets/open.png"
                    : "/Assets/closed.png"
                }
                alt={`Pin for ${location.name}`}
                width={30}
                height={30}
              />
            </div>
          ))}

          {selectedLocation && (
            <div className="location-card absolute left-[1%] top-[0%] w-72 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative p-4">
                <button
                  onClick={handleCloseCard}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 -mr-1 -mt-1"
                >
                  <X size={16} />
                </button>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{selectedLocation.city}</h3>
                  <span
                    className={`text-sm font-semibold font-[Barlow] ${
                      selectedLocation.isOpen
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {selectedLocation.isOpen ? "OPEN" : "CLOSED"}
                  </span>
                </div>
                <div className="-mx-4 mb-2">
                  <Image
                    src="/Assets/MaskGroup40.png"
                    alt={`Image of ${selectedLocation.name}`}
                    width={700}
                    height={100}
                    className="w-full h-[100px] object-cover"
                  />
                </div>
                <h2 className="font-bold text-base mb-1">
                  {selectedLocation.name}
                </h2>
                <p
                  className={`text-xs text-gray-600 mb-2 h-[40px] overflow-hidden ${
                    selectedLocation.id <= 2 ? "truncate" : ""
                  }`}
                >
                  {selectedLocation.address}
                  {selectedLocation.id <= 2 ? "..." : ""}
                </p>
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-sm font-semibold">Rating</span>
                  <div className="flex">
                    {renderStars(selectedLocation.rating)}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">
                    ({selectedLocation.ratingCount})
                  </span>
                </div>
                <button
                  className="w-full bg-[#3f7b60] text-white font-bold py-2 rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center text-sm"
                  onClick={() => openGoogleMaps(selectedLocation.mapUrl)}
                >
                  <Image
                    src="/Assets/direction.png"
                    alt="Get Directions Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  GET DIRECTION
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
