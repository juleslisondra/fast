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
        <ion-title>Points</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size = 3>
            <img alt="Silhouette of a person's head" src="https://cdn.dummyjson.com/recipe-images/7.webp" />
          </ion-col>
          <ion-col>
            <p>Anneoyong Chou!</p>
            <h1>What do you want to eat?</h1>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-searchbar placeholder="try our new Steak Veggies"></ion-searchbar>
      <ion-item lines="none">
        <h4 slot="start">Special Offers</h4>
        <a href="" slot="end">View All ></a>
      </ion-item>
      <swiper>
        <swiper-slide>
          <img style="max-height:200px; object-fit: cover; min-width: 100%; padding: 10px;" alt="food" src="https://cdn.dummyjson.com/recipe-images/1.webp" />
        </swiper-slide>
        <swiper-slide>
          <img style="max-height:200px; object-fit: cover; min-width: 100%; padding: 10px;" alt="food" src="https://cdn.dummyjson.com/recipe-images/2.webp" />
        </swiper-slide>
        <swiper-slide>
          <img style="max-height:200px; object-fit: cover; min-width: 100%; padding: 10px;" alt="food" src="https://cdn.dummyjson.com/recipe-images/3.webp" />
        </swiper-slide>
      </swiper>
      <ion-item lines="none">
        <h4 slot="start">Category</h4>
      </ion-item>
      <swiper :autoplay="true">
        <swiper-slide>
          <img style="min-height:300px; object-fit:cover; max-width: 200px; padding: 10px;" alt="food" src="https://cdn.dummyjson.com/recipe-images/1.webp" />
        </swiper-slide>
        <swiper-slide>
          <img style="min-height:300px; object-fit: cover; max-width: 200px; padding: 10px;" alt="food" src="https://cdn.dummyjson.com/recipe-images/2.webp" />
        </swiper-slide>
        <swiper-slide>
          <img style="min-height:300px; object-fit: cover; max-width: 200px; padding: 10px;" alt="food" src="https://cdn.dummyjson.com/recipe-images/3.webp" />
        </swiper-slide>
      </swiper>
      <ion-item lines="none">
        <h4 slot="start">Most Popular</h4>
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col>
                <ion-card  color="dark">
                  <img class="card-img" src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="Image"  />
                  <ion-card-header>
                    <ion-card-title>Classic Margherita Pizza</ion-card-title>
                    <ion-card-subtitle>P 300</ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>
                    Italian
                  </ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col>
                <ion-card  color="dark">
                  <img class="card-img" src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="Image"  />
                  <ion-card-header>
                    <ion-card-title>Classic Margherita Pizza</ion-card-title>
                    <ion-card-subtitle>P 300</ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>
                    Italian
                  </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
                <ion-card  color="dark">
                  <img class="card-img" src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="Image"  />
                  <ion-card-header>
                    <ion-card-title>Classic Margherita Pizza</ion-card-title>
                    <ion-card-subtitle>P 300</ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>
                    Italian
                  </ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col>
                <ion-card  color="dark">
                  <img class="card-img" src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="Image"  />
                  <ion-card-header>
                    <ion-card-title>Classic Margherita Pizza</ion-card-title>
                    <ion-card-subtitle>P 300</ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>
                    Italian
                  </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab slot="fixed" horizontal="end" vertical="bottom">
        <ion-fab-button href="/foods">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
    
  </ion-page>
</template>

<script setup lang="ts">
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import 'swiper/css';
  import { add } from 'ionicons/icons';
  import '@ionic/vue/css/ionic-swiper.css';
  import { Swiper, SwiperSlide } from 'swiper/vue';
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

button{
  padding: 10px;
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
ion-toolbar{
  display: flex;
  justify-content: center;
}

ion-card{
  width: 150px;
}
.card-img{
	height: 150px;
}

ion-col{
  padding:0;
}

ion-row{
  padding:0;
}

.swipper-img{
	max-height:200px; 
  object-fit: cover; 
  min-width: 100%; 
  padding: 10px;
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
