// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

let str = "  hello john doe  ".trim();
let ans="";
for(let index=0;index<str.length;index++)
{
    let count = 0;
    if(str[index]===" " && str[index+1].charCodeAt()>=97 && str[index+1].charCodeAt()<=122)
    {
        ans+=String.fromCharCode(str[index+1].charCodeAt()-32);
        count=1;
    }
    else if(count==0)
    {
        ans+=str[index];
    }
}
console.log(ans);