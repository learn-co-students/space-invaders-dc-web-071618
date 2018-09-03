class CrewMember {
    constructor(position) {
        this.position = position;
        if(!this.currentShip) {
            this.currentShip = 'Looking for a Rig';
        }
    }

    engageWarpDrive() {
        if (typeof this.currentShip === 'object' && this.position === 'Pilot') {
            this.currentShip.warpDrive = 'engaged';
        }
        else {
            return 'had no effect';
        }
    }

    setsInvisibility() {
        if(typeof this.currentShip === 'object' && this.position === 'Defender'){
            this.currentShip.cloaked = true;
        }
        else {
            return 'had no effect';
        }
    }

    chargePhasers() {
        if (typeof this.currentShip === 'object' && this.position === 'Gunner') {
            this.currentShip.phasersCharge = 'charged';
        }
        else {
            return 'had no effect';
        }
    }
}
