
    




/******  ОТЗЫВЫ КЛИЕНТЫ   *****/

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });




// \

const navLinks = document.querySelectorAll('.nav-link[data-goto]');

if(navLinks.length > 0) {
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", onNavLinkClick);
  });


  function onNavLinkClick(e) {
    const navLink = e.target;
    if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().bottom + pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();

    }
  }
}



// CALCULATOR


/* Значение из текстовых инпутов */

const totalCost = document.getElementById('total-cost'),
      creditTerm = document.getElementById('credit-term');



/* Значение из range инпутов */

const totalCostRange = document.getElementById('total-cost-range'),
      creditTermRange = document.getElementById('credit-term-range');



/* Итоговые значения */

const totalAmountOfCredit = document.getElementById('amount-of-credit'),
      totalMonthlyPayment = document.getElementById('monthly-payment');
     




/*  Все range : */

const inputsRange = document.querySelectorAll('.input-range');

/*  Все кнопки с процентной ставки : */

const bankBtns = document.querySelectorAll('.bank');
   




const assignValue = () => {
    totalCost.value = totalCostRange.value;
    creditTerm.value = creditTermRange.value;
}

assignValue();

const banks = [
    
    {
        precents: 5.5
    },
    
]

let currentPrecent = banks[0].precents;



const takeActiveBank = currentActive => {
    const dataAttrValue = currentActive.dataset.name;
    const currentBank = banks.find( bank => bank.name === dataAttrValue);
    currentPrecent = currentBank.precents;
    calculation(totalCost.value, creditTerm.value); 
};

for(let input of inputsRange) {
    input.addEventListener('input', () => {
        assignValue();
        calculation(totalCost.value, creditTerm.value );
    })
}


const calculation = (totalCost = 0, creditTerm = 12) => {
    /*
    ЕП - Ежемсячный платеж
    РК - Размер кредита
    ПС - процентная ставка
    КМ - Количество месяцев





    ЕП = (РК + ((( РК / 100) * ПС) / 12) * КМ) / КМ 

    */


    let monthlyPayment; // ЕП
    let lounAmount = totalCost - 0; // Размер кредита
    let interestRate = currentPrecent; // Процентная ставка
    let numberOfYears = creditTerm; // кол-ва лет 
    // let numberOfMonths = 12 * numberOfYears;


    monthlyPayment = (lounAmount + ( ( (lounAmount / 100) * interestRate) / 12) * numberOfYears) / numberOfYears;
    const monthlyPaymentArounded = Math.floor(monthlyPayment);
    if(monthlyPaymentArounded < 0) {
        return false
    }else {
        
        totalMonthlyPayment.innerHTML = `${monthlyPaymentArounded} руб.`
    }

}



/* POPUP */





totalCostRange.oninput = function () {
  console.log(this.value);
  totalCost.style.marginLeft = this.value  - '2px';
  
}

