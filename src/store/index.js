import { createStore } from 'vuex'


export default createStore({
    state: {
        reviews: [
            { id: 1, text: '"Calm, Serene, Retro – What a way to relax and enjoy"', name: ' Mr. and Mrs. Baxter, UK' },
            { id: 2, text: '"Friendly staff. Clean hotel. Beautiful atmosphere inside and outside around that part of the city."', name: 'Mr. Smith, USA' },
            { id: 3, text: '"Great location. We really loved the character of the hotel. The restaurant was fantastic and staff was friendly and helpful."', name: 'Mrs. Evans, USA' },
            { id: 4, text: '"The best stay ever. The environment was pleasant and welcoming. Both check-in and check-out were professionally handled and easy."', name: 'Mr. Adams, UK' },
        ],
    },
})