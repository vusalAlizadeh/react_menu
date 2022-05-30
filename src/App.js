import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import items from "./components/Data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

function App() {
  const menu_variant = {
    hidden: {
      opacity: 0,
      y: "50vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
      },
    },
  };

  const [itemsMenu, setItemsMenu] = useState(items);

  const allCategory = ["all", "breakfast", "lunch", "shakes"];
  const changeCategory = (value) => {
    if (value === "all") {
      setItemsMenu(items);
      return;
    }
    const newMenu = items.filter((item) => item.category === value);
    setItemsMenu(newMenu);
  };
  return (
    <main className="menu-container">
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <Categories category={allCategory} changeCategory={changeCategory} />
      <motion.div variants={menu_variant} initial="hidden" animate="visible">
        <Menu items={itemsMenu} />
      </motion.div>
    </main>
  );
}

export default App;
