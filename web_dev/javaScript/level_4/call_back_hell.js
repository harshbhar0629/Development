// call back hell 
function saveToDb(data, success, failure) {
    let speed = Math.floor(Math.random() * 12);
    if (speed > 4) {
        success();
    }
    else {
        failure();
    }
}

saveToDb("harsh bhardwaj", () => {
    console.log("Data Saved1");
    saveToDb("hello ji",
        () => {
            console.log("Data 2 saved");
            saveToDb("hi ji",
                () => {
                    console.log("Data3 saved");
                },
                () => {
                    console.log("Error SLow network connection");
                });
        }, () => {
            console.log("Error slow connection");
        });
}, () => {
    console.log("Error slow connection");
});
