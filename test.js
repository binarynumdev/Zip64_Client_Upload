let getArrlen = (val) => new Promise(function (myResolve, myReject) {

        myResolve(val.length);

});

async function main() {
	let aa;
    await  getArrlen(aa).then(val => console.log(val)).catch(e => {
        console.log(e, "error")
    })
    console.log("end")
}
main();