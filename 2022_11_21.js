/*1. https://www.codewars.com/kata/586e6d4cb98de09e3800014f/solutions/javascript
In this simple Kata aimed at beginners your task is to recreate a vending machine. 
You will have to make a class called VendingMachine with at least one method called vend. 
On creation of a new instance of VendingMachine the items Array and Initial vending machine money is passed.
The vend method should take two arguments 1. Selection code of the item (not case sensitive) and 2.
Amount of money the user inserts into the machine.
*/
class VendingMachine {
  constructor(items, money) {
    this.items = items;
    this.money = money;
  }
  vend(selection, itemMoney) {
    let selectedItem;
    this.items.forEach((item) => {
      if (item.code == selection) selectedItem = item;
    });

    if (!selectedItem) {
      return (
        "Invalid selection! : Money in vending machine = " +
        this.money.toFixed(2)
      );
    }
    if (itemMoney < selectedItem.price) return `Not enough money!`;
    if (selectedItem.quantity < 1) return `${selectedItem.name}: Out of stock!`;

    selectedItem.quantity--;
    let change = itemMoney - selectedItem.price;
    this.money += itemMoney - change;
    return (
      "Vending " +
      selectedItem.name +
      (change ? " with " + change.toFixed(2) + " change." : "")
    );
  }
}
