const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = (phones) => {
    // 1: Call parent div
    const phoneContainer = document.getElementById('phone-container');
    // Clear container
    phoneContainer.textContent = '';

    //condition show all button when show more than 10 data
    const showAllContent = document.getElementById('show-all-content');
    if(phones.length > 9){
        showAllContent.classList.remove('hidden');
    }
    else{
        showAllContent.classList.add('hidden');
    }

    // Display limite data 0 to 10
    phones = phones.slice(0, 9);

    phones.forEach(phone => {
        // 2: Create a div
        const phoneCard = document.createElement('div');

        phoneCard.classList = `card bg-gray-100 shadow-xl my-6 mx-6 p-8`;
        // 3: Add innerHTML
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
        alt="${phone.brand}" /></figure>
        <div class="card-body text-black">
            <h2 class="card-title">${phone.brand}</h2>
            <p>${phone.phone_name}</p>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <h2 class ="text-3xl text-center">$ 999</h2>
            <div class="card-actions justify-center mt-4">
                <button class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;

        // 4: Append Child
        phoneContainer.appendChild(phoneCard);

    });
    toggleLoadingSpinner(false);
}

const handelSearch = () =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-text');
    const searchText1 = searchField.value;
    loadPhone(searchText1);
}

//Loading spinner

const toggleLoadingSpinner =(isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spiner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}
