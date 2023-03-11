window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const passname = params.get('passname');
    const age = params.get('age');
    const phone = params.get('phone');
    const tickets = params.get('people');
    const className = params.get('class');
    var ticketPrice;
    var reservation = 20;
    var totalAmt;

    if (className == "Anubhuti Class (EA)") {
        ticketPrice = 500;
    } else if (className == "AC First Class") {
        ticketPrice = 300;
    } else if (className == "Sleeper(SL)") {
        ticketPrice = 200;
    } else {
        ticketPrice = 100;
    }

    totalAmt = parseInt(ticketPrice) * parseInt(tickets) + 20;

    document.getElementById('result-name').innerHTML = passname;
    document.getElementById('result-age').innerHTML = age;
    document.getElementById('result-phone').innerHTML = phone;
    document.getElementById('result-tickets').innerHTML = tickets;
    document.getElementById('result-class').innerHTML = className;
    document.getElementById('result-ticketPrice').innerHTML = ticketPrice;
    document.getElementById('result-reservation').innerHTML = reservation;
    document.getElementById('result-total').innerHTML = totalAmt;
})