<template>
  <div class="card">
    <h3>Company Details</h3>
    <div class="input-group">
      <ArgonInput
        id="company-name"
        label="Company Name"
        :value="companyDetails.name"
        @input="companyDetails.name = $event"
      />
    </div>
    <div class="input-group">
      <label for="company-logo">Company Logo</label>
      <ArgonInput
        type="file"
        id="company-logo"
        accept="image/*"
        @change="handleLogoUpload"
      />
      <span style="font-size: small;
    margin-left: 20px;">photo.png</span>
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

const companyDetails = reactive({
  name: "",
});

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    console.log("Selected file:", file);
  }
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
label {
  display: block;
  margin-bottom: 5px;
  font-size: 1em;
  color: #555;
}
.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.input-label {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
}

.custom-file-input {
  padding: 0.5rem;
  font-size: 1rem;
  color: #555;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.custom-file-input:hover {
  border-color: #888;
}

.custom-file-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}
.form-group{
  width: -webkit-fill-available;
}
</style>
