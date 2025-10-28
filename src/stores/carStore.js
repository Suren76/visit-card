import { defineStore } from 'pinia'

export const showCarStore = defineStore('car', {
    state: () => ({
        showCarsStatus: false
    }),
    actions: {
        showCars() {
            this.showCars = !this.showCars
        }
    }
})