function SetJObTypeValueBasingonSalary(executionContext){

    var formContext = executionContext.getFormContext();
    // dictionary
    var fieldSalary = formContext.getControl("dev_salary");
    var fieldJobType = formContext.getControl("dev_jobtype").getAttribute();
    var fieldDocName = formContext.getControl("dev_documentname").getAttribute();
    var valueSalary = fieldSalary.getAttribute().getValue();
    if(valueSalary!= undefined && valueSalary != null){
        fieldJobType.setValue(277670000);
        fieldDocName.setValue("i am a string");
    }
}

function IsSelectedFunctionality(executionContext){

    var formContext = executionContext.getFormContext();
    var fieldGroupName = formContext.getControl("dev_groupname");
    var fieldIsSelected = formContext.getControl("dev_isselected").getAttribute().getValue();
    var fieldDocName = formContext.getControl("dev_documentname");
       
    if(fieldIsSelected){
        fieldGroupName.setVisible(false);
        fieldDocName.setDisabled(true);
    }
}

function JobTypeFunctionality(executionContext){
    var formContext = executionContext.getFormContext();

    var formType = formContext.ui.getFormType();
    
    var fieldJobType = formContext.getControl("dev_jobtype");
    var fieldAccount = formContext.getControl("dev_account");
    var fieldDocName = formContext.getControl("dev_documentname");
    var fieldHobbies = formContext.getControl("dev_hobbies");

    console.log(fieldJobType.getAttribute().getValue());
    console.log(fieldAccount.getAttribute().getValue());
    console.log(fieldDocName.getAttribute().getValue());

    fieldAccountLookUp = fieldAccount.getAttribute().getValue();
    fieldHobbiesValue = fieldHobbies.getAttribute().getValue();
//     [{…}]
// 0: /*    */
// entityType: "account"
// id: "{C63ACAEB-AB7E-EC11-8D21-000D3ACA0AF8}"
// name: "Mark"
// [[Prototype]]: Object
// length: 1
// // [[Prototype]]: Array(0)

if(fieldAccountLookUp!= undefined && fieldAccountLookUp != null)
{
    var accountID = fieldAccountLookUp[0].id;
    var accountName = fieldAccountLookUp[0].name;
    var entityName = fieldAccountLookUp[0].entityType;

    var accountIdNoBrackets = accountID.replace("{","").replace("}","");

    console.log(accountID);
    console.log(accountName);
    console.log(entityName);
}
    

    console.log(accountIdNoBrackets);

//     {C63ACAEB-AB7E-EC11-8D21-000D3ACA0AF8}
// dev_ProtoOppurtunities.js:53 Mark
// dev_ProtoOppurtunities.js:54 account

console.log(fieldHobbiesValue);
console.log(fieldHobbiesValue[1]);
console.log(fieldHobbiesValue[2]);
console.log(fieldHobbiesValue[0]);

if(fieldAccountLookUp[0].name == "Mark")
fieldHobbies.getAttribute().setValue([1,3]);
}