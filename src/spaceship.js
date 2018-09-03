class Spaceship {
  constructor(name, crew) {
    this.name = name
    this.crew = crew
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.docked = true
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    if (this.crew.length === 0) {
      this.docked
    } else {
      this.docked = false
      this.crew.forEach(m => m.currentShip = this)
    }
  }
}
