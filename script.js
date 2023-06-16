// Map and set handson 

// Q1 
var a = "abcbbssd"

let b = new Set(a)
console.log(b)
b=[...b].join("")
console.log(b)

// using normal function 
function countAplhabtes(str){
    const aphabletCount = {}
    
    for(let char of str){
        if( char in aphabletCount){
            aphabletCount[char]++
        }
        else{
            aphabletCount[char] = 1
        }
    }
for(let char in aphabletCount){
    console.log(`${char} = ${aphabletCount[char]}}`)
} 
}

countAplhabtes("asdfgygfhad")


// Using Map()
function countAplhabtes(str){
    const aphabletCount = new Map()
    
    for(let char of str){
        if(aphabletCount.has(char)){
            aphabletCount.set(char, aphabletCount.get(char)+1)
        }
        else{
            aphabletCount.set(char, 1)
        }
    }
    for(let [char,count] of aphabletCount){
    console.log(`${char} = ${count}}`)
} 
}

countAplhabtes("asdfgygfhad")


