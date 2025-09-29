export const menuUK: {
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
        {id: "Pizza", pizza: "Піца"},
        {id: "Burgery", burger: "Бургер"},
        {id: "SmashBurgery", smashburger: "Смешбургер"},
        {id: "Przystawki", extras: "Закуски"},
        {id: "Napoje", drinks: "Напої"},
        {id: "Sosy", saus: "Соуси"}
    ],
    pizza: {
        "Маргарита": ["Томатний соус, моцарела, свіжий базилік", 29, "/images/marg.svg", "vege"],
        "Капрічоза": ["Томатний соус, моцарела, шинка, печериці", 34, "/images/capr.svg", ""],
        "Прімавера": ["Томатний соус, моцарела, салямі, печериці", 34, "/images/margarita.svg", ""],
        "Салямі": ["Томатний соус, моцарела, салямі, часник", 34, "/images/margarita.svg", ""],
        "Діабола": ["Томатний соус, моцарела, спіаната, халапеньйо, пластівці чилі", 36, "/images/margarita.svg", "ostry"],
        "Вегетаріана": ["Томатний соус, моцарела, сир фета, цукіні, рукола, в’ялені помідори", 36, "/images/vegetariana.svg", "vege"],
        "Гавайська": ["Томатний соус, моцарела, курка, ананас, кукурудза", 38, "/images/hawajska.svg", ""],
        "Цезар": ["Білий соус, салат, курка, пармезан, червона цибуля, чорні оливки", 38, "/images/margarita.svg", ""],
        "Піца з грушею": ["Томатний соус, моцарела, груша, сир фета, насіння, рукола/шпинат", 38, "/images/z-gruszka.svg", "vege"],
        "Поло BBQ": ["BBQ соус, моцарела, курка на грилі, кукурудза, цибуля зелена, смажена цибуля", 38, "/images/margarita.svg", ""],
        "Мисливська": ["Томатний соус, моцарела, франкфуртки, чорні оливки, пластівці чилі, BBQ соус", 39, "/images/mysliwska.svg", "ostry"],
        "Карне": ["Томатний соус, моцарела, бекон, спіаната, червона цибуля, халапеньйо", 40, "/images/4-miesa.svg", "ostry"],
        "4 Сири": ["Білий соус, моцарела, фета, горгонзола, Ґрана Падано", 39, "/images/4-sery.png", "vege"],
        "Салама Б’янка": ["Білий соус, моцарела, печериці, спіаната, часник, горгонзола", 43, "/images/bianca.svg", ""],
        "Парма": ["BBQ соус, моцарела, прошуто, кукурудза, цибуля зелена, смажена цибуля", 43, "/images/parma.png", ""],
        "Кватро Карні": ["Томатний соус, салямі, шинка, спіаната, франкфуртки, цибуля зелена", 43, "/images/4-miesa.svg", ""],
    },
    burger: {
        "Класичний": ["Булка, яловичина 200 г, салат, помідор, фірмовий соус", 27, "/images/ser-bekon2.png", ""],
        "З чеддером": ["Булка, яловичина 200 г, чеддер, салат, помідор, фірмовий соус", 34, "/images/ser-bekon2.png", ""],
        "Веганський": ["Булка, смажена моцарела в паніровці, в’ялені помідори, смажена цибуля, салат, веганський майонез", 36, "/images/veganski.png", "vege"],
        "Сир Бекон": ["Булка, яловичина 200 г, чеддер, бекон, салат, помідор, фірмовий соус", 37, "/images/ser-bekon2.png", ""],
        "Курка": ["Булка, курка на грилі, салат, помідор, червона цибуля, часниковий соус", 37,"/images/ser-bekon2.png", ""],
        "BBQ": ["Булка, яловичина 200 г, чеддер, бекон, салат, смажена цибуля, BBQ соус", 37, "/images/bekon.svg", ""],
        "Гострий": ["Булка, яловичина 200 г, салат, халапеньйо, соус сriracha, гострий соус", 39, "/images/ser-bekon2.png", "ostry"],
        "Дров’янський": ["Булка, яловичина 200 г, панірований сир, бекон, смажена цибуля, соус дров’янський", 43, "/images/drwala.svg", ""],
        "Гігант": ["Булка, подвійна яловичина, подвійний чеддер, бекон, салат, помідор, фірмовий соус", 52, "/images/ser-bekon2.png", ""]
    },
    smashburger: {
        "Смеш Класичний": ["Вершкова булка, яловичина 100г, солоний огірок, червона цибуля, фірмовий соус", 20, "/images/serowy-smash.svg", ""],
        "Смеш Сирний": ["Вершкова булка, яловичина 100г, подвійний чеддер, солоний огірок, червона цибуля, фірмовий соус", 24, "/images/serowy-smash.svg", ""],
        "Смеш Гострий": ["Вершкова булка, яловичина 100г, чеддер, халапеньйо, фірмовий соус", 25, "/images/serowy-smash.svg", "ostry"],
        "Смеш Бекон": ["Вершкова булка, яловичина 100г, бекон, чеддер, смажена цибуля, фірмовий соус", 29, "/images/serowy-smash.svg", ""],
        "Смеш Яйце&Бекон": ["Вершкова булка, яловичина 100 г, бекон, чеддер, яйце, червона цибуля, фірмовий соус", 31,"/images/egg-bekon.svg", ""],
    },
    extras: {
        "Картопля фрі тонка": ["Тонка картопля фрі з кетчупом", 14, "/images/krazki.png"],
        "Картопля фрі стейкова": ["Стейкова картопля фрі з кетчупом", 15, "/images/krazki.png"],
        "Батат фрі": ["Батат фрі з соусом на вибір", 19, "/images/krazki.png"],
        "Фрі Special": ["З пармезаном і цибулею зеленою, соус на вибір", 19, "/images/krazki.png"],
        "Цибулеві кільця": ["Цибулеві кільця (8 шт.) з соусом на вибір", 19, "/images/krazki.png"],
        "Сирні палички": ["Сирні палички (5 шт.) з соусом на вибір", 19, "/images/krazki.png"],
    },
    drinks: {
        "Кока-кола": ["", 9, "/images/margarita.svg"],
        "Фанта": ["", 9, "/images/margarita.svg"],
        "Спрайт": ["", 9, "/images/margarita.svg"],
        "Вода негазована": ["", 9, "/images/margarita.svg"],
        "Вода газована": ["", 9, "/images/margarita.svg"],
        "On Lemon": ["", 9, "/images/margarita.svg"],
        "On Lemon з грушею": ["", 9, "/images/margarita.svg"],
        "On Lemon з ананасом": ["", 9, "/images/margarita.svg"],
    },
    sos: [
        { name: "Сметанний", img: "/images/sos.png", price: 4 },
        { name: "Часниковий", img: "/images/sos.png",price: 4 },
        { name: "BBQ соус",img: "/images/sos.png", price: 4 },
        { name: "Журавлина",img: "/images/sos.png", price: 4 },
        { name: "Дров’янський", img: "/images/sos.png",price: 4 },
        { name: "Сирний",img: "/images/sos.png", price: 4 },
        { name: "Кетчуп", img: "/images/sos.png",price: 4 },
        { name: "Майонез",img: "/images/sos.png", price: 4 },
        { name: "Медово-гірчичний",img: "/images/sos.png", price: 4 },
        {name: "Spicy майонез",img: "/images/sos.png", price: 5},
        {name: "Pesto майонез",img: "/images/sos.png", price: 5},
        {name: "Оливкова олія",img: "/images/sos.png", price: 5},
        {name: "Часникова олія", img: "/images/sos.png",price: 5},
    ],
    pizzaExtras: [
        { name: "Ананас", price: 4 },
        { name: "Чорні оливки", price: 4 },
        { name: "Червона цибуля", price: 4 },
        { name: "Часник", price: 4 },
        { name: "Халапеньйо", price: 4 },
        { name: "Кукурудза", price: 4 },
        { name: "Волоські горіхи", price: 4 },
        { name: "Пластівці чилі", price: 4 },
        { name: "Помідори черрі", price: 4 },
        { name: "Смажена цибуля", price: 4 },
        { name: "Рукола", price: 4 },
        { name: "В’ялені помідори", price: 4 },
        { name: "Цибуля зелена", price: 4 },
        { name: "Grana Padano", price: 5 },
        { name: "Горгонзола", price: 5 },
        { name: "Печериці", price: 5 },
        { name: "Сир фета", price: 5 },
        { name: "Бекон", price: 6 },
        { name: "Франкфуртки", price: 6 },
        { name: "Курка", price: 6 },
        { name: "Прошутто", price: 6 },
        { name: "Салямі", price: 6 },
        { name: "Спіаната", price: 6 },
        { name: "Шинка", price: 6 },
    ],
    burgerOptions: [
        {name: "Червона цибуля", price: 4},
        {name: "Халапеньйо", price: 4},
        {name: "Пластівці чилі", price: 4},
        {name: "Помідор", price: 4},
        {name: "В’ялені помідори", price: 4},
        {name: "Смажена цибуля", price: 4},
        {name: "Салат", price: 4},
        {name: "Чеддер", price: 5},
        {name: "Бекон", price: 6}
    ],
    smashOptions: [
        {name: "Подвійне м’ясо", price: 8},
        {name: "Червона цибуля", price: 4},
        {name: "Халапеньйо", price: 4},
        {name: "Пластівці чилі", price: 4},
        {name: "Помідор", price: 4},
        {name: "В’ялені помідори", price: 4},
        {name: "Смажена цибуля", price: 4},
        {name: "Салат", price: 4},
        {name: "Чеддер", price: 5},
        {name: "Бекон", price: 6}
    ]
}

