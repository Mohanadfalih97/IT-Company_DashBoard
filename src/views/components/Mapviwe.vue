<template>
    <div class="map-container">
      <div id="map"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  
  onMounted(() => {
    // إنشاء الخريطة
    const map = L.map("map").setView([33.3152, 44.3661], 13); // (إحداثيات بغداد)
  
    // إضافة طبقة بلاطات (Tiles Layer)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
  
    // إضافة علامة (Marker)
    L.marker([33.3152, 44.3661])
      .addTo(map)
      .bindPopup("Hello from Baghdad!")
      .openPopup();
  });
  </script>
  
  <style>
  .map-container {
    width: 100%;
    height: 300px;
    margin-top: 20px;
  }
  
  #map {
    width: 100%;
    height: 70%;
  }
  </style>
  