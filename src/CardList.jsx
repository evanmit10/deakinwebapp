import React from 'react';
import Card from './Card';
import newsList from './newsList';
const style = {
    display: "flex",
    padding: "20px",
    paddingTop: "190px",
    alignItems: 'center',
    justifyContent: 'center'
}

function cardComponent(news) {
    return (
        <Card
        avatar={news.avatar}
        name={news.name}
        description={news.description}
        />
    )
  
}

const CardList = () => {
    return (
        <div style={style}>
            {newsList.map(cardComponent)}
        </div>
    )

}

export default CardList;