// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

let str = "  hello    john   doe  ".trim();
let ans="";
for(let index=0;index<str.length;index++)
{
    
    if(str[index]===" " && str[index+1].charCodeAt()>=97 && str[index+1].charCodeAt()<=122)
    {
        ans+=String.fromCharCode(str[index+1].charCodeAt()-32);
        index=index+1;
    }
    else if(str[index]===" ")
    {
        continue;
    }
    else
    {
        ans+=str[index];
    }
}
console.log(ans);