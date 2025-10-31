export const menuPL: {
    title: {id: string; pizza?: string; burger?: string; smashburger?: string; extras?: string; drinks?: string; saus?: string;}[];
    pizza: Record<string, [string, number, string, string?]>,
    burger: Record<string, [string, number, string, string?]>,
    smashburger: Record<string, [string, number, string, string?]>,
    extras: Record<string, [string, number, string]>,
    drinks: Record<string, [string, number, string]>,
    sos: {name: string, img: string, price: number}[]
    pizzaExtras: {name: string, price: number}[]
    burgerOptions: {name: string, price: number}[]
    smashOptions: {name: string, price: number}[],
} = {
    title: [
        {id: "Pizza", pizza: "Pizza"},
        {id: "Burgery", burger: "Burgery"},
        {id: "Smashburgery", smashburger: "Smashburgery"},
        {id: "Przystawki", extras: "Przystawki"},
        {id: "Napoje", drinks: "Napoje"},
        {id: "Sosy", saus: "Sosy"}
    ],
    pizza: {
        "Margarita": ["Sos pomidorowy, mozzarella, świeża bazylia", 29, "/images/marg.svg", "vege"],
        "Capricciosa": ["Sos pomidorowy, mozzarella, szynka, pieczarki", 34, "/images/capr.svg", ""],
        "Primavera": ["Sos pomidorowy, mozzarella, salami, pieczarki", 34, "/images/margarita.svg", ""],
        "Salami": ["Sos pomidorowy, mozzarella, salami, czosnek", 34, "/images/margarita.svg", ""],
        "Diabola": ["Sos pomidorowy, mozzarella, spianata, jalapeño, płatki chili", 36, "/images/margarita.svg", "ostra"],
        "Vegetariana": ["Sos pomidorowy, mozzarella, ser feta, cukinia, rukola, suszone pomidory", 36, "/images/vegetariana.svg", "vege"],
        "Hawajska": ["Sos pomidorowy, mozzarella, kurczak, ananas, kukurydza", 38, "/images/hawajska.svg", ""],
        "Cezar": ["Sos biały, sałata, kurczak, parmezan, czerwona cebula, czarne oliwki", 38, "/images/margarita.svg", ""],
        "Pizza z gruszką": ["Sos pomidorowy, mozzarella, gruszka, ser feta, nasiona, rukola/szpinak", 38, "/images/z-gruszka.svg", "vege"],
        "Pollo BBQ": ["Sos BBQ, mozzarella, grillowany kurczak, kukurydza, szczypiorek, prażona cebula", 38, "/images/margarita.svg", ""],
        "Myśliwska": ["Sos pomidorowy, mozzarella, frankfurterki, czarne oliwki, płatki chili, sos BBQ", 39, "/images/mysliwska.svg", "ostra"],
        "Carne": ["Sos pomidorowy, mozzarella, boczek, spianata, czerwona cebula, papryczki jalapeño", 40, "/images/4-miesa.svg", "ostra"],
        "4 Sery": ["Sos biały, mozzarella, feta, gorgonzola, Grana Padano", 39, "/images/4-sery.png", "vege"],
        "Salama Bianca": ["Sos biały, mozzarella, pieczarki, spianata, czosnek, gorgonzola", 43, "/images/bianca.svg", ""],
        "Parma": ["Sos BBQ, mozzarella, prosciutto, kukurydza, szczypiorek, prażona cebula", 43, "/images/parma.png", ""],
        "Quattro Carni": ["Sos pomidorowy, salami, szynka, spianata, frankfurterki, szczypiorek", 43, "/images/4-miesa.svg", ""],
    },
    burger: {
        "Klasyczny": ["Bułka, wołowina 200 g, sałata, pomidor, sos autorski", 27, "/images/ser-bekon2.png", ""],
        "Z cheddarem": ["Bułka, wołowina 200 g, cheddar, sałata, pomidor, sos autorski", 34, "/images/ser-bekon2.png", ""],
        "Veganski": ["Bułka, mozzarella smażona w panierce, pomidory suszone, cebula prażona, sałata, wegańskie mayo", 36, "/images/veganski.png", "vege"],
        "Ser Bekon": ["Bułka, wołowina 200 g, cheddar, boczek, sałata, pomidor, sos autorski", 37, "/images/ser-bekon2.png", ""],
        "Kurczak": ["Bułka, grillowany kurczak, sałata, pomidor, czerwona cebula, sos czosnkowy", 37,"/images/ser-bekon2.png", ""],
        "BBQ": ["Bułka, wołowina 200 g, cheddar, bekon, sałata, prażona cebula, sos BBQ", 37, "/images/bekon.svg", ""],
        "Ostry": ["Bułka, wołowina 200 g, sałata, papryczki jalapeño, sos sriracha, sos spicy", 39, "/images/ser-bekon2.png", "ostry"],
        "Drwalski": ["Bułka, wołowina 200 g, panierowany ser, bekon, prażona cebula, sos drwalski", 43, "/images/drwala.svg", ""],
        "Gigant": ["Bułka, podwójna wołowina, podwójny cheddar, bekon, sałata, pomidor, sos autorski", 52, "/images/ser-bekon2.png", ""]
    },
    smashburger: {
        "Smash Klasyczny": ["Maślana bułka, wołowina 100g, ogórek kiszony, czerwona cebula, sos firmowy", 20, "/images/serowy-smash.svg", ""],
        "Smash Serowy": ["Maślana bułka, wołowina 100g, podwójny cheddar, ogórek kiszony, czerwona cebula, sos firmowy", 24, "/images/serowy-smash.svg", ""],
        "Smash Ostry": ["Maślana bułka, wołowina 100g, cheddar, papryczki jalapeño, sos firmowy", 25, "/images/serowy-smash.svg", "ostry"],
        "Smash Bekon": ["Maślana bułka, wołowina 100g, bekon, cheddar, prażona cebula, sos firmowy", 29, "/images/serowy-smash.svg", ""],
        "Smash Egg&Bekon": ["Maślana bułka, wołowina 100 g, bekon, cheddar, jajko sadzone, czerwona cebula, sos firmowy", 31,"/images/egg-bekon.svg", ""],
    },
    extras: {
        "Frytki cienkie": ["Frytki cienkie z ketchupem", 14, "/images/krazki.png"],
        "Frytki stekowe": ["Frytki stekowe z ketchupem", 15, "/images/krazki.png"],
        "Frytki z batatów": ["Frytki z batatów z sosem do wyboru", 19, "/images/krazki.png"],
        "Frytki Special": ["Z parmezanem i szczypiorkiem, sos do wyboru", 19, "/images/krazki.png"],
        "Krążki cebulowe ": ["Krążki cebulowe (8 szt.) z sosem do wyboru", 19, "/images/krazki.png"],
        "Mozzarella sticks": ["Mozzarella sticks (5 szt.) z sosem do wyboru", 19, "/images/krazki.png"],

    },
    drinks: {
        "Coca-cola": ["", 9, "/images/margarita.svg"],
        "Fanta": ["", 9, "/images/margarita.svg"],
        "Sprite": ["", 9, "/images/margarita.svg"],
        "Woda niegazowana": ["", 9, "/images/margarita.svg"],
        "Woda gazowana": ["", 9, "/images/margarita.svg"],
        "On Lemon": ["", 9, "/images/margarita.svg"],
        "On Lemon z Gruszka": ["", 9, "/images/margarita.svg"],
        "On Lemon z Ananasem": ["", 9, "/images/margarita.svg"],
    },
    sos: [
        { name: "Śmietanowy", img: "/images/sos.png", price: 4 },
        { name: "Czosnkowy", img: "/images/sos.png",price: 4 },
        { name: "BBQ sos ",img: "/images/sos.png", price: 4 },
        { name: "Żurawlina",img: "/images/sos.png", price: 4 },
        { name: "Drwalski", img: "/images/sos.png",price: 4 },
        { name: "Serowy",img: "/images/sos.png", price: 4 },
        { name: "Ketchup", img: "/images/sos.png",price: 4 },
        { name: "Mayonez",img: "/images/sos.png", price: 4 },
        { name: "Miodowo-musztardowy",img: "/images/sos.png", price: 4 },
        {name: "Spicy mayo",img: "/images/sos.png", price: 5},
        {name: "Pesto mayo",img: "/images/sos.png", price: 5},
        {name: "Oliwa z oliwek",img: "/images/sos.png", price: 5},
        {name: "Oliwa czosnkowa", img: "/images/sos.png",price: 5},
    ],
    pizzaExtras: [
        { name: "Ananas", price: 4 },
        { name: "Czarne oliwki", price: 4 },
        { name: "Czerwona cebula", price: 4 },
        { name: "Czosnek", price: 4 },
        { name: "Jalapeńo", price: 4 },
        { name: "Kukurydza", price: 4 },
        { name: "Orzechi włoskie", price: 4 },
        { name: "Platki chilli", price: 4 },
        { name: "Pomidorki koktajlowe", price: 4 },
        { name: "Prazona cebula", price: 4 },
        { name: "Rukola", price: 4 },
        { name: "Suszone pomidory", price: 4 },
        { name: "Szczypiorek", price: 4 },
        { name: "Grana Padano", price: 5 },
        { name: "Gorgonzola", price: 5 },
        { name: "Pieczarki", price: 5 },
        { name: "Ser feta", price: 5 },
        { name: "Boczek", price: 6 },
        { name: "Frankfruterki", price: 6 },
        { name: "Kurczak", price: 6 },
        { name: "Prosciutto", price: 6 },
        { name: "Salami", price: 6 },
        { name: "Spianata", price: 6 },
        { name: "Szynka", price: 6 },

    ],
    burgerOptions: [
        {name: "Czerwona cebula", price: 4},
        {name: "Jalapeńo", price: 4},
        {name: "Platki chilli", price: 4},
        {name: "Pomidor", price: 4},
        {name: "Pomidory suszone", price: 4},
        {name: "Prazona cebula", price: 4},
        {name: "Sałata", price: 4},
        {name: "Cheddar", price: 5},
        {name: "Boczek", price: 6}
    ],
    smashOptions: [
        {name: "Podwojne mieso", price: 8},
        {name: "Czerwona cebula", price: 4},
        {name: "Jalapeńo", price: 4},
        {name: "Platki chilli", price: 4},
        {name: "Pomidor", price: 4},
        {name: "Pomidory suszone", price: 4},
        {name: "Prazona cebula", price: 4},
        {name: "Sałata", price: 4},
        {name: "Cheddar", price: 5},
        {name: "Boczek", price: 6}
    ]
}

