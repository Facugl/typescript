"use strict";
class TakePhoto {
    constructor(cameraMode, tilter) {
        this.cameraMode = cameraMode;
        this.tilter = tilter;
    }
    getRealTime() {
        // some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const fl = new Instagram("test", "test", 3);
fl.getRealTime();
