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
    },
})