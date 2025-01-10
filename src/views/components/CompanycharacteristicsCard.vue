<template>
    <div class="card">
      <h3>Company characteristics</h3>
    
      <div class="input-group">
      
        <ArgonInput
          type="text"
           label="Company vision "
         
         
        />
     
      </div>
      <div class="input-group">
      
      <ArgonInput
        type="text"
         label="Main Area "
       
       
      />
   
    </div>
    <div class="input-group">
      
      <ArgonInput
        type="text"
         label=" Company Values "
       
       
      />
   
    </div>
    <div class="input-group">
      
      <ArgonInput
        type="text"
         label=" Company Mission "
       
       
      />
   
    </div>
      <argon-button color="success" size="sm" class="ms-auto">
        Update
      </argon-button>
    </div>
  </template>
  
  <script setup>

  import ArgonInput from "@/components/ArgonInput.vue";
  import ArgonButton from "@/components/ArgonButton.vue";
 
  
 
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
  