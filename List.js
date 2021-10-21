import React from 'react'
const List = ({item}) => {
    return (
        <div>
                {item.map(function(items){
                    return(
                        <>
                        <li>
                            <span>link:<a href={items.url}>{items.title}</a></span><br/>
                             <span>author name:{items.author}</span><br/>
                            <span>number of comments:{items.num_comments}</span><br/>
                            <span>points:{items.points}</span><br/>
                        </li>
                        <hr></hr>
                        </>
                    )
                })}
        </div>
    );
}

export default List;
