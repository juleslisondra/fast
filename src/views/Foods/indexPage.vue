<template>
      <ion-page>
        <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary" />
          </ion-buttons>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/home"></ion-back-button>
          </ion-buttons>
          <ion-avatar slot="end">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-title>Points</ion-title>
        </ion-toolbar>
      </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Our Foods</ion-title>
        </ion-toolbar>
      </ion-header>
      <div >
        <ion-searchbar></ion-searchbar>
        <ion-item lines="none">
          <ion-button @click="test" color="primary" size="default">All</ion-button>
          <ion-button color="light" size="default">Breakfast</ion-button>
          <ion-button color="light" size="default">Chicken</ion-button>
          <ion-button color="light" size="default">Seafood</ion-button>
        </ion-item>
        <ion-list>
          <div v-for="(item,i) in result" :key="i">
          <ion-item lines="none">
              <ion-card @click="store.food(item.id) && router.push({path : `/foods/${item.id}`})"  color="dark">
                <img class="card-img"  :src=item.image alt="Image"  />
                <ion-card-header>
                  <ion-card-title>{{ item.name }}</ion-card-title>
                  <ion-card-subtitle>P {{ item.caloriesPerServing }}</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  {{ item.cuisine }}
                </ion-card-content>
              </ion-card>
          </ion-item>
        </div>
        </ion-list>
        <pre>{{ store.result }}</pre>
      </div>
    </ion-content>
  </ion-page>
    
</template>

<script setup lang="ts">
  import {
        ref,onUpdated
  } from 'vue';
  import { useRouter } from 'vue-router';
  import { IonSearchbar } from '@ionic/vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { useFoodStore } from '@/stores/useFoodStore';
  const router = useRouter();
  const store = useFoodStore();
  onUpdated(async() => {
      const x = await fetch("https://dummyjson.com/recipes").then(res => res.json());
      result.value = x.recipes;
    })
  const result = ref();
    async function test(){
    const x =  await fetch("https://dummyjson.com/recipes").then(res => res.json());
    result.value = x.recipes;
    } 
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