class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.position === "Pilot" && this.currentShip.engageWarp === false) {
      this.currentShip.engageWarp = true
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.currentShip.cloaked === false) {
      this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }

  chargePhasers() {
    if (this.position === "Gunner" && this.currentShip.chargePhasers === false) {
      this.currentShip.chargePhasers = true
    } else {
      return 'had no effect'
    }
  }
}
