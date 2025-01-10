<template>
  <div class="card">
    <h3>Contact Details</h3>
    <div class="input-group">
      <ArgonInput
        id="contact-email"
        label="Email"
        :value="contactDetails.email"
        @input="updateContactDetails('email', $event)"
      />
    </div>
    <div class="input-group">
      <ArgonInput
        id="contact-facebook"
        label="Facebook"
        :value="contactDetails.facebook"
        @input="updateContactDetails('facebook', $event)"
      />
    </div>
    <div class="input-group">
      <ArgonInput
        id="contact-linkedin"
        label="LinkedIn"
        :value="contactDetails.linkedin"
        @input="updateContactDetails('linkedin', $event)"
      />
    </div>
    <div class="input-group">
      <ArgonInput
        id="contact-youtube"
        label="YouTube"
        :value="contactDetails.youtube"
        @input="updateContactDetails('youtube', $event)"
      />
    </div>
    <argon-button color="success" size="sm" class="ms-auto">
      Update
    </argon-button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

// تعريف contactDetails ككائن تفاعلي
const contactDetails = reactive({
  email: "",
  facebook: "",
  linkedin: "",
  youtube: "",
});

// دالة لتحديث الحقول يدويًا
function updateContactDetails(field, value) {
  contactDetails[field] = value;
}
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
.input-group {
  margin-bottom: 15px;
  width: 100%;
}
.form-group{
  width: -webkit-fill-available;
}
</style>
