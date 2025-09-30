        const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = document.querySelectorAll('.price')
	let sum = 0
    for(let i=0;i<price.length;i++){
        sum+=+price[i].innerText
    }
    
let tr = document.createElement('tr')
let td = document.createElement('td')
td.innerText = sum	
tr.append(td)
let table = document.querySelector('table')
table.append(tr)

};

getSumBtn.addEventListener("click", getSum);