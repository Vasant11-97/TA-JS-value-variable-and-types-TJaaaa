//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for(let i = 0; i < 10; i = i + 1){
    console.log(i);
}

// Using `console.log` log all the evan values from 1 to 10.

for(let i = 0; i < 11; i = i + 1){
    if( i% 2 == 0){
        console.log(i);
    }
}

// Using `console.log` log all the od values from 1 to 10.

for(let i = 0; i < 11; i = i + 1){
    if( i% 2 !== 0){
        console.log(i);
    }
}

// Calculate the sum of all numbers from 1 to 10.

let num=0, nums = ['1','2','3','4','5','6', '7', '8', '9', '10'];

for(var i=0; i < nums.length; i++){            
        num += parseInt(nums[i]);  
}
  console.log(num);

// Log all the values from 1 to 10 using while loop

let i = 0;
while(i < 10){
    i = i + 1;
    console.log(i);
}


