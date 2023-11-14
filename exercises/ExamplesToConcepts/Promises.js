//Write a function that returns a promise that resolves in 3s. Then consume it with another function.
function usePromise() {
    const data = [
        { id: 1, name: "Jack", isActive: true },
        { id: 2, name: "Katie", isActive: true },
        { id: 3, name: "Peter", isActive: true },
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >= 0.5) {
                return reject((error) => {
                    console.log("error!", error);
                });
            }
            resolve({ data });
        }, 1000);
    });
}
//consuming the promise
function getData() {
    try {
        usePromise()
            .then((result) => console.log(result))
            .catch((error) => console.log("Error from consuming!", error));
    } catch (error) {
        console.error("Error from catch!", error);
    }
}
getData();
