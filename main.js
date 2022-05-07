getData(); //get the death number from the CSV file (https://www.coronavirus.gov.hk/chi/5th-wave-statistics.html)

async function getData(){
    const response = await fetch('number.csv');
    const data =  await response.text();

    const rows = data.split('\n').slice(12);
    rows.forEach(elt=>{
        const row = elt.split(',');
        const item = row[0];
        const num = row[1];
        console.log(item, num);
        

const cards = document.querySelectorAll('.picture');

const observer = new IntersectionObserver( //create the animation while scrolling on the page
    entries =>{
        entries.forEach(entry=>{
            entry.target.classList.toggle("show", entry.isIntersecting) 
        })
    },
    {
        threshold: 1,
    }
    )

    let deathNum= num; //using the death no. to generate that number of images
    console.log("deathNum:", deathNum);
    for(let i=0; i<deathNum; i++){
    observer.observe(cards[i]);
}
let header = document.querySelector("h2"); //showing the no. of death
header.innerText = "Lastest death number under 5th wave of COVID in HK:  "+ deathNum+"  (6 May 2022 updated)";
    })
}