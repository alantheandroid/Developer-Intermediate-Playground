({
	clickCreateItem : function(component, event, helper) {
		let validNewItem = component.find("campingitemform").reduce((validSoFar, inputCmp) => {
			inputCmp.showHelpMessageIfInvalid();
			return validSoFar && inputCmp.get("v.validity").valid;
		}, true);
		if (validNewItem) {
				let newItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
				let itemsArray = component.get("v.items");
				items.push(newItem);
				component.set("v.items", itemsArray);
				component.set("v.newItem", JSON.parse("{ 'sobjectType': 'Camping_Item__c', 'Name': '', 'Quantity__c': 0, 'Price__c': 0, 'Packed__c': false}"))


		}
}
})
