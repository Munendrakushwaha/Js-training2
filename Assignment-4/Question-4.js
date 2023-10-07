// Write a program to convert given string to upperCase OR lowerCase
  

// into uppercase

let str = "I am in Successive Digital";
let ans="";
for(let index in str)
{ 
    if(str[index].charCodeAt()>=65 && str[index].charCodeAt()<=90)
    {
       ans+=String.fromCharCode(str[index].charCodeAt()+32);
    }
    else if(str[index].charCodeAt()>=97 && str[index].charCodeAt()<=122)
    {
      ans+=String.fromCharCode(str[index].charCodeAt()-32);
    }
    else
    {
        ans+=str[index];
    }

}

console.log(ans);