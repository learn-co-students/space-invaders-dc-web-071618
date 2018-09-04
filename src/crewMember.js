class CrewMember {
  constructor(position, currentShip = 'Looking for a Rig') {
    this.position = position
    this.currentShip = currentShip
  }
  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else {
      if (this.position === 'Pilot' && this.currentShip.warpDrive === 'disengaged') {
      this.currentShip.warpDrive = 'engaged'
    } else {
      this.currentShip.warpDrive = 'disengaged'
    }}
  }
  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
    else {
      if (this.position === 'Defender' && this.currentShip.cloaked === false) {
      this.currentShip.cloaked = true
    } else {
      this.currentShip.cloaked = false
    }}
  }
  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
    else {
      if (this.position === 'Gunner' && this.currentShip.phasersCharge === 'uncharged') {
      this.currentShip.phasersCharge = 'charged'
    } else {
      this.currentShip.phasersCharge = 'uncharged'
    }}
  }
}