export const textUK : {
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
        { name: "Салямі", subtitle: "Б’янка", description: "...", color: '#E01094' },
        { name: "Піца з", subtitle: "Грушею", description: "...", color: '#940C62' },
        { name: "Піца", subtitle: "Цезар", description: "...", color: '#43A9F7' },
        { name: "Кватро", subtitle: "Карні", description: "...", color: '#0F7BCE' }
    ],
    secondHeader: [
        {text: "Салямі Б’янка – ідеальна пропозиція для шанувальників насичених смаків і ніжної вершкової основи. На білому соусі ми викладаємо ароматні печериці"},
        {text: "Піца з грушею – це унікальне поєднання ніжності та характеру. На вершковому соусі ми викладаємо соковиті скибки груші, руколу та горгонзолу, вся композиція"},
        {text: "Піца Цезар – варіація на тему класичного салату. На білому соусі знайдеш шматочки соковитої курки, чорні оливки та червону цибулю"},
        {text: "Кватро Карні – пропозиція для любителів м’ясних смаків. На ароматному соусі – шинка, пікантна спіаната, хрусткі франкфуртки"}
    ],
    stableTextHeader: [
        {text: "Потрібно більше варіантів?", buttonText: "Меню"}
    ],
    homePageHeader: [
        {home: "Головна", menu: "Меню", contacts: "Контакт"}
    ],
    cartInfo: [
        {cart: "Ваш кошик порожній", buttonSuccess: "Підтвердити", summary: "All: "}
    ]
}

