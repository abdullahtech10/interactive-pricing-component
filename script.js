const slider = document.querySelector('#slider')
const pageviewEL = document.querySelector('.pageview')
const priceEl = document.querySelector('.price')
const toggle = document.querySelector('#toggle')
const discountType = document.querySelector('.discount-type')

const plans = [
    {view: '10k', price: 8},
    {view: '50k', price: 12},
    {view: '100k', price: 16},
    {view: '500k', price: 24},
    {view: '1M', price: 36},
]

let yearly = false

function updatePrice(){
    // convert the plan to number
    let plan = plans[slider.value]

    // apply discount
    let price  = yearly ? (plan.price * 0.75).toFixed(2) : plan.price.toFixed(2)

    let billingType  = yearly ? 'year' : 'month'

    pageviewEL.textContent = `${plan.view} pageview`
    priceEl.textContent = `$${price}`
    discountType.textContent = `${billingType}` 

}

toggle.addEventListener('click', function(){
    yearly = !yearly
    toggle.classList.toggle('active')
    updatePrice()
})

slider.addEventListener('input', function(){
    const max = this.max
    const value  = this.value
    const percent = (value / max)* 100

     this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${percent}%, hsl(224, 65%, 95%) ${percent}%)`;
    updatePrice()
})