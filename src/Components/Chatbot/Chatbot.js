import React, { useState } from "react";
import "./Chatbot.css"; // For styling the chatbot

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to The Brew! I'm your friendly barista. How can I help you today? Here are some options: Seasonal Drinks, Classics, Frappuccinos, Specialty Drinks, Tea, Whole Coffee, or Pastries. Let me know what you're in the mood for!",
    },
  ]);
  const [open, setOpen] = useState(false); // State to control open/close
  const [orderingItem, setOrderingItem] = useState(null); // State to track item being ordered

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const drinksList = {
      "Seasonal Drinks": ["Pumpkin Spice Latte", "Cinnamon Roll"],
      Classics: [
        "Classic Brew",
        "Hand Brewed",
        "Espresso",
        "Caramel Macchiato",
        "Mocha",
        "Americano",
        "Cappuccino",
        "Latte",
        "Flat White",
      ],
      Frappuccinos: [
        "Pumpkin Spice Frappuccino",
        "Mocha Frappuccino",
        "Apple Crisp Frappuccino",
        "Espresso Frappuccino",
        "Caramel Frappuccino",
        "Caffé Vanilla Frappuccino",
      ],
      "Specialty Drinks": [
        "La Palma",
        "Affogato",
        "Smashing Pumpkin",
        "Matcha",
        "Chai",
      ],
      Tea: ["Sweet/Unsweet", "Green", "Earl Grey", "Decaf", "Cinnamon Spice"],
      "Whole Coffee": ["956 Blend", "Colombia Blend", "Ethiopia Blend"],
      Pastries: [
        "Chocolate Chip Cookie",
        "Brownie",
        "Banana Muffin",
        "Banana Bread",
        "Chocolate Muffin",
        "Cinnamon Roll",
      ],
    };

    const categories = Object.keys(drinksList);
    let foundCategory = categories.find((category) =>
      input.toLowerCase().includes(category.toLowerCase())
    );

    let foundItem = Object.values(drinksList)
      .flat()
      .find((item) => input.toLowerCase().includes(item.toLowerCase()));

    let responseText = "";

    // If the user is ready to order
    if (orderingItem) {
      if (input.toLowerCase().includes("yes") || input.toLowerCase().includes("order")) {
        responseText = `Great choice! While we don't accept online orders, you can come by The Brew to enjoy your ${orderingItem}. We're looking forward to serving you!`;
        setOrderingItem(null); // Reset ordering state after confirming
      } else {
        responseText = `No worries! If you change your mind or need more suggestions, feel free to ask!`;
        setOrderingItem(null); // Reset ordering state
      }
    } 
    // If user inquires about a specific item
    else if (foundItem) {
      responseText = `Oh, ${foundItem} is a popular pick! We can't wait for you to try it in person. Would you like to visit The Brew to give it a try?`;
      setOrderingItem(foundItem); // Set the item being considered for order
    } 
    // If user mentions a category of drinks
    else if (foundCategory) {
      responseText = `Here are the available ${foundCategory.toLowerCase()} options: ${drinksList[foundCategory].join(
        ", "
      )}. Which one would you like to try when you visit?`;
    } 
    // If the user describes a flavor preference
    else if (input.toLowerCase().includes("sweet")) {
      responseText = `You're craving something sweet! How about a Caramel Macchiato or a Cinnamon Roll? Both are perfect for a sweet treat! Come by The Brew to enjoy them in person.`;
    } else if (input.toLowerCase().includes("strong")) {
      responseText = `Looking for something strong? An Espresso or Americano might be just what you need! We’d love to see you at The Brew to enjoy it.`;
    } else if (input.toLowerCase().includes("light")) {
      responseText = `How about something light? I recommend a Latte or a Flat White. Come visit The Brew and give one a try!`;
    } 
    // Default response for unclear input
    else {
      responseText =
        "I'm sorry, could you tell me a bit more about what you're craving? Maybe something sweet, strong, or refreshing?";
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: responseText },
    ]);
    setInput(""); // Clear the input field
  };

  // Toggle open and close
  const toggleChatbot = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Chatbot icon (Text only button) */}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        BaristaBot
      </div>

      {/* Chatbot window */}
      {open && (
        <div className="chatbot-window">
          <div className="chat-header">
            The Brew Chatbot
            <button className="close-btn" onClick={toggleChatbot}>
              X
            </button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Describe what you're craving..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
