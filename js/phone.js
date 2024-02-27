const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
   // console.log(data)
    displayPhones(phones);
}

const displayPhones = phones => { //ul theke phone er datat nicchi
//  console.log(phones)

//// 1. kon jaigai boshabo seta set korlam
const phoneContainer = document.getElementById('phone-container');

// clear phone container cards before adding new cards
phoneContainer.textContent = ''; // akbr search korara por poroborti search korle ager gulo jeno chole jai.textcontent hocche javar akta content.
   // dis play show all button if there are more than 12 phones
  const showAllContainer = document.getElementById('show-all-container')
   if (phones.length > 12){
    console.log("20 no line")
    document.getElementById('show-all-container').classList.remove("hidden")
   }else{
    document.getElementById('show-all-container').classList.add("hidden");
    console.log("24 no line")
   }

phones = phones.slice(0,12); //phonee er collection onk thakleo dekhabe 12 ti

    phones.forEach(phone => {
        console.log(phone);
       
        // 2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card  bg-gray-100 shadow-xl`;
       
        //3. set inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        
        `;
        // //////4.append child
        phoneContainer.appendChild(phoneCard);

    });
}




//handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}


//another search field-----
const handleSearch2 = () => {
    const searchField = document.getElementById('search-field2')
    const searchText = searchField.value;
    loadPhone(searchText)

}
// loadPhone();