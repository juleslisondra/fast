import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFoodStore = defineStore('food', () => {
    const result = ref();
        async function food(id)  {
        const x =  await fetch(`https://dummyjson.com/recipes/${id}`).then(res => res.json());
        result.value = x;
    }
    
    return { food,result }
})