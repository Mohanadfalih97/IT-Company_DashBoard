<template>
    <div class="card">
      <h3>Company Location</h3>
    <!-- تضمين مكون الخريطة -->
    <Mapviwe />
      <argon-button color="success" size="sm" class="ms-auto">
        Update
      </argon-button>
  
    
    </div>
  </template>
  
  <script setup>
  import ArgonButton from "@/components/ArgonButton.vue";
  import Mapviwe from "@/views/components/Mapviwe.vue";
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .card h3 {
    margin-bottom: 15px;
    font-size: 1.5em;
    color: #333;
  }
  </style>
  