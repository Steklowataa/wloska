export const menuEN: {
    title: {id: string; pizza?: string; burger?: string; smashburger?: string; extras?: string; drinks?: string; saus?: string;}[];
    pizza: Record<string, [string, number, string, string?]>,
    burger: Record<string, [string, number, string, string?]>,
    smashburger: Record<string, [string, number, string, string?]>,
    extras: Record<string, [string, number, string]>,
    drinks: Record<string, [string, number, string]>,
    sos: {name: string, img: string, price: number}[]
    pizzaExtras: {name: string, price: number}[]
    burgerOptions: {name: string, price: number}[]
    smashOptions: {name: string, price: number}[]
} = {
    title: [
        {id: "Pizza", pizza: "Pizza"},
        {id: "Burgery", burger: "Burgers"},
        {id: "SmashBurgery", smashburger: "Smashburgers"},
        {id: "Przystawki", extras: "Extras"},
        {id: "Napoje", drinks: "Drinks"},
        {id: "Sosy", saus: "Sauses"}
    ],
    pizza: {
        "Margherita": ["Tomato sauce, mozzarella, fresh basil", 29, "/images/marg.svg", "vege"],
        "Capricciosa": ["Tomato sauce, mozzarella, ham, mushrooms", 34, "/images/capr.svg", ""],
        "Primavera": ["Tomato sauce, mozzarella, salami, mushrooms", 34, "/images/margarita.svg", ""],
        "Salami": ["Tomato sauce, mozzarella, salami, garlic", 34, "/images/margarita.svg", ""],
        "Diabola": ["Tomato sauce, mozzarella, spianata, jalapeño, chili flakes", 36, "/images/margarita.svg", "ostry"],
        "Vegetariana": ["Tomato sauce, mozzarella, feta cheese, zucchini, arugula, sun-dried tomatoes", 36, "/images/vegetariana.svg", "vege"],
        "Hawaiian": ["Tomato sauce, mozzarella, chicken, pineapple, corn", 38, "/images/hawajska.svg", ""],
        "Caesar": ["White sauce, lettuce, chicken, parmesan, red onion, black olives", 38, "/images/margarita.svg", ""],
        "Pear Pizza": ["Tomato sauce, mozzarella, pear, feta cheese, seeds, arugula/spinach", 38, "/images/z-gruszka.svg", "vege"],
        "Chicken BBQ": ["BBQ sauce, mozzarella, grilled chicken, corn, spring onion, fried onion", 38, "/images/margarita.svg", ""],
        "Hunter’s": ["Tomato sauce, mozzarella, frankfurters, black olives, chili flakes, BBQ sauce", 39, "/images/mysliwska.svg", "ostry"],
        "Carne": ["Tomato sauce, mozzarella, bacon, spianata, red onion, jalapeño", 40, "/images/4-miesa.svg", "ostry"],
        "4 Cheeses": ["White sauce, mozzarella, feta, gorgonzola, Grana Padano", 39, "/images/4-sery.png", "vege"],
        "Salama Bianca": ["White sauce, mozzarella, mushrooms, spianata, garlic, gorgonzola", 43, "/images/bianca.svg", ""],
        "Parma": ["BBQ sauce, mozzarella, prosciutto, corn, spring onion, fried onion", 43, "/images/parma.png", ""],
        "Quattro Carni": ["Tomato sauce, salami, ham, spianata, frankfurters, spring onion", 43, "/images/4-miesa.svg", ""],
    },
    burger: {
        "Classic": ["Bun, beef 200g, lettuce, tomato, signature sauce", 27, "/images/ser-bekon2.png", ""],
        "With Cheddar": ["Bun, beef 200g, cheddar, lettuce, tomato, signature sauce", 34, "/images/ser-bekon2.png", ""],
        "Vegan": ["Bun, fried breaded mozzarella, sun-dried tomatoes, fried onion, lettuce, vegan mayo", 36, "/images/veganski.png", "vege"],
        "Cheese Bacon": ["Bun, beef 200g, cheddar, bacon, lettuce, tomato, signature sauce", 37, "/images/ser-bekon2.png", ""],
        "Chicken": ["Bun, grilled chicken, lettuce, tomato, red onion, garlic sauce", 37,"/images/ser-bekon2.png", ""],
        "BBQ": ["Bun, beef 200g, cheddar, bacon, lettuce, fried onion, BBQ sauce", 37, "/images/bekon.svg", ""],
        "Spicy": ["Bun, beef 200g, lettuce, jalapeño, sriracha sauce, hot sauce", 39, "/images/ser-bekon2.png", "ostry"],
        "Woodman’s": ["Bun, beef 200g, breaded cheese, bacon, fried onion, woodman’s sauce", 43, "/images/drwala.svg", ""],
        "Giant": ["Bun, double beef, double cheddar, bacon, lettuce, tomato, signature sauce", 52, "/images/ser-bekon2.png", ""]
    },
    smashburger: {
        "Smash Classic": ["Butter bun, beef 100g, pickle, red onion, signature sauce", 20, "/images/serowy-smash.svg", ""],
        "Smash Cheesy": ["Butter bun, beef 100g, double cheddar, pickle, red onion, signature sauce", 24, "/images/serowy-smash.svg", ""],
        "Smash Spicy": ["Butter bun, beef 100g, cheddar, jalapeño, signature sauce", 25, "/images/serowy-smash.svg", "ostry"],
        "Smash Bacon": ["Butter bun, beef 100g, bacon, cheddar, fried onion, signature sauce", 29, "/images/serowy-smash.svg", ""],
        "Smash Egg&Bacon": ["Butter bun, beef 100g, bacon, cheddar, egg, red onion, signature sauce", 31,"/images/egg-bekon.svg", ""],
    },
    extras: {
        "Thin Fries": ["Thin fries with ketchup", 14, "/images/krazki.png"],
        "Steak Fries": ["Steak fries with ketchup", 15, "/images/krazki.png"],
        "Sweet Potato Fries": ["Sweet potato fries with sauce of choice", 19, "/images/krazki.png"],
        "Special Fries": ["With parmesan and spring onion, sauce of choice", 19, "/images/krazki.png"],
        "Onion Rings": ["Onion rings (8 pcs) with sauce of choice", 19, "/images/krazki.png"],
        "Cheese Sticks": ["Cheese sticks (5 pcs) with sauce of choice", 19, "/images/krazki.png"],
    },
    drinks: {
        "Coca-Cola": ["", 9, "/images/margarita.svg"],
        "Fanta": ["", 9, "/images/margarita.svg"],
        "Sprite": ["", 9, "/images/margarita.svg"],
        "Still Water": ["", 9, "/images/margarita.svg"],
        "Sparkling Water": ["", 9, "/images/margarita.svg"],
        "On Lemon": ["", 9, "/images/margarita.svg"],
        "On Lemon Pear": ["", 9, "/images/margarita.svg"],
        "On Lemon Pineapple": ["", 9, "/images/margarita.svg"],
    },
    sos: [
        { name: "Sour Cream", img: "/images/sos.png", price: 4 },
        { name: "Garlic", img: "/images/sos.png",price: 4 },
        { name: "BBQ",img: "/images/sos.png", price: 4 },
        { name: "Cranberry",img: "/images/sos.png", price: 4 },
        { name: "Woodman’s", img: "/images/sos.png",price: 4 },
        { name: "Cheese",img: "/images/sos.png", price: 4 },
        { name: "Ketchup", img: "/images/sos.png",price: 4 },
        { name: "Mayonnaise",img: "/images/sos.png", price: 4 },
        { name: "Honey Mustard",img: "/images/sos.png", price: 4 },
        {name: "Spicy Mayo",img: "/images/sos.png", price: 5},
        {name: "Pesto Mayo",img: "/images/sos.png", price: 5},
        {name: "Olive Oil",img: "/images/sos.png", price: 5},
        {name: "Garlic Oil", img: "/images/sos.png",price: 5},
    ],
    pizzaExtras: [
        { name: "Pineapple", price: 4 },
        { name: "Black Olives", price: 4 },
        { name: "Red Onion", price: 4 },
        { name: "Garlic", price: 4 },
        { name: "Jalapeño", price: 4 },
        { name: "Corn", price: 4 },
        { name: "Walnuts", price: 4 },
        { name: "Chili Flakes", price: 4 },
        { name: "Cherry Tomatoes", price: 4 },
        { name: "Fried Onion", price: 4 },
        { name: "Arugula", price: 4 },
        { name: "Sun-dried Tomatoes", price: 4 },
        { name: "Spring Onion", price: 4 },
        { name: "Grana Padano", price: 5 },
        { name: "Gorgonzola", price: 5 },
        { name: "Mushrooms", price: 5 },
        { name: "Feta Cheese", price: 5 },
        { name: "Bacon", price: 6 },
        { name: "Frankfurters", price: 6 },
        { name: "Chicken", price: 6 },
        { name: "Prosciutto", price: 6 },
        { name: "Salami", price: 6 },
        { name: "Spianata", price: 6 },
        { name: "Ham", price: 6 },
    ],
    burgerOptions: [
        {name: "Red Onion", price: 4},
        {name: "Jalapeño", price: 4},
        {name: "Chili Flakes", price: 4},
        {name: "Tomato", price: 4},
        {name: "Sun-dried Tomatoes", price: 4},
        {name: "Fried Onion", price: 4},
        {name: "Lettuce", price: 4},
        {name: "Cheddar", price: 5},
        {name: "Bacon", price: 6}
    ],
    smashOptions: [
        {name: "Double Meat", price: 8},
        {name: "Red Onion", price: 4},
        {name: "Jalapeño", price: 4},
        {name: "Chili Flakes", price: 4},
        {name: "Tomato", price: 4},
        {name: "Sun-dried Tomatoes", price: 4},
        {name: "Fried Onion", price: 4},
        {name: "Lettuce", price: 4},
        {name: "Cheddar", price: 5},
        {name: "Bacon", price: 6}
    ]
}

