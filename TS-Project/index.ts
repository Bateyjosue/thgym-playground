
// import { Permissions, LoyaltyUser } from "./enums"

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER',
}

 enum Permissions {
        ADMIN = 'ADMIN',
        READ_ONLY = 'READ_ONLY'
}

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const footer = document.querySelector('footer') as HTMLElement
let isLoggedIn : boolean 

function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; 
    date: string
    }[] = [
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
]

// User
const you: {
    firstName: string;
    lastName: string;
    permissions: Permissions;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Josh',
    lastName: 'Batey',
    permissions: null,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[] = [
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
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)
let authorityStatus: any
isLoggedIn = true

function showDetails(authorityStatus: boolean|Permissions, Element: Element, price:number) {
    if(authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = `${price.toString()} /night`
        Element.appendChild(priceDisplay)
    }
}

function showProperties(properties:{image : string, title : string, price: number}[], authorityStatus: boolean|Permissions){
    const article = document.createElement('article')
    const property = document.querySelector('.properties') as Element;
    properties.map(el => {
        const {image, title, price } = el;
        property.innerHTML += `
        <article class="card">
            <h5>${title}</h5>
            <img src=${image} />
            ${authorityStatus ? `${price}/night ` : ''} 
        </article>
        `
    });
    
}


showProperties(properties, you.permissions)




let currentLocation :[string, string, number] = ['Kigal-rw', '11:35AM', 26]
footer.innerHTML = `${currentLocation[0]} | ${currentLocation[1]} | ${currentLocation[2]}℃`