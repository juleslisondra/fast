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
          <ion-title>Order Summary</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-item-sliding>
            <ion-item lines="none">
                <ion-card style="width: 100%; padding: 0;">
                    <ion-card-header>
                    <ion-card-title>Chou Tzuyu</ion-card-title>
                    
                    </ion-card-header>

                    <ion-card-content>
                        <p>+6397054654123</p>
                        <p>email@email.com</p>
                    </ion-card-content>
                </ion-card>
            </ion-item>

            <ion-item-options>
                <ion-item-option><IonIcon :icon="trashBin"></IonIcon></ion-item-option>
                <ion-item-option color="light"><IonIcon :icon="pencil"></IonIcon></ion-item-option>
            </ion-item-options>
            
        </ion-item-sliding>
        <ion-item-sliding>
            <ion-item lines="none">
                <ion-card style="width: 100%; padding: 0;">
                    <ion-card-header>
                    <ion-card-title>My Home Address</ion-card-title>
                    
                    </ion-card-header>

                    <ion-card-content>
                        <p>address address address</p>
                        <p>city philippines</p>
                    </ion-card-content>
                </ion-card>
            </ion-item>
            <ion-item-options>
                <ion-item-option><IonIcon :icon="trashBin"></IonIcon></ion-item-option>
                <ion-item-option color="light"><IonIcon :icon="pencil"></IonIcon></ion-item-option>
            </ion-item-options>
        </ion-item-sliding>
        <ion-item-sliding>
            <ion-item lines="none">
                <ion-card style="width: 100%; padding: 0;">
                    <ion-card-header>
                        <ion-card-title>My Work Office</ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <p>address address address</p>
                        <p>city philippines</p>
                    </ion-card-content>
                </ion-card>
            </ion-item>
            <ion-item-options>
                <ion-item-option><IonIcon :icon="trashBin"></IonIcon></ion-item-option>
                <ion-item-option color="light"><IonIcon :icon="pencil"></IonIcon></ion-item-option>
            </ion-item-options>
        </ion-item-sliding>
        <h1 class="ion-margin">Orders</h1>
        <ion-item lines="none">
            <ion-card style="width: 100%; padding: 0;">
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
                                <h3>Steak Fries Veggies</h3>
                                <p>1x tomato sauce</p>
                                <p>1x coke</p>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
        </ion-item>
        <h1 class="ion-margin">Payment Option</h1>
        <ion-list>
            <ion-radio-group value="cod">
                <ion-item lines="none">
                    <ion-card style="width: 75%; padding: 0;">
                        <ion-card-header>
                            <ion-card-title>Cash on Delivery</ion-card-title>
                        </ion-card-header>
        
                        <ion-card-content>
                            <p>Pay when you recieved the order</p>
                        </ion-card-content>
                    </ion-card>
                    <ion-radio slot="end" value="cod"></ion-radio>
                </ion-item>
                <ion-item lines="none">
                    <ion-card style="width: 75%; padding: 0;">
                        <ion-card-header>
                            <ion-card-title>Loyalty Points(0 points)</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <p>Pay using your loyalty points</p>
                        </ion-card-content>
                    </ion-card>
                    <ion-radio slot="end" value="loyalty"></ion-radio>
                </ion-item>
                <ion-item lines="none">
                    <ion-card style="width: 75%; padding: 0;">
                        <ion-card-header>
                            <ion-card-title>Paypay</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <p>A new tab will open to access your account</p>
                        </ion-card-content>
                    </ion-card>
                    <ion-radio slot="end" value="Paypay"></ion-radio>
                </ion-item>
                <ion-item lines="none">
                    <ion-card style="width: 75%; padding: 0;">
                        <ion-card-header>
                            <ion-card-title>Paymanics</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <p>Choose paymanics services available from you</p>
                        </ion-card-content>
                    </ion-card>
                    <ion-radio slot="end" value="paymanics"></ion-radio>
                </ion-item>
                <div style="display: flex; justify-content: space-between; margin: 0 10px 0 10px;">
                    <p>Subtotal</p> 
                    <p>P 100</p> 
                </div>
                <div style="display: flex; justify-content: space-between; margin: 0 10px 0 10px;">
                    <p>Delivery Charge</p> 
                    <p>P 50</p> 
                </div>
                <ion-item lines="none">
                    <ion-input color="light" placeholder="Change for (eg 1,000)"></ion-input>
                </ion-item>
            </ion-radio-group>
        </ion-list>
      </ion-content>
      <ion-footer>
            <ion-toolbar>
                <div class="ion-margin">
                    <p slot="start">grand total</p>
                    <h1>P 150</h1>
                </div>
                <ion-button @click="router.push({path:'/success'})" slot="end">Place Order</ion-button>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import 'swiper/css';
    import { trashBin,pencil } from 'ionicons/icons';
    import '@ionic/vue/css/ionic-swiper.css';
    import {useRouter} from 'vue-router'

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
  .addon-img{
    max-width: 120px;
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
  