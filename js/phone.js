const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = (phones) => {
    phones.forEach(phone => {
        // 1: Call parent div
        const phoneContainer = document.getElementById('phone-container');
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
}

loadPhone();