export const modalWindowUK: {
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
        deliveryTime: "Час доставки",
        deliveryValue: "30 хв",
        sum: "Сума",
        extrasTitle: "Додатки",
        extrasInfo: "Будь ласка, оберіть не більше 2 додатків",
        sausInfo: "Соуси",
        showMore: "Показати більше",
        showLess: "Показати менше",
        addToCartTitle: "Додати до кошика",
        amountProduct: "шт",
        setProd: "Набір",
        setProdInfo:  "з картоплею фрі та кетчупом",
      },
    ],
};

export const formValuesUK: {
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
        nameAndSurname: string;
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
        { order: "Ваше замовлення", cartMessage: "Ваш кошик порожній", allMessage: "Разом" }
   ],
   buttonText: [
        { deleteBtn: "Видалити", detailsBtn: "До деталей →", confirmBtn: "Підтвердити замовлення", goBackBtn: "Повернутися до меню", nextBtn: "Далі →" }
   ],
   formDetails: [
        { thankingMsg: "Дякуємо за ваше замовлення!", deliveryMsg: "Час очікування 40-60 хвилин", deliveryNumb: "Номер вашого замовлення:", changeForm2: "Видати решту з:", anotherAmount: "Інша сума", withoutChange: "Решта не потрібна", messageClient: "Коментар (необов’язково)", cashPayment: "Готівка", cartPayment: "Картка", deliveryMessage: "Оплата карткою можлива лише при отриманні у кур'єра (термінал)." }
   ],
   custInfo: [
        { message: "Коментар", payment: "Оплата", changeFrom: "Решта з", paymentForm: "Вибір способу оплати", clientTitle: "Особисті дані", phoneNum: "Номер телефону", emailData: "Електронна пошта", nameAndSurname: "Ім’я та прізвище", summaryStep: "Резюме", basketStep: "Кошик", socialMediaTitle:"Підписуйтесь на нас та будьте в курсі наших останніх знижок:"}
   ],
   adresForm: [
        { streetN: "Назва вулиці", streetNum: "Номер вулиці", flatNum: "Номер квартири", floorNum: "Поверх (необов’язково)", stairCase: "Під’їзд (необов’язково)", adresTitle: "Адреса" }
   ],
   switchBtn: [
    {takeAwaySwitch: "Cамовивіз", deliverySwitch: "Доставка"}
    ]
}

export const validationMessageUK: {
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
        nameMin: "Ім’я повинно містити щонайменше 3 літери",
        phoneInvalid: "Невірний номер телефону",
        emailInvalid: "Невірна адреса електронної пошти",
        streetNameShort: "Назва вулиці занадто коротка 🥺",
        streetNameChars: "Назва вулиці може містити лише літери, цифри та пробіли 🥺",
        streetNameLetter: "Назва вулиці повинна містити щонайменше одну літеру 🥺🥺🥺",
        streetNumberEmpty: "Введіть номер будинку",
        streetNumberChars: "Номер будинку може містити лише цифри та літери, напр. 65E",
        flatNumberEmpty: "Введіть номер квартири",
        flatNumberDigits: "Номер квартири не може містити літери — лише цифри",
        flatNumberRange: "Номер квартири повинен бути в межах від 1 до 999",
        floorNumberDigits: "Номер поверху повинен містити лише цифри",
        floorNumberInteger: "Номер поверху повинен бути цілим числом",
        promoCodeChars: "Промокод може містити лише літери та цифри",
        promoCodeLength: "Промокод занадто довгий",
        messageLength: "Коментар занадто довгий (макс. 200 символів)",
        paymentRequired: "Ви повинні вибрати спосіб оплати 🥺",
      },
    ],
  };

export const HomeTextUK : {
    homeText: {
        promotion: string,
        bestGraded: string,
        addToCart: string
    }[]
} = {
    homeText: [
        {promotion: "СУПЕРАКЦІЯ! БЕЗКОШТОВНА ДОСТАВКА ВІД 50 ЗЛОТИХ!", bestGraded: "Найкраще оцінені позиції", addToCart: "додати до кошика"}
    ]
}