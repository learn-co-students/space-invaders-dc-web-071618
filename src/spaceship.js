class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked = true, phasersCharge = 'uncharged') {
    this.name = name
    this.crew = crew
    if (this.crew.length === 0) {
      this.docked = docked
    } else {
      this.docked = false
      this.crew.forEach(member => member.currentShip = this)
    }
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
  }
}
