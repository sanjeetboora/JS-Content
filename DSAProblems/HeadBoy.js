function minClasses(voters){
    let arijitTotalVotes = 0;
    let helperArray = [];
    for(let i=0; i< voters.length; i++){
        arijitTotalVotes = arijitTotalVotes + voters[i][0];
        //arijit's voters, varun's voters, max votes for Varun
        let maxVotesFromCurrentClass = voters[i][0] + voters[i][1];
        let ele = [voters[i][0], voters[i][1], maxVotesFromCurrentClass];
        helperArray.push(ele);
    }
    helperArray.sort((a, b) => b[2] - a[2]);
    let minClasses = 0;
    let varunTotalVotes =0;
    for(let i=0; i<helperArray.length; i++){
        minClasses++;
        varunTotalVotes = varunTotalVotes + helperArray[i][2];
        arijitTotalVotes = arijitTotalVotes - helperArray[i][0];
        if(varunTotalVotes > arijitTotalVotes){
            return minClasses;
        }
    }
}
let voters = [
    [1, 2],
    [1, 1],
    [2, 1],
    [2, 3]
];
let classes = minClasses(voters);
console.log(classes);