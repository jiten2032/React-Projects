import React, { Component } from 'react';
import Restaurant from './Restaurant';
import Navbar from './Navbar';
import './RestaurantDetails.css';

export class RestaurantDetails extends Component {
    constructor() {
        super()
        this.state = {
            Data: [
                {
                    Img: 'https://source.unsplash.com/600x300/?Biryani',
                    Name: 'Bhubaneswar Taste Factory',
                    Type: "Quick Bites - Fast Food, Odia, Biryani",
                    Cost: '₹400 for two people (approx.)',
                    Time: 'Open Now - 11:30am - 11pm (Today)',
                    PaymentMethods: 'Cash and Cards accepted',
                    Location:'Sahid Nagar',
                    Stars: 3.2,
                    Votes: '26 votes',
                    Reviews: '50 reviews',
                    Order: 'Order Online',
                    id: 1


                },
                {
                    Img: 'https://source.unsplash.com/600x300/?salad',
                    Name: 'The Olives',
                    Type: "Casual Dining - Salad, North Indian, Chinese, Fast Food, Beverages",
                    Cost: '₹500 for two people (approx.)',
                    Time: 'Open now - 12noon - 1am(Today)',
                    PaymentMethods: 'Cash only',
                    Location:'Nayapalli',
                    Stars: 2.9,
                    Votes: '25 votes',
                    Reviews: '88 reviews',
                    Order: 'Order Online',
                    id: 2
                },
                {
                    Img: 'https://source.unsplash.com/600x300/?italianfood',
                    Name: 'Bling It On - Hotel Marrion',
                    Type: "Casual Dining - Continental, Italian, Mexican",
                    Cost: '₹1,400 for two people (approx.) Without alcohol',
                    Time: 'Open now - 12noon - 1am(Today)',
                    PaymentMethods: 'Cash and Cards accepted',
                    Location:'Kharbela Nagar',
                    Stars: 4.4,
                    Votes: '402 votes',
                    Reviews: '263 reviews',
                    Order: 'Order Online',
                    id: 3

                },
                {
                    Img: 'https://source.unsplash.com/600x300/?fastfood',
                    Name: 'Green Chillyz',
                    Type: "Quick Bites - Fast Food, Biryani",
                    Cost: '₹300 for two people (approx.)',
                    Time: 'Open now - 11am - 10:30pm',
                    PaymentMethods: 'Cash and Cards accepted Digital payments accepted',
                    Location: 'Patia',
                    Stars: 4.0,
                    Votes: '766 votes',
                    Reviews: '3875 reviews',
                    Order: 'Order Online',
                    id: 4

                },
                {
                    Img: 'https://source.unsplash.com/600x300/?northindianfood',
                    Name: 'Burnt Indian Cloud Kitchen',
                    Type: "Quick Bites - North Indian, Chinese, BBQ",
                    Cost: '₹250 for two people (approx.)',
                    Time: 'Open now - 7am - 11:30pm',
                    PaymentMethods: 'Cash only',
                    Location: 'Patia',
                    Stars: 3.5,
                    Votes: '209 votes',
                    Reviews: '1001 reviews',
                    Order: 'Order Online',
                    id: 5

                },
                {
                    Img: 'https://source.unsplash.com/600x300/?chinesefood',
                    Name: 'Moody Joint',
                    Type: "Quick Bites - Chinese, Fast Food",
                    Cost: '₹300 for two people (approx.)',
                    Time: 'Open now - 11am - 11pm (Today)',
                    PaymentMethods: 'Cash only',
                    Location: 'Patia',
                    Stars: 4.1,
                    Votes: '106 votes',
                    Reviews: '200 reviews',
                    Order: 'Order Online',
                    id: 6

                },
                {
                    Img: 'https://source.unsplash.com/600x300/?juices',
                    Name: 'Bombay Times',
                    Type: "Food Court - Street Food, Maharashtrian, Rolls, Juices",
                    Cost: '₹200 for two people (approx.)',
                    Time: 'Open now - 10:30am - 9:30pm (Today)',
                    PaymentMethods: 'Cash and Cards accepted Digital payments accepted',
                    Location: 'Rasulgarh',
                    Stars: 4.3,
                    Votes: '50 votes',
                    Reviews: '26 reviews',
                    Order: 'Order Online',
                    id: 7

                },
            ]
        }
    }

    render() {
        const { Data } = this.state;
        return (
            <div>
                <Navbar />
                <Restaurant Mydata={Data} />

            </div>
        )
    }
}

export default RestaurantDetails
