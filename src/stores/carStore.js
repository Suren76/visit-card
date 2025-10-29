import { defineStore } from 'pinia'

export const showCarsStore = defineStore('car', {
    state: () => ({
        showCarsStatus: false
    }),
    actions: {
        showCars() {
            this.showCarsStatus = !this.showCarsStatus
        }
    }
})