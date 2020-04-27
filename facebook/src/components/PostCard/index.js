import React, { Component } from "react";

import "./styles.css";

function PostCard() {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-header__img">
          <img src="https://picsum.photos/100/150" />
        </div>

        <div className="post-header__info">
          <div className="post-user">Júlio Alcantara</div>
          <div class="post-date">04 Jun 2019</div>
        </div>
      </div>

      <div className="post-message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        earum culpa quos doloribus sapiente mollitia totam nemo natus facilis
        saepe optio in, unde id blanditiis ipsa officia at ipsum neque.
      </div>
    </div>
  );
}

export default PostCard;
