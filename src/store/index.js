import { createStore } from 'vuex'


export default createStore({
    state: {
        singleRoom: [
            { id: 1, name: "single-room", img: "single-room-1.png" },
            { id: 2, name: "single-room", img: "single-room-2.jpg" },
            { id: 3, name: "single-room", img: "single-room-3.jpg" },
            { id: 4, name: "single-room", img: "single-room-4.jpg" },
        ],

        doubleRoom: [
            { id: 1, name: "double-room", img: "double-room-1.jpg" },
            { id: 2, name: "double-room", img: "double-room-2.jpg" },
            { id: 3, name: "double-room", img: "double-room-3.jpg" },
            { id: 4, name: "double-room", img: "double-room-4.jpg" },
        ],

        twinRoom: [
            { id: 1, name: "twin-room", img: "twin-room-1.jpg" },
            { id: 2, name: "twin-room", img: "twin-room-2.jpg" },
            { id: 3, name: "twin-room", img: "twin-room-3.jpg" },
            { id: 4, name: "twin-room", img: "twin-room-4.jpg" },
        ],

        reviews: [
            { id: 1, text: '"Calm, Serene, Retro – What a way to relax and enjoy"', name: ' Mr. and Mrs. Baxter, UK' },
            { id: 2, text: '"Friendly staff. Clean hotel. Beautiful atmosphere inside and outside around that part of the city."', name: 'Mr. Smith, USA' },
            { id: 3, text: '"Great location. We really loved the character of the hotel. The restaurant was fantastic and staff was friendly and helpful."', name: 'Mrs. Evans, USA' },
            { id: 4, text: '"The best stay ever. The environment was pleasant and welcoming. Both check-in and check-out were professionally handled and easy."', name: 'Mr. Adams, UK' },
        ],
    },
})