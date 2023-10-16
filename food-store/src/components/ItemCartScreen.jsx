import React, { useState } from "react";
import "../styles/ItemCartScreen.css";

const ItemCartScreen = () => {
  // Define a state variable to track the favorite status
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to handle the favorite button click
  const handleFavoriteClick = () => {
    // Toggle the favorite status
    setIsFavorite(!isFavorite);

    // You can add additional logic here, such as saving the favorite status to the server.
  };

  return (
    <div id="main-div">
      <header className="header">
        <div className="cart-header">
          <h2 id="main-heding">Cook</h2>
          <div className="link-button">
            <br />
            <a href="/ItemCartScreen" className="header-button">
              Home
            </a>
            <a href="/FavIteScreen" className="header-button">
              Favorite
            </a>
          </div>
          <a href="/" id="header-icon">
            <img
              src="https://static.thenounproject.com/png/3163172-200.png"
              alt="Logout Icon"
              width="24"
              height="24"
            />
          </a>
        </div>
      </header>
      <br />
      <div className="item-type-bar">
        <button className="item-type-button-bar">Pork</button>
        <button className="item-type-button-bar">Beef</button>
        <button className="item-type-button-bar">Chiken</button>
        <button className="item-type-button-bar">Lamb</button>
        <button className="item-type-button-bar">Pasta</button>
      </div>
      <div className="cart-content-div">
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="cart-item">
          <img
            className="logoicon"
            src="https://img.freepik.com/premium-photo/food-item-background-wallpaper_492154-7058.jpg"
            alt="Profile Pictuer"
          />
          <label className="item-lebel-catagory">Category</label>
          <b>
            <label className="item-lebel-name">Item Name</label>
          </b>

          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCartScreen;