export const textEN : {
    images: {img: string}[],
    header: {name: string, subtitle: string, description: string, color: string}[],
    secondHeader: {text: string}[],
    stableTextHeader: {text: string, buttonText: string}[],
    homePageHeader: {home: string, menu: string, contacts: string}[],
    cartInfo: {cart: string, buttonSuccess: string, summary: string}[]
} = {
    images : [
        { img: "/images/bianca.svg"},
        { img: "/images/z-gruszka.svg"},
        { img: "/images/4-sery.png" },
        {img: "/images/4-miesa.svg"}
    ],
    header : [
        { name: "Salami", subtitle: "Bianca", description: "...", color: '#E01094' },
        { name: "Pizza with", subtitle: "Pear", description: "...", color: '#940C62' },
        { name: "Pizza", subtitle: "Caesar", description: "...", color: '#43A9F7' },
        { name: "Quattro", subtitle: "Carni", description: "...", color: '#0F7BCE' }
    ],
    secondHeader: [
        {text: "Salami Bianca – a perfect choice for fans of rich flavors and delicate creamy base. On white sauce we add aromatic mushrooms"},
        {text: "Pear Pizza – a unique combination of delicacy and character. On creamy sauce we add juicy slices of pear, arugula and gorgonzola, the whole composition"},
        {text: "Caesar Pizza – a variation on the classic salad. On white sauce you’ll find pieces of juicy chicken, black olives and red onion"},
        {text: "Quattro Carni – a proposal for meat lovers. On aromatic sauce – ham, spicy spianata, crispy frankfurters"}
    ],
    stableTextHeader: [
        {text: "Need more options?", buttonText: "Menu"}
    ],
    homePageHeader: [
        {home: "Home", menu: "Menu", contacts: "Contact"}
    ],
    cartInfo: [
        {cart: "Your basket is empty", buttonSuccess: "Confirm", summary: "Together: "}
    ]
}
export const modalWindowEN: {
    modalInfo: {
      deliveryTime: string;
      deliveryValue: string;
      sum: string;
      extrasTitle: string;
      extrasInfo: string;
      sausInfo: string;
      showMore: string;
      showLess: string;
      addToCartTitle: string;
      amountProduct: string;
      setProd: string;
      setProdInfo: string;
    }[];
  } = {
    modalInfo: [
      {
        deliveryTime: "Delivery time",
        deliveryValue: "30 min",
        sum: "Total",
        extrasTitle: "Extras",
        extrasInfo: "Please select up to 2 extras",
        sausInfo: "Sauces",
        showMore: "Show more",
        showLess: "Show less",
        addToCartTitle: "Add to cart",
        amountProduct: "pcs",
        setProd: "Set",
        setProdInfo: " with fries and ketchup",
      },
    ],
};
  
export const formValuesEN: {
    yourOrder: {
        order: string;
        cartMessage: string;
        allMessage: string;
    }[],
    buttonText: {
        deleteBtn: string;
        detailsBtn: string;
        confirmBtn: string;
        goBackBtn: string;
        nextBtn: string;
    }[],
    formDetails: {
        thankingMsg: string;
        deliveryMsg: string;
        deliveryNumb: string;
        changeForm2: string;
        anotherAmount: string;
        withoutChange: string;
        messageClient: string;
        cashPayment: string;
        cartPayment: string;
        deliveryMessage: string;
    }[],
    custInfo: {
        message: string;
        payment: string;
        changeFrom: string;
        paymentForm: string;
        clientTitle: string;
        phoneNum: string;
        emailData: string;
        nameAndSurname: string
        summaryStep: string
        basketStep: string
        socialMediaTitle: string
    }[],
    adresForm: {
        streetN: string;
        streetNum: string;
        flatNum: string;
        floorNum: string;
        stairCase: string;
        adresTitle: string;
    }[],
    switchBtn: {
        takeAwaySwitch: string,
        deliverySwitch: string
    }[],
} = {
   yourOrder: [
        { order: "Your order", cartMessage: "Your cart is empty", allMessage: "Total" }
   ],
   buttonText: [
        { deleteBtn: "Delete", detailsBtn: "View details →", confirmBtn: "Confirm order", goBackBtn: "Back to menu", nextBtn: "Next →" }
   ],
   formDetails: [
        { thankingMsg: "Thank you for your order!", deliveryMsg: "Estimated delivery time 40-60 minutes", deliveryNumb: "Your order number:", changeForm2: "Give change from:", anotherAmount: "Other amount", withoutChange: "No change needed", messageClient: "Comment (optional)", cashPayment: "Cash", cartPayment: "Card", deliveryMessage: "Card payment is only possible upon delivery to the courier (terminal)." }
   ],
   custInfo: [
        { message: "Comment", payment: "Payment", changeFrom: "Change from", paymentForm: "Select payment method", clientTitle: "Personal Information", phoneNum: "Phone number", emailData: "Email", nameAndSurname: "Name and surname", summaryStep: "Summary", basketStep: "Basket", socialMediaTitle: "Follow us and stay up to date with our latest discounts:" }
   ],
   adresForm: [
        { streetN: "Street name", streetNum: "Street number", flatNum: "Apartment number", floorNum: "Floor (optional)", stairCase: "Staircase (optional)", adresTitle: "Address" }
   ],
   switchBtn: [
    {takeAwaySwitch: "Take away", deliverySwitch: "Delivery"}
    ]
}

export const validationMessageEN: {
    errors: {
      nameMin: string;
      phoneInvalid: string;
      emailInvalid: string;
      streetNameShort: string;
      streetNameChars: string;
      streetNameLetter: string;
      streetNumberEmpty: string;
      streetNumberChars: string;
      flatNumberEmpty: string;
      flatNumberDigits: string;
      flatNumberRange: string;
      floorNumberDigits: string;
      floorNumberInteger: string;
      promoCodeChars: string;
      promoCodeLength: string;
      messageLength: string;
      paymentRequired: string;
    }[];
  } = {
    errors: [
      {
        nameMin: "The name must contain at least 3 letters",
        phoneInvalid: "Invalid phone number",
        emailInvalid: "Invalid email address",
        streetNameShort: "Street name is too short 🥺",
        streetNameChars: "Street name can only contain letters, numbers, and spaces 🥺",
        streetNameLetter: "Street name must contain at least one letter 🥺🥺🥺",
        streetNumberEmpty: "Please enter the street number",
        streetNumberChars: "Street number can only contain digits and letters, e.g. 65E",
        flatNumberEmpty: "Please enter the flat number",
        flatNumberDigits: "Flat number cannot contain letters — only digits",
        flatNumberRange: "Flat number must be in the range 1–999",
        floorNumberDigits: "Floor number must contain only digits",
        floorNumberInteger: "Floor number must be an integer",
        promoCodeChars: "Promo code can only contain letters and digits",
        promoCodeLength: "Promo code is too long",
        messageLength: "Comment is too long (max 200 characters)",
        paymentRequired: "You must choose a payment method 🥺",
      },
    ],
  };
  