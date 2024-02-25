<template>
    <ion-page>
      <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary" />
        </ion-buttons>
        
        <ion-avatar slot="end">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
        <ion-item>
            <img style="max-height:200px; object-fit: cover; max-width: 200px; margin:auto; padding: 10px;" src="https://ionicframework.com/docs/img/demos/avatar.svg">
        </ion-item>
        <h4 style="text-align: center;">Order Recieved!</h4>
        <p style="text-align: center; margin: 10px 30px 0 30px">your order No. 123464123 has succesfully taken and now being processed. Kindly wait for our notification regarding your order</p>
    </ion-content>
    <ion-footer>
        <ion-toolbar>
            <ion-button size="large" style="width: 100%;" >Track Order</ion-button>
            <ion-button @click="router.push({path:'/home'})" size="large" color="light" style="width: 100%;">Back to Home</ion-button>
        </ion-toolbar>
    </ion-footer>
</ion-page>
  
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import {useRouter} from 'vue-router';
const router = useRouter();
</script>

<style scoped>

#container {
text-align: center;
position: absolute;
left: 0;
right: 0;
top: 50%;
transform: translateY(-50%);
}

h1{
    margin:auto;
}

#container strong {
font-size: 20px;
line-height: 26px;
}

#container p {
font-size: 16px;
line-height: 22px;
color: #8c8c8c;
margin: 0;
}

ion-card{
width: 300px;
}
.card-img{
  height: 300px;
}

#container a {
text-decoration: none;
}

ion-button {
padding:15px 10px 15px 10px;
}

ion-card-title {
  font-size: 20px;
/* word-wrap: break-word; */
}

ion-card-subtitle{
  font-size: 12px;
}

ion-card-header {
  padding: 10px;
}
</style>