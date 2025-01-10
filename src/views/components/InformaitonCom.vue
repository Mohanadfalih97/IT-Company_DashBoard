<template>
  <div class="container mt-4">
    <Swiper
      :modules="[EffectFlip, Pagination]"
      effect="flip"
      :pagination="{
          dynamicBullets: true,
        clickable: true,
        el: '.swiper-pagination',
      }"
      class="custom-swiper"
      style="height: 400px; width: 100%;"
    >
      <!-- Card 1: Company Details -->
      <SwiperSlide>
        <CompanyDetals />
      </SwiperSlide>

      <!-- Card 2: Contact Details -->
      <SwiperSlide>
        <ContactDetals />
      </SwiperSlide>
      <SwiperSlide>
        <CompanycharacteristicsCard />
      </SwiperSlide>
      <SwiperSlide>
        <MapCard />
      </SwiperSlide>
    </Swiper>
    <!-- Dynamic Pagination -->
    <div :class="paginationClass"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFlip, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import CompanyDetals from "@/views/components/CompanyDetals.vue";
import ContactDetals from "@/views/components/ContactDetals.vue";
import MapCard from "@/views/components/MapCard.vue";
import CompanycharacteristicsCard from "@/views/components/CompanycharacteristicsCard.vue";

// ديناميكية تحديد الصف CSS بناءً على شرط معين
const paginationClass = ref("swiper-pagination");
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
}

.custom-swiper {
  height: 400px;
  width: 400px;
  overflow: visible;
  position: relative;
}

/* يمكن تعديل مكان الباجنيشن ديناميكيًا باستخدام CSS */
.swiper-pagination {
  position: absolute;
  text-align: center;
  bottom: 440px !important;
  width: 100%;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: #f8f9fa;
  opacity: 0.7;
  border-radius: 50%;
  margin: 0 5px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #f8f9fa;
}
.swiper-pagination-progressbar {
  background: #e0e0e0;
  height: 4px;
  border-radius: 2px;
}

.swiper-pagination-progressbar-fill {
  background: #007bff;
  height: 100%;
  border-radius: 2px;
}
</style>
