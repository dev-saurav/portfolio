import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Card from '../SkillCard/SkillCard';
import "./HorizontalScroll.css";

// list of items
const list = [
    <img src="https://img.icons8.com/nolan/128/html-5.png" />,
    <img src="https://img.icons8.com/color/128/css3.png" />,
    <img src="https://img.icons8.com/color/128/javascript.png" />,
    <img src="https://img.icons8.com/nolan/128/react-native.png" />,
    <img src="https://img.icons8.com/color/128/redux.png" />,
    <img src="https://img.icons8.com/color/128/mongodb.png" />,
    <img src="https://img.icons8.com/color/128/nodejs.png" />
];

// One item component
// selected prop will be passed
const MenuItem = ({ item }) => {
    return <div className="menu-item">
        <Card>
            {item}
        </Card>
    </div>;
};

// All items component
// Important! add unique key
export const Menu = list =>
    list.map(el => {
        return <MenuItem item={el} />;
    });

const Arrow = ({ text, className }) => {
    return (
        <div style={{ color: "white" }} className={className}>
            {text}
        </div>
    );
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class Scroll extends Component {
    state = {
        selected: 0
    };

    onSelect = key => {
        this.setState({ selected: key });
    };

    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(list, selected);

        return (
            <div className="App">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                />
            </div>
        );
    }
}

export default Scroll;
