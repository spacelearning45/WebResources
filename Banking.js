function AutoPopulateRootLookUp(executionContext){
    var formContext = executionContext.getFormContext();

var fieldRoot = formContext.getControl("dev_root");
var fieldRootValue = fieldRoot.getAttribute().getValue();

console.log(fieldRootValue);

var Root5EntityName = fieldRootValue[0].entityType;
var Root5Name = fieldRootValue[0].name;
var Root5Id = fieldRootValue[0].id.replace("{","").replace("}","");

var Root5Lookup =new Array();
Root5Lookup[0]= new Object();
Root5Lookup[0].id = Root5Id;
Root5Lookup[0].entityType = Root5EntityName;            
Root5Lookup[0].name = Root5Name;            

formContext.getAttribute("dev_root6").setValue(Root5Lookup); 


}