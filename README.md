# KNN Visualizer (p5.js)

A simple interactive visualization of the **K-Nearest Neighbors (KNN)** machine learning algorithm built with **p5.js**.  
Move your mouse around the canvas to see how the algorithm classifies the point as either **red** or **green**, based on the nearest neighbors.

---

# Demo

**Live Demo:**  
(After you enable GitHub Pages, your link will look like this:)  
`https://your-username.github.io/knn-p5js/`

---

# What It Does

- Generates random red and green points on the canvas  
- Uses **KNN (k = 3)** to classify the mouse pointer in real time  
- The color of the pointer changes based on which class is dominant among the 3 nearest points  

---

# How It Works

1. Each point has random x/y coordinates and a random class (red or green).  
2. When you move your mouse:
   - The script measures the distance from your mouse to every point  
   - Finds the 3 nearest points  
   - Classifies your mouse as red or green depending on which class appears more  

---

# Tech Stack

- **JavaScript (ES6)**  
- **p5.js** for drawing and visualization  

---

# How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/knn-p5js.git
   cd knn-p5js
