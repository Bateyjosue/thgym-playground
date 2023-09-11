"use strict";
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (Permissions = {}));
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const footer = document.querySelector('footer');
let isLoggedIn;
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '27-03-2021'
    },
];
const you = {
    firstName: 'Josh',
    lastName: 'Batey',
    permissions: null,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
const properties = [
    {
        image: './images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: 'marywinkle@gmail.com',
        isAvailable: true
    },
    {
        image: './images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: 'garydavis@hotmail.com',
        isAvailable: false
    },
    {
        image: './images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: 'andyluger@aol.com',
        isAvailable: true
    }
];
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
let authorityStatus;
isLoggedIn = true;
function showDetails(authorityStatus, Element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = `${price.toString()} /night`;
        Element.appendChild(priceDisplay);
    }
}
function showProperties(properties, authorityStatus) {
    const article = document.createElement('article');
    const property = document.querySelector('.properties');
    properties.map(el => {
        const { image, title, price } = el;
        property.innerHTML += `
        <article class="card">
            <h5>${title}</h5>
            <img src=${image} />
            ${authorityStatus ? `${price}/night ` : ''} 
        </article>
        `;
    });
}
showProperties(properties, you.permissions);
let currentLocation = ['Kigal-rw', '11:35AM', 26];
footer.innerHTML = `${currentLocation[0]} | ${currentLocation[1]} | ${currentLocation[2]}℃`;
//# sourceMappingURL=index.js.map