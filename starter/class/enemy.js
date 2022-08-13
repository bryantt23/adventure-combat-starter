const { Character } = require('./character');
const { World } = require('./world');

const COOL_DOWN_TIME = 3000;

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = COOL_DOWN_TIME;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    // Fill this in
    const dirs = ['n', 's', 'e', 'w'];
    for (const dir of dirs) {
      const room = this.currentRoom.exits[dir];
      if (room) {
        this.currentRoom = room;
        this.cooldown = COOL_DOWN_TIME;
        return room;
      }
    }
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function () {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
  }

  applyDamage(amount) {
    // Fill this in
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);
  }
}

module.exports = {
  Enemy
};
