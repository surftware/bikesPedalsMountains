const map = L.map("map").setView([47.2, 4.5], 4);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
  {
    name: "Bikepark Leogang",
    address: "Hütten 39, 5771 Leogang, Austria",
    coordinates: [47.4397, 12.7195]
  },
  {
    name: "Les Gets Bike Park",
    address: "74260 Les Gets, Haute-Savoie, France",
    coordinates: [46.1602, 6.6696]
  },
  {
    name: "Finale Outdoor Region",
    address: "Via Brunenghi 150, 17024 Finale Ligure, Italy",
    coordinates: [44.1699, 8.3436]
  },
  {
    name: "Fort William Nevis Range MTB",
    address: "Torlundy, Fort William PH33 6SQ, Scotland",
    coordinates: [56.8524, -4.9992]
  },
  {
    name: "La Fenasosa Bike Park",
    address: "Banyeres de Mariola, Spain",
    coordinates: [38.7144, -0.6587]
  }
];

locations.forEach(location => {
  L.marker(location.coordinates)
    .addTo(map)
    .bindPopup(`
      <strong>${location.name}</strong>
      <br>
      ${location.address}
    `);
});