export const textPL : {
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
        { name: "Pizza z", subtitle: "Gruszką", description: "...", color: '#940C62' },
        { name: "Pizza", subtitle: "Cezar", description: "...", color: '#43A9F7' },
        { name: "Quatro", subtitle: "Carni", description: "...", color: '#0F7BCE' }
    ],
    secondHeader: [
        {text: "Salami Bianca to idealna propozycja dla fanów intensywnych smaków i kremowej bazy. Śmietanowy sos, gorgonzola, piecxarki i pikanta spianata."},
        {text: "Pizza z Gruszką to wyjątkowe połączenie delikatności i charakteru. Na kremowym sosie układamy soczyste plastry gruszki, rukolę i gorgonzolę"},
        {text: "Pizza Cezar to wariacja na temat klasycznej sałatki. Na sosie śmietanowym znajdziesz kawałki soczystego kurczaka, czarne oliwki i czerwoną cebulkę "},
        {text: "Quatro Carni to propozycja dla miłośników mięsnych smaków. Znajdziesz szynkę, pikantną spianatę, chrupiące frankfurterki i soczysty boczek"}
    ],
    stableTextHeader: [
        {text: "Potrzebujesz więcej opcji?", buttonText: "Menu"}
    ],
    homePageHeader: [
        {home: "Główna", menu: "Menu", contacts: "Kontakt"}
    ],
    cartInfo: [
        {cart: "Twój koszyk jest pusty", buttonSuccess: "Potwierdź", summary: "Razem "}
    ]
}

