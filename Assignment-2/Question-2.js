var details={
    age: prompt("Enter your age: "),
    name: prompt("Enter your name: "),
    phone_no: prompt("Enter your phone number: "),
    get_Details: function(){
        let details="Name: "+this.name+" Age: "+this.age+" Phone number: "+this.phone_no;
        return details;
    }
}
console.log(user_Details.get_Details());