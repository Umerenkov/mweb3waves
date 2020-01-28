const accountASeed = "expand analyst soft stable never dirt push magic primary flat evidence entry mouse game state"
const accountBAddress = "3N2eEnqecfEgUcBi3fuqz3W3EVJ1JeTyoPS"

console.log("address with waves");
console.log(address(accountASeed));

it('transfer', async function(){
    let tx = await broadcast(transfer({amount: 50000000, recipient: accountBAddress}, accountASeed))
    await waitForTx(tx.id)
    console.log(JSON.stringify(tx));
})

it('data transaction', async function(){
    let aboutObject = {
        "name": "Valeriy Umerenkov",
        "occupation": "CBDO @ Encry Foundation"
    }
    let aboutString = JSON.stringify(aboutObject)
    let tx = await broadcast(data({data: [{key: "web3-onlin-course-user-data", value: aboutString}]}, accountASeed))
    await waitForTx(tx.id)
})