function usernamesSystem() {
    // Write your code here
    let users = ["joao", "maria", "joao", "maria", "jose", "joao", "maria"]

    let isRepeat = []
    
    isRepeat = users.filter((a) => {
        return users.indexOf(a) !== users.lastIndexOf(a)
    });

    isRepeat.map((user, index) => {
        let count = 1;
        while (users.indexOf(user, users.indexOf(user) + 1 ) !== -1){
            users[users.indexOf(user, users.indexOf(user) + 1 )] = user + count;
            count++
        }
    })    
    
    console.log(users)
}

usernamesSystem()

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const uCount = parseInt(readLine().trim(), 10);

//     let u = [];

//     for (let i = 0; i < uCount; i++) {
//         const uItem = readLine();
//         u.push(uItem);
//     }

//     const result = usernamesSystem(u);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }
