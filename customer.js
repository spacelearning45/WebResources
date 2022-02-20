function AutoPopulateEmail(executionContext){

    var formContext = executionContext.getFormContext();
    console.log(formContext);
    
    var firstName = formContext.getControl("dev_name").getAttribute().getValue();
    var lastName = formContext.getControl("dev_lastname").getAttribute().getValue();
if(firstName != null && lastName !=null){
    formContext.getControl("dev_email").getAttribute().setValue(firstName+lastName+"@gmail.com");
}
  // formContext.getControl("dev_email").getAttribute().setValue(firstName+lastName+"@gmail.com");

}