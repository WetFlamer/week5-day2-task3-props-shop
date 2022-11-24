import React, { Component } from 'react';
import styles from './Sidebar.module.css'
class Sidebar extends Component {
    render() {
        return (
            <div className={styles.sidebar}>
                <p>Intocode Coding Shopcamp</p>
                <p>Гаджеты и аксессуары</p>
                <hr />
                <p>Бытовая техника</p>
                <hr />
                <p>Прочее</p>
            </div>
        );
    }
}

export default Sidebar;