<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary" />
          </ion-buttons>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/foods"></ion-back-button>
          </ion-buttons>
          
          <ion-avatar slot="end">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-title>Points</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-content :fullscreen="true">
            <ion-item lines="none">
              <img class="card-img"  :src=food?.image alt="Image"  />
              <ion-fab horizontal="end" vertical="bottom">
                <ion-fab-button>
                  <ion-icon :icon="heartSharp"></ion-icon>
                </ion-fab-button>
              </ion-fab>
            </ion-item>
            <ion-item lines="none">
              <ion-title slot="start" size="small" class="ion-padding">{{ food?.name }}</ion-title>
            </ion-item>
            <ion-item lines="none">
              <ion-icon size="small" type="button" :icon="starOutline"></ion-icon>
              <ion-icon size="small" type="button" :icon="starOutline"></ion-icon>
              <ion-icon size="small" type="button" :icon="starOutline"></ion-icon>
              <ion-icon size="small" type="button" :icon="starOutline"></ion-icon>
              <ion-icon size="small" type="button" :icon="starOutline"></ion-icon>
            </ion-item>
            <!-- <pre>{{ food?.instructions }}</pre> -->
            <ion-item lines="none">
              <p size="small">{{ food?.instructions[0] }} {{ food?.instructions[1] }}</p>
              
            </ion-item >
            <ion-item lines="none">
              <h4 slot="start">P {{ food?.caloriesPerServing }}</h4>
              <div slot="end">
                <ion-icon @click="counter.decrement()" size="small" type="button" :icon="remove"></ion-icon>
                  {{ counter.count }}
                <ion-icon @click="counter.increment()" size="small" type="button" :icon="add"></ion-icon>
              </div>
            </ion-item>
            <ion-item lines="none">
              <h4 slot="start">Beverages</h4>
              <ion-select interface="action-sheet" slot="end" placeholder="Select">
                <ion-select-option value="coke">Coke</ion-select-option>
                <ion-select-option value="pepsi">Pepsi</ion-select-option>
                <ion-select-option value="icedwater">Iced Water</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item lines="none">
              <ion-radio-group value="strawberries" >
                <ion-item lines="none">
                  <ion-label>small</ion-label>
                  <ion-radio slot="start" value="small"></ion-radio>
                </ion-item>
                <ion-item lines="none">
                  <ion-label>regular</ion-label>
                  <ion-radio slot="start" value="regular"></ion-radio>
                </ion-item>
                <ion-item lines="none">
                  <ion-label>large</ion-label>
                  <ion-radio slot="start" value="large"></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-item>
            <ion-item lines="none">
                <h4 slot="start">Add-Ons</h4>
            </ion-item>
            <ion-item lines="none">
              <ion-card>
                <ion-card-content>
                  <ion-grid>
                    <ion-row>
                      <ion-col>
                        <ion-img class="addon-img"
                          src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
                          alt="The Wisconsin State Capitol building in Madison, WI at night"
                        ></ion-img>
                      </ion-col>
                      <ion-col>
                        <h3>Tomato Sauce</h3>
                        <p>Sauce</p>
                        <p>P40</p>
                        <div>
                          <ion-icon @click="counter.decrement()" size="small" type="button" :icon="remove"></ion-icon>
                            {{ counter.count }}
                          <ion-icon @click="counter.increment()" size="small" type="button" :icon="add"></ion-icon>
                        </div>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-item>
            <ion-item lines="none">
              <ion-card>
                <ion-card-content>
                  <ion-grid>
                    <ion-row>
                      <ion-col>
                        <ion-img class="addon-img"
                          src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
                          alt="The Wisconsin State Capitol building in Madison, WI at night"
                        ></ion-img>
                      </ion-col>
                      <ion-col>
                        <h3>Tomato Sauce</h3>
                        <p>Sauce</p>
                        <p>P40</p>
                        <div>
                          <ion-icon @click="counter.decrement()" size="small" type="button" :icon="remove"></ion-icon>
                            {{ counter.count }}
                          <ion-icon @click="counter.increment()" size="small" type="button" :icon="add"></ion-icon>
                        </div>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-item>
            <ion-fab slot="fixed" vertical="bottom" horizontal="center">
              <ion-fab-button @click="presentAlert" class="order-btn">
                Add to Bag
              </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
      ref,onUpdated
} from 'vue';
import { useRoute,useRouter } from 'vue-router'
import { IonButtons, IonBackButton, IonContent, IonHeader,alertController, IonFab, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useFoodStore } from '@/stores/useFoodStore';
import { useCounterStore } from '@/stores/useCounterStore';
import { heartSharp,add,remove,starOutline } from 'ionicons/icons';
 
const router = useRouter();
const route = useRoute();
const store = useFoodStore();
const counter = useCounterStore();
const handlerMessage = ref();

const food = ref();
    onUpdated(async() => {
      const x = await fetch(`https://dummyjson.com/recipes/${route.params.id}`).then(res => res.json());
      food.value = x;
    })

    const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'Successfuly Added',
          buttons: [
            {
              text: 'Add more',
              role: 'cancel',
              handler: () => {
                handlerMessage.value = 'Alert canceled';
              },
            },
            {
              text: 'Proceed to Checkout',
              role: 'confirm',
              handler: () => {
                handlerMessage.value = 'Alert confirmed';
                router.push({path : '/bag'})
              },
            },
          ],
        });
        await alert.present();
      };
</script>

<style scoped>
.addon-img{
  padding:0;
  margin:0;
  height: 100px;
  min-width: 100px;
  object-fit: cover;
}

.order-btn {
    min-width: 100px;
    --background: #d32323;
    --background-activated: #880c0c;
    --background-hover: #8a2626;
    --border-radius: 15px;
    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    --color: black;
    font-weight: 600;
    font-size: 15px;
  }

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

ion-title{
  font-size: 15px;
}

ion-card{
width: 300px;
}


.card-img{
  height: auto;
  width: 500px;
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