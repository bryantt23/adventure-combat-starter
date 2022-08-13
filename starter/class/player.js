const { Character } = require('./character');
const { Enemy } = require('./enemy');
const { Food } = require('./food');
const { World } = require('./world');

class Player extends Character {
  constructor(name, startingRoom) {
    super(name, 'main character', startingRoom);
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log('You cannot move in that direction');
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    const index = this.currentRoom.items.findIndex(
      item => item.name === itemName
    );
    const item = this.currentRoom.items[index];
    this.currentRoom.items.splice(index, 1);
    this.items.push(item);
  }

  dropItem(itemName) {
    // Fill this in
    const index = this.items.findIndex(item => item.name === itemName);
    const item = this.items[index];
    this.items.splice(index, 1);
    this.currentRoom.items.push(item);
  }

  eatItem(itemName) {
    // Fill this in
    const index = this.items.findIndex(item => item.name === itemName);
    const item = this.items[index];
    if (item instanceof Food) {
      this.items.splice(index, 1);
    }
  }

  getItemByName(name) {
    // Fill this in
    return this.items.find(item => item.name === name);
  }

  hit(name) {
    // Fill this in
    // const enemy = World.enemies.find(enemy => enemy.name === name);
    // console.log('🚀 ~ file: player.js ~ line 72 ~ Player ~ hit ~ enemy', enemy);
    // enemy.attack();
    // just attacking off of them because I don't know which one
    for (const enemy of World.enemies) {
      enemy.attack();
    }
  }

  die() {
    console.log('You are dead!');
    process.exit();
  }
}

module.exports = {
  Player
};
