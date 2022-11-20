({
    packItem : function(component, event, helper) {
        component.set("v.item.Packed__c", true);
        const button = event.getSource();
        button.set("v.disabled", true);
    }
})
