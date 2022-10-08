import React from 'react'
import { Link } from 'react-router-dom'

import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://news.cgtn.com/news/3d3d514e7967544d32457a6333566d54/img/3ae4b44a737641a18191bcb9e9d6db98/3ae4b44a737641a18191bcb9e9d6db98.jpg" alt="" />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 5 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae iure quia. Et iste numquam optio unde quam amet iure blanditiis quisquam. Cumque recusandae iste exercitationem facere, nam quaerat ipsam.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim dignissimos natus ab necessitatibus veritatis? Incidunt quia quos id possimus nostrum repellendus deleniti modi dolorum quaerat, fugit expedita ipsa ipsam beatae soluta sapiente repellat eveniet, distinctio ducimus. Rem temporibus aperiam amet maiores optio, totam aliquam. Mollitia voluptatem cumque dolor similique exercitationem dignissimos enim, aliquam culpa veritatis eaque labore suscipit nemo repudiandae nobis molestias iste? Adipisci nam atque eum cumque officiis assumenda incidunt, aliquid minus quia doloremque esse fugiat voluptatem quasi provident dignissimos sed in facilis vitae at facere velit explicabo magni perferendis hic. Perspiciatis, totam culpa minus rerum vero cumque, quis accusantium illum eaque nihil ut amet error id porro quos sunt perferendis dolores quidem pariatur nulla esse? Consectetur fugit molestias est sunt id cupiditate. Atque ut ipsum, aperiam repellendus delectus dolores impedit est laborum quisquam obcaecati similique doloremque voluptates quas earum unde, fuga minus vero. Autem iusto accusamus distinctio nulla iste assumenda quaerat magnam atque natus velit ab repudiandae, necessitatibus quam neque cumque, error sed placeat quos rem exercitationem sequi, possimus vel. Iste magnam ullam dolore, quis modi repudiandae odit, iusto quos delectus totam cum excepturi nisi tempora! Eius voluptatem nostrum quis eveniet iusto necessitatibus deleniti, ratione consequuntur nobis.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single