import React, { Component } from 'react';
import Shop from './components/Shop';
import Sidebar from './components/Sidebar';
import styles from './App.module.css'
const shopData = [
    {"title": "MacBook Air", "cost":120.999, "image":"https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg"},
    {"title": "Ноутбук Irbis NB77 черный", "cost":14.999, "image":"https://c.dns-shop.ru/thumb/st1/fit/500/500/9a5b6e0e1d071821fa7caf458c9a6e6a/81c35d972c3cd0d3801302bcf50234b83bb5de1e44e7f03546d12871e4c65781.jpg.webp"},
    {"title": "Ноутбук Irbis NB262 серебристый", "cost":19.999, "image":"https://c.dns-shop.ru/thumb/st1/fit/500/500/57cd377e3de4840d3ffb111cd1c8a8a4/65d22073a2eaebe119512a71f4700c74f4cb2258f55e1b6d83ca1a47515f2d45.jpg.webp"},
    {"title": "Ноутбук Irbis NB263 черный", "cost":19.999, "image":"https://c.dns-shop.ru/thumb/st4/fit/500/500/bea4b203acabc7bb35bb3dc7d910c9a1/dcb7fe86c27479875bdfc6269b46c6c7d82add6c8faab39a3815b82382e043e0.jpg.webp"},
    {"title": "Ноутбук Irbis NB285 черный", "cost":19.999, "image":"https://c.dns-shop.ru/thumb/st1/fit/500/500/dbcc47054c35ab6461061e04a809f197/b82ece4938d8614e8bd7436657d933e3870e1f164b38f6fe12a07c84ab2f472a.jpg.webp"},
    {"title": "Ноутбук Echips Lite2 серый", "cost":21.999, "image":"https://c.dns-shop.ru/thumb/st1/fit/500/500/3736a80ff001deef907988b8904794fd/f65b6ae7f734bfff653eafbe6c36ed291db0ad1ff9e6c78aefe5540d0e7c0e56.jpg.webp"},

]


class App extends Component {
    render() {
        
        return (
            <div className={styles.main_cl}>
            <Sidebar />
            <div className={styles.main_shop}>
            {shopData.map(item => <Shop title={item.title} cost = {item.cost} image={item.image} />)}
            </div>
            </div>
            
        );
    }
}

export default App;