export const modalWindowPL: {
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
      setProdInfo: string,
    }[];
  } = {
    modalInfo: [
      {
        deliveryTime: "Czas dostawy",
        deliveryValue: "30 min",
        sum: "Suma",
        extrasTitle: "Dodatki",
        extrasInfo: "Prosimy wybrać maksymalnie 2 dodatki",
        sausInfo: "Sosy",
        showMore: "Pokaż więcej",
        showLess: "Pokaż mniej",
        addToCartTitle: "Dodaj do koszyka",
        amountProduct: "szt",
        setProd: "Zestaw",
        setProdInfo: " z frytkami i ketchupem"
      },
    ],
  };
  
export const formValuesPL: {
    yourOrder: {
        order: string;
        cartMessage: string
        allMessage: string
    }[],
    buttonText: {
        deleteBtn: string,
        detailsBtn: string,
        confirmBtn: string,
        goBackBtn: string,
        nextBtn: string
    }[],
    formDetails: {
        thankingMsg: string,
        deliveryMsg: string,
        deliveryNumb: string
        changeForm2: string
        anotherAmount: string
        withoutChange: string
        messageClient: string
        cashPayment: string
        cartPayment: string
        deliveryMessage: string
    }[],
    custInfo: {
        message: string
        payment: string
        changeFrom: string
        paymentForm: string
        clientTitle: string
        phoneNum: string
        emailData: string
        nameAndSurname: string
        summaryStep: string,
        basketStep: string
        socialMediaTitle: string
    }[],
    adresForm: {
        streetN: string,
        streetNum: string,
        flatNum: string,
        floorNum: string,
        stairCase: string
        adresTitle: string
    }[],
    switchBtn: {
        takeAwaySwitch: string,
        deliverySwitch: string
    }[]
} = {
   yourOrder: [
        {order: "Twoje zamówienie", cartMessage: "Twój koszyk jest pusty", allMessage: "Razem"}
   ],
   buttonText: [
        {deleteBtn: "Usuń", detailsBtn: "Do szczegółów →", confirmBtn: "Potwierdź zamówienie", goBackBtn: "Powrót do menu", nextBtn: "Dalej →"}
   ],
   formDetails: [
        {thankingMsg: "Dziękujemy za zamówienie!", deliveryMsg: "Czas oczekiwania 40-60 minut", deliveryNumb: "Numer twojego zamówienia:", changeForm2: "Wydaj resztę od:", anotherAmount: "Inna kwota", withoutChange: "Nie potrzebuję resztę", messageClient: "Komentarz (opcjonalnie)", cashPayment: "Gotówka", cartPayment: "Karta", deliveryMessage: " Płatność kartą odbywa się wyłącznie przy odbiorze u kuriera (terminal)."}
   ],
   custInfo: [
    {message: "Komentarz", payment: "Płatność", changeFrom: "Reszta z", paymentForm: "Wybór metody płatności", clientTitle: "Dane Osobowe", phoneNum: "Numer telefonu", emailData: "Email", nameAndSurname: "Imię i nazwisko", summaryStep: "Posumowanie", basketStep: "Koszyk", socialMediaTitle: " Zaobserwuj nas i śledź zniżki na bieżąco:"}
   ],
   adresForm: [
    {streetN: "Nazwa ulicy", streetNum: "Numer ulicy", flatNum: "Numer mieszkania", floorNum: "Piętro (opcjonalnie)", stairCase: "Klatka (opcjonalnie)", adresTitle: "Adres" }
   ],
   switchBtn: [
        {takeAwaySwitch: "Odbiór", deliverySwitch: "Dostawa"}
   ]
}

export const validationMessagePL: {
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
        nameMin: "Imie musi zawierać przynajmniej 3 litery",
        phoneInvalid: "Niepoprawny numer telefonu",
        emailInvalid: "Niepoprawny adres email",
        streetNameShort: "Za krótka nazwa ulicy 🥺",
        streetNameChars: "Nazwa ulicy może zawierać tylko litery, cyfry i spacje 🥺",
        streetNameLetter: "Nazwa ulicy musi zawierać przynajmniej jedną literę 🥺🥺🥺",
        streetNumberEmpty: "Podaj numer ulicy",
        streetNumberChars: "Numer ulicy może zawierać tylko cyfry i litery, np. 65E",
        flatNumberEmpty: "Podaj numer mieszkania",
        flatNumberDigits: "Numer mieszkania nie może składać się z liter — tylko cyfry",
        flatNumberRange: "Podaj numer mieszkania w zakresie 1-999",
        floorNumberDigits: "Numer piętra musi zawierać tylko cyfry",
        floorNumberInteger: "Numer piętra musi być liczbą całkowitą",
        promoCodeChars: "Kod promocyjny może zawierać tylko litery i cyfry",
        promoCodeLength: "Kod promocyjny jest za długi",
        messageLength: "Komentarz jest za długi (max 200 znaków)",
        paymentRequired: "Musisz wybrać metodę płatności 🥺",
      },
    ],
  };
  
export const HomeTextPL : {
    homeText: {
        promotion: string,
        bestGraded: string,
        addToCart: string
    }[]
} = {
    homeText: [
        {promotion: "SUPER PROMOCJA! DARMOWA DOSTAWA OD 50ZŁ!", bestGraded: "Najlepiej oceniane pozycje", addToCart: "dodaj do koszyka"}
    ]
}