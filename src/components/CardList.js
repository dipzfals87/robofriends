import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    // const robots = props.robots;

    // const cardArray = robots.map((robot, i) => {
    //     return (
    //         <Card key={i} 
    //         id={robots[i].id } 
    //         name={robots[i].name} 
    //         email={robots[i].email} 
    //         />
    //     );
    // })

    // utk test ErrorBoundry
    // if (true) {
    //     throw new Error("Noooooo!!!");
    // }

    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card key={i} 
                        id={robots[i].id } 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;