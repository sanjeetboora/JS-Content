process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = "";
let currLine = 0;
process.stdin.on('data', function(userInput){
    inputString += userInput;
    //main();
});

process.stdin.on('end', function(){ //ctrl+d for mac
    inputString = inputString.trim();
    inputString = inputString.split('\n');
    main();
});

function readLine(){
    let result = inputString[currLine];
    currLine = currLine+1;
    return result;
}

function processArray(arr){ //'1 2'
    let tempArr = arr.split(' '); //['1', '2']
    let result = [];
    for(let i=0; i<tempArr.length; i++){
        result.push(Number(tempArr[i]));
    }
    return result; //[1, 2]
}

function main(){
    let tests = Number(readLine());
    while(tests > 0){
        let n = Number(readLine());
        let arr = readLine(); //"1 2" => [1, 2]
        arr = processArray(arr);//[1, 2]
        let queryEle = Number(readLine());

        //logic here for current test case

        tests = tests-1;
    }

}

// 3
// 2
// 1 2
//9
// 3
// 4 5 6
//7
// 1
// 7
//1
