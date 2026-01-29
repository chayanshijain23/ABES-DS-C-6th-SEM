

const mypromise = new Promise((resolve, reject) => {
    let age = 20; // Example age value

    if (age >= 18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }
});

const f1 = async () => {
    try {
        const msg = await mypromise;
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
};

f1();

