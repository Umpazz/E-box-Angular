var express = require('express')
var app = express()
var fs = require('fs')
app.set('port', process.env.PORT || 3000)
app.use(express.json());

const data = fs.readFileSync('Bookings.json', 'utf-8');
const bookings = JSON.parse(data);


// List all Bookings
app.get('/listBookings', (req,res) => {
    res.send(bookings);
})

app.get('/bookings/:id', (req,res) => {
    const id = req.params.id;
    if(!bookings[`booking-${id}`]){
        res.send('Booking not found');
    } else {
        res.send(bookings[`booking-${id}`]);
    }
})

app.post('/addBooking', (req,res) => {
    const newBooking = req.body;
    if(!newBooking.movieTitle || !newBooking.userName || !newBooking.numberOfTickets || !newBooking.bookingDate) {
        res.send("Details missing");
    } else {
        const newId = Object.keys(bookings).length + 1;
        bookings[`booking-${newId}`] = {
            "id" : newId,
            ... newBooking
        }
        fs.writeFileSync('Bookings.json', JSON.stringify(bookings));
        res.send(`Booking with id ${newId} added`);
    }
})

app.delete('/deleteBooking/:id', (req,res) => {
    const id = req.params.id;
    if(!bookings[`booking-${id}`]){
        res.send('Booking not found');
    } else {
        delete bookings[`booking-${id}`];
        fs.writeFileSync('Bookings.json', JSON.stringify(bookings));
        res.send(`Booking with id ${id} deleted`);
    }
})

app.put('/updateBooking/:id', (req,res) => {
    const id = req.params.id;
    const updateBooking = req.body;
    if (!updateBooking.movieTitle || !updateBooking.userName || !updateBooking.numberOfTickets || !updateBooking.bookingDate){
        res.send("Details missing !!");
    } else if(`booking-$(id)`){
            bookings[`booking-${id}`] = {
                "id" : id,
                ... updateBooking
            }
            fs.writeFileSync('Bookings.json', JSON.stringify(bookings));
            res.send(`Booking with id ${id} updated`);
    } else {
        res.send("Booking not found");
    }
})

// Fill your code here
// All bookings
/*
app.get('/listBookings', (req,res) => {
    res.send(bookings);
})

// Booking with id
app.get('/bookings/:id', (req,res) => {
    const id = req.params.id;
    if(!bookings[`booking-${id}`]){
        res.send("Booking not found");
    } else {
        res.send(bookings[`booking-${id}`]);
    }
})

// Add booking
app.post('/addBooking', (req,res) => {
    const booking = req.body;
    if(!booking.movieTitle || !booking.userName || !booking.numberOfTickets || !booking.bookingDate) {
        res.send("Details missing");
    } else {
        const newId = Object.keys(bookings).length + 1;
        bookings[`booking-${newId}`] = {
            "id" : newId,
            ... booking
        }
        fs.writeFileSync('Bookings.json', JSON.stringify(bookings));
        res.send(`Booking with id ${newId} added`);
    }
})

// Delete booking
app.delete('/deleteBooking/:id', (req,res) => {
    const id = req.params.id;
    if(!bookings[`booking-${id}`]){
        res.send(`Booking with id ${id} not found`);
    } else {
        delete bookings[`booking-${id}`];
        fs.writeFileSync('Bookings.json', JSON.stringify(bookings));
        res.send(`Booking with id ${id} deleted`);
    }
})

// Update booking
app.put('/updateBooking/:id', (req,res) => {
    const id = req.params.id;
    const booking = req.body;
    if(!bookings[`booking-${id}`]){
        res.send("Booking not found");
    } else if (!booking.movieTitle || !booking.userName || !booking.numberOfTickets || !booking.bookingDate){
        res.send("Details missing");
    } else {
        bookings[`booking-${id}`] = {
            "id" : id,
            ... booking
        }
        fs.writeFileSync('Bookings.json', JSON.stringify(bookings));
        res.send(`Booking with id ${id} updated`);
    }
})
*/

app.listen(app.get('port'))