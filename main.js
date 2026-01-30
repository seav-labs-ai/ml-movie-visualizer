import './style.css'

// ========================================
// Movie Data - Real Movies from IMDB
// ========================================

// Real movie data with actual IMDB ratings, budgets, and metadata
const REAL_MOVIES = [
    // Action/Superhero
    { title: "The Dark Knight", rating: 9.0, popularity: 96, budget: 185, year: 2008, runtime: 152, genre: "🦸" },
    { title: "Avengers: Endgame", rating: 8.4, popularity: 94, budget: 356, year: 2019, runtime: 181, genre: "🦸" },
    { title: "Spider-Man: No Way Home", rating: 8.2, popularity: 93, budget: 200, year: 2021, runtime: 148, genre: "🦸" },
    { title: "The Avengers", rating: 8.0, popularity: 91, budget: 220, year: 2012, runtime: 143, genre: "🦸" },
    { title: "Black Panther", rating: 7.3, popularity: 88, budget: 200, year: 2018, runtime: 134, genre: "🦸" },
    { title: "Wonder Woman", rating: 7.4, popularity: 84, budget: 149, year: 2017, runtime: 141, genre: "🦸" },
    { title: "Guardians of the Galaxy", rating: 8.0, popularity: 87, budget: 170, year: 2014, runtime: 121, genre: "🦸" },
    { title: "Iron Man", rating: 7.9, popularity: 85, budget: 140, year: 2008, runtime: 126, genre: "🦸" },

    // Sci-Fi
    { title: "Inception", rating: 8.8, popularity: 94, budget: 160, year: 2010, runtime: 148, genre: "🚀" },
    { title: "Interstellar", rating: 8.7, popularity: 93, budget: 165, year: 2014, runtime: 169, genre: "🚀" },
    { title: "The Matrix", rating: 8.7, popularity: 90, budget: 63, year: 1999, runtime: 136, genre: "🚀" },
    { title: "Avatar", rating: 7.9, popularity: 92, budget: 237, year: 2009, runtime: 162, genre: "🚀" },
    { title: "Blade Runner 2049", rating: 8.0, popularity: 81, budget: 150, year: 2017, runtime: 164, genre: "🚀" },
    { title: "Dune", rating: 8.0, popularity: 86, budget: 165, year: 2021, runtime: 155, genre: "🚀" },
    { title: "Arrival", rating: 7.9, popularity: 82, budget: 47, year: 2016, runtime: 116, genre: "🚀" },
    { title: "Ex Machina", rating: 7.7, popularity: 78, budget: 15, year: 2014, runtime: 108, genre: "🚀" },

    // Drama
    { title: "The Shawshank Redemption", rating: 9.3, popularity: 95, budget: 25, year: 1994, runtime: 142, genre: "🎭" },
    { title: "The Godfather", rating: 9.2, popularity: 94, budget: 6, year: 1972, runtime: 175, genre: "🎭" },
    { title: "Forrest Gump", rating: 8.8, popularity: 91, budget: 55, year: 1994, runtime: 142, genre: "🎭" },
    { title: "Fight Club", rating: 8.8, popularity: 88, budget: 63, year: 1999, runtime: 139, genre: "🎭" },
    { title: "The Prestige", rating: 8.5, popularity: 85, budget: 40, year: 2006, runtime: 130, genre: "🎭" },
    { title: "Whiplash", rating: 8.5, popularity: 84, budget: 3, year: 2014, runtime: 107, genre: "🎭" },
    { title: "Parasite", rating: 8.5, popularity: 89, budget: 11, year: 2019, runtime: 132, genre: "🎭" },
    { title: "The Social Network", rating: 7.8, popularity: 82, budget: 40, year: 2010, runtime: 120, genre: "🎭" },

    // Comedy
    { title: "The Grand Budapest Hotel", rating: 8.1, popularity: 80, budget: 25, year: 2014, runtime: 99, genre: "😂" },
    { title: "Superbad", rating: 7.6, popularity: 76, budget: 20, year: 2007, runtime: 113, genre: "😂" },
    { title: "The Hangover", rating: 7.7, popularity: 82, budget: 35, year: 2009, runtime: 100, genre: "😂" },
    { title: "Bridesmaids", rating: 6.8, popularity: 74, budget: 32, year: 2011, runtime: 125, genre: "😂" },
    { title: "Knives Out", rating: 7.9, popularity: 85, budget: 40, year: 2019, runtime: 130, genre: "😂" },
    { title: "Jojo Rabbit", rating: 7.9, popularity: 79, budget: 14, year: 2019, runtime: 108, genre: "😂" },

    // Horror/Thriller
    { title: "Get Out", rating: 7.7, popularity: 86, budget: 5, year: 2017, runtime: 104, genre: "👻" },
    { title: "A Quiet Place", rating: 7.5, popularity: 83, budget: 17, year: 2018, runtime: 90, genre: "👻" },
    { title: "The Conjuring", rating: 7.5, popularity: 79, budget: 20, year: 2013, runtime: 112, genre: "👻" },
    { title: "Hereditary", rating: 7.3, popularity: 77, budget: 10, year: 2018, runtime: 127, genre: "👻" },
    { title: "It", rating: 7.3, popularity: 80, budget: 35, year: 2017, runtime: 135, genre: "👻" },
    { title: "The Silence of the Lambs", rating: 8.6, popularity: 88, budget: 19, year: 1991, runtime: 118, genre: "👻" },
    { title: "Se7en", rating: 8.6, popularity: 86, budget: 33, year: 1995, runtime: 127, genre: "👻" },
    { title: "Shutter Island", rating: 8.2, popularity: 84, budget: 80, year: 2010, runtime: 138, genre: "👻" },

    // Animation
    { title: "Spider-Man: Into the Spider-Verse", rating: 8.4, popularity: 90, budget: 90, year: 2018, runtime: 117, genre: "🎬" },
    { title: "Coco", rating: 8.4, popularity: 88, budget: 175, year: 2017, runtime: 105, genre: "🎬" },
    { title: "Inside Out", rating: 8.1, popularity: 86, budget: 175, year: 2015, runtime: 95, genre: "🎬" },
    { title: "Toy Story 4", rating: 7.7, popularity: 84, budget: 200, year: 2019, runtime: 100, genre: "🎬" },
    { title: "The Incredibles", rating: 8.0, popularity: 85, budget: 92, year: 2004, runtime: 115, genre: "🎬" },
    { title: "Finding Nemo", rating: 8.2, popularity: 87, budget: 94, year: 2003, runtime: 100, genre: "🎬" },

    // Romance/Drama
    { title: "La La Land", rating: 8.0, popularity: 86, budget: 30, year: 2016, runtime: 128, genre: "💕" },
    { title: "The Notebook", rating: 7.8, popularity: 81, budget: 29, year: 2004, runtime: 123, genre: "💕" },
    { title: "Titanic", rating: 7.9, popularity: 93, budget: 200, year: 1997, runtime: 194, genre: "💕" },
    { title: "Eternal Sunshine", rating: 8.3, popularity: 82, budget: 20, year: 2004, runtime: 108, genre: "💕" },

    // Action/Thriller
    { title: "John Wick", rating: 7.4, popularity: 83, budget: 20, year: 2014, runtime: 101, genre: "🔫" },
    { title: "Mad Max: Fury Road", rating: 8.1, popularity: 88, budget: 150, year: 2015, runtime: 120, genre: "🔫" },
    { title: "Top Gun: Maverick", rating: 8.2, popularity: 91, budget: 170, year: 2022, runtime: 130, genre: "🔫" },
    { title: "Mission: Impossible - Fallout", rating: 7.7, popularity: 85, budget: 178, year: 2018, runtime: 147, genre: "🔫" }
];

const generateMovieData = () => {
    return REAL_MOVIES.map((movie, i) => ({
        id: i + 1,
        ...movie,
        cluster: null
    }));
};

// ========================================
// State Management
// ========================================

let state = {
    movies: generateMovieData(),
    currentAlgo: 'clustering',
    clusters: 3,
    animationSpeed: 2,
    xFeature: 'budget',
    threshold: 6.5,
    showPrediction: true,
    showBoundary: true,
    isRunning: false,
    centroids: [],
    regressionLine: null,
    iterations: 0,
    hoveredMovieId: null,
    normalizedData: []
};

// ========================================
// Canvas Setup
// ========================================

const canvas = document.getElementById('viz-canvas');
const ctx = canvas.getContext('2d');
let animationId = null;

const resizeCanvas = () => {
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
};

const getCanvasSize = () => ({
    width: canvas.width / window.devicePixelRatio,
    height: canvas.height / window.devicePixelRatio
});

// ========================================
// Color Utilities
// ========================================

const clusterColors = [
    '#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'
];

const getClusterColor = (index, alpha = 1) => {
    const color = clusterColors[index % clusterColors.length];
    if (alpha === 1) return color;
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// ========================================
// K-Means Clustering Algorithm
// ========================================

const euclideanDistance = (a, b) => {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

const initializeCentroids = (data, k) => {
    const centroids = [];
    const indices = new Set();
    while (centroids.length < k) {
        const idx = Math.floor(Math.random() * data.length);
        if (!indices.has(idx)) {
            indices.add(idx);
            centroids.push({ x: data[idx].x, y: data[idx].y });
        }
    }
    return centroids;
};

const assignClusters = (data, centroids) => {
    return data.map(point => {
        let minDist = Infinity;
        let cluster = 0;
        centroids.forEach((centroid, i) => {
            const dist = euclideanDistance(point, centroid);
            if (dist < minDist) {
                minDist = dist;
                cluster = i;
            }
        });
        return { ...point, cluster };
    });
};

const updateCentroids = (data, k) => {
    const newCentroids = [];
    for (let i = 0; i < k; i++) {
        const clusterPoints = data.filter(p => p.cluster === i);
        if (clusterPoints.length > 0) {
            const avgX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length;
            const avgY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length;
            newCentroids.push({ x: avgX, y: avgY });
        } else {
            newCentroids.push({ x: Math.random() * 100, y: Math.random() * 100 });
        }
    }
    return newCentroids;
};

const hasConverged = (oldCentroids, newCentroids, threshold = 0.01) => {
    for (let i = 0; i < oldCentroids.length; i++) {
        if (euclideanDistance(oldCentroids[i], newCentroids[i]) > threshold) {
            return false;
        }
    }
    return true;
};

// ========================================
// Linear Regression Algorithm
// ========================================

const linearRegression = (data) => {
    const n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

    data.forEach(point => {
        sumX += point.x;
        sumY += point.y;
        sumXY += point.x * point.y;
        sumXX += point.x * point.x;
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Calculate R-squared
    const yMean = sumY / n;
    let ssRes = 0, ssTot = 0;
    data.forEach(point => {
        const predicted = slope * point.x + intercept;
        ssRes += Math.pow(point.y - predicted, 2);
        ssTot += Math.pow(point.y - yMean, 2);
    });
    const rSquared = 1 - (ssRes / ssTot);

    return { slope, intercept, rSquared };
};

// ========================================
// Drawing Functions
// ========================================

const clearCanvas = () => {
    const { width, height } = getCanvasSize();
    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);
};

const drawGrid = () => {
    const { width, height } = getCanvasSize();
    const padding = 50;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = padding; x <= width - padding; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
    }

    // Horizontal lines
    for (let y = padding; y <= height - padding; y += 50) {
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
};

const drawAxes = (xLabel, yLabel) => {
    const { width, height } = getCanvasSize();
    const padding = 50;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;

    // X axis
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Y axis
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, padding);
    ctx.stroke();

    // Labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(xLabel, width / 2, height - 15);

    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();
};

const drawPoint = (x, y, color, size = 8, glow = false) => {
    if (glow) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
    }

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.shadowBlur = 0;
};

const drawCentroid = (x, y, color) => {
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;

    // Outer ring
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Inner dot
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.shadowBlur = 0;
};

const drawLine = (x1, y1, x2, y2, color, width = 2, dashed = false) => {
    ctx.beginPath();
    if (dashed) ctx.setLineDash([5, 5]);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.setLineDash([]);
};

// ========================================
// Visualization Renderers
// ========================================

const normalizeData = (movies, xKey, yKey) => {
    const { width, height } = getCanvasSize();
    const padding = 60;

    const xValues = movies.map(m => m[xKey]);
    const yValues = movies.map(m => m[yKey]);

    const xMin = Math.min(...xValues);
    const xMax = Math.max(...xValues);
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);

    return movies.map(movie => ({
        ...movie,
        x: padding + ((movie[xKey] - xMin) / (xMax - xMin || 1)) * (width - 2 * padding),
        y: height - padding - ((movie[yKey] - yMin) / (yMax - yMin || 1)) * (height - 2 * padding),
        rawX: movie[xKey],
        rawY: movie[yKey]
    }));
};

const renderClustering = (data, centroids, animated = false) => {
    clearCanvas();
    drawGrid();
    drawAxes('Popularity Score', 'Rating');

    // Draw connections to centroids with animation
    if (animated && centroids.length > 0) {
        data.forEach(point => {
            if (point.cluster !== null && centroids[point.cluster]) {
                const centroid = centroids[point.cluster];
                ctx.beginPath();
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(centroid.x, centroid.y);
                ctx.strokeStyle = getClusterColor(point.cluster, 0.15);
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        });
    }

    // Draw points
    data.forEach(point => {
        const color = point.cluster !== null
            ? getClusterColor(point.cluster)
            : 'rgba(255, 255, 255, 0.5)';
        drawPoint(point.x, point.y, color, 7, point.cluster !== null);
    });

    // Draw centroids
    centroids.forEach((centroid, i) => {
        drawCentroid(centroid.x, centroid.y, getClusterColor(i));
    });
};

const renderRegression = (data, line) => {
    clearCanvas();
    drawGrid();

    const xLabel = state.xFeature === 'budget' ? 'Budget ($M)' :
        state.xFeature === 'year' ? 'Release Year' : 'Runtime (min)';
    drawAxes(xLabel, 'Rating');

    // Draw prediction line
    if (line && state.showPrediction) {
        const { width, height } = getCanvasSize();
        const padding = 60;

        // Gradient for line
        const gradient = ctx.createLinearGradient(padding, 0, width - padding, 0);
        gradient.addColorStop(0, '#7c3aed');
        gradient.addColorStop(1, '#ec4899');

        ctx.shadowColor = '#7c3aed';
        ctx.shadowBlur = 10;

        const y1 = line.slope * padding + line.intercept;
        const y2 = line.slope * (width - padding) + line.intercept;

        ctx.beginPath();
        ctx.moveTo(padding, y1);
        ctx.lineTo(width - padding, y2);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.shadowBlur = 0;

        // R-squared label
        ctx.fillStyle = '#a855f7';
        ctx.font = 'bold 14px Inter';
        ctx.fillText(`R² = ${line.rSquared.toFixed(3)}`, width - 100, padding + 20);
    }

    // Draw points
    data.forEach(point => {
        const isHighRated = point.rating >= state.threshold;
        const color = isHighRated ? '#10b981' : '#f43f5e';
        drawPoint(point.x, point.y, color, 7, true);
    });
};

const renderClassification = (data) => {
    clearCanvas();

    const { width, height } = getCanvasSize();
    const padding = 60;

    // Draw decision boundary region
    if (state.showBoundary) {
        const thresholdY = height - padding -
            ((state.threshold - 4) / 5.5) * (height - 2 * padding);

        // Hit region (green tint)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
        ctx.fillRect(padding, padding, width - 2 * padding, thresholdY - padding);

        // Flop region (red tint)
        ctx.fillStyle = 'rgba(244, 63, 94, 0.1)';
        ctx.fillRect(padding, thresholdY, width - 2 * padding, height - padding - thresholdY);

        // Boundary line
        ctx.setLineDash([10, 5]);
        ctx.beginPath();
        ctx.moveTo(padding, thresholdY);
        ctx.lineTo(width - padding, thresholdY);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.setLineDash([]);

        // Labels
        ctx.font = 'bold 14px Inter';
        ctx.fillStyle = '#10b981';
        ctx.fillText('HIT ZONE', width - 100, padding + 30);
        ctx.fillStyle = '#f43f5e';
        ctx.fillText('FLOP ZONE', width - 100, height - padding - 15);
    }

    drawGrid();
    drawAxes('Budget ($M)', 'Rating');

    // Draw points
    data.forEach(point => {
        const isHit = point.rating >= state.threshold;
        const color = isHit ? '#10b981' : '#f43f5e';
        drawPoint(point.x, point.y, color, 8, true);
    });

    // Calculate accuracy
    const hits = data.filter(p => p.rating >= state.threshold).length;
    const accuracy = (hits / data.length * 100).toFixed(1);
    updateStat('accuracy', accuracy + '%');
};

// ========================================
// Animation Controllers
// ========================================

const runClustering = async () => {
    const startTime = performance.now();
    state.isRunning = true;
    updateStat('iterations', '0');

    let data = normalizeData(state.movies, 'popularity', 'rating');
    let centroids = initializeCentroids(data, state.clusters);

    // Convert centroids to canvas coordinates
    const { width, height } = getCanvasSize();
    const padding = 60;

    centroids = centroids.map(c => ({
        x: padding + (c.x / 100) * (width - 2 * padding),
        y: padding + (c.y / 100) * (height - 2 * padding)
    }));

    state.centroids = centroids;
    state.iterations = 0;

    const speeds = [1000, 500, 200];
    const delay = speeds[state.animationSpeed - 1];

    const iterate = async () => {
        if (!state.isRunning) return;

        // Assign clusters
        data = assignClusters(data, centroids);

        // Update movie cluster assignments
        data.forEach((d, i) => {
            state.movies[i].cluster = d.cluster;
        });

        state.iterations++;
        updateStat('iterations', state.iterations.toString());

        // Render current state
        renderClustering(data, centroids, true);

        // Calculate new centroids
        const newCentroids = [];
        for (let i = 0; i < state.clusters; i++) {
            const clusterPoints = data.filter(p => p.cluster === i);
            if (clusterPoints.length > 0) {
                const avgX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length;
                const avgY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length;
                newCentroids.push({ x: avgX, y: avgY });
            } else {
                newCentroids.push(centroids[i]);
            }
        }

        // Check convergence
        if (hasConverged(centroids, newCentroids) || state.iterations >= 20) {
            state.isRunning = false;
            const endTime = performance.now();
            updateStat('time', Math.round(endTime - startTime) + 'ms');
            updateLegend();
            renderMovieCards();
            return;
        }

        centroids = newCentroids;
        state.centroids = centroids;

        await new Promise(r => setTimeout(r, delay));
        iterate();
    };

    iterate();
};

const runRegression = () => {
    const startTime = performance.now();

    const data = normalizeData(state.movies, state.xFeature, 'rating');
    const line = linearRegression(data);

    state.regressionLine = line;
    renderRegression(data, line);

    const endTime = performance.now();
    updateStat('iterations', '1');
    updateStat('accuracy', (line.rSquared * 100).toFixed(1) + '%');
    updateStat('time', Math.round(endTime - startTime) + 'ms');
    updateLegend();
};

const runClassification = () => {
    const startTime = performance.now();

    const data = normalizeData(state.movies, 'budget', 'rating');
    renderClassification(data);

    const endTime = performance.now();
    updateStat('iterations', '1');
    updateStat('time', Math.round(endTime - startTime) + 'ms');
    updateLegend();
};

// ========================================
// UI Updates
// ========================================

const updateStat = (id, value) => {
    document.getElementById(`stat-${id}`).textContent = value;
};

const updateLegend = () => {
    const legendContainer = document.getElementById('viz-legend');
    legendContainer.innerHTML = '';

    if (state.currentAlgo === 'clustering') {
        for (let i = 0; i < state.clusters; i++) {
            const count = state.movies.filter(m => m.cluster === i).length;
            const item = document.createElement('div');
            item.className = 'legend-item';
            item.innerHTML = `
        <span class="legend-dot" style="background: ${getClusterColor(i)}"></span>
        Cluster ${i + 1} (${count} movies)
      `;
            legendContainer.appendChild(item);
        }
    } else if (state.currentAlgo === 'classification') {
        const hits = state.movies.filter(m => m.rating >= state.threshold).length;
        const flops = state.movies.length - hits;

        legendContainer.innerHTML = `
      <div class="legend-item">
        <span class="legend-dot" style="background: #10b981"></span>
        Hits (${hits} movies, rating ≥ ${state.threshold})
      </div>
      <div class="legend-item">
        <span class="legend-dot" style="background: #f43f5e"></span>
        Flops (${flops} movies, rating < ${state.threshold})
      </div>
    `;
    } else {
        legendContainer.innerHTML = `
      <div class="legend-item">
        <span class="legend-dot" style="background: #10b981"></span>
        High Rated (≥ ${state.threshold})
      </div>
      <div class="legend-item">
        <span class="legend-dot" style="background: #f43f5e"></span>
        Low Rated (< ${state.threshold})
      </div>
      <div class="legend-item">
        <span class="legend-dot" style="background: linear-gradient(to right, #7c3aed, #ec4899)"></span>
        Regression Line
      </div>
    `;
    }
};

const renderMovieCards = () => {
    const grid = document.getElementById('movies-grid');
    grid.innerHTML = '';

    // Show first 12 movies
    state.movies.slice(0, 12).forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card fade-in';
        card.style.animationDelay = `${Math.random() * 0.3}s`;
        card.dataset.movieId = movie.id;

        const clusterDot = movie.cluster !== null
            ? `<span class="movie-cluster" style="background: ${getClusterColor(movie.cluster)}"></span>`
            : '';

        card.innerHTML = `
      <div class="movie-poster">${movie.genre}</div>
      <div class="movie-title">${movie.title}</div>
      <div class="movie-meta">
        <span class="movie-rating">⭐ ${movie.rating}</span>
        <span>${movie.year} ${clusterDot}</span>
      </div>
    `;

        // Add hover events to highlight point on chart
        card.addEventListener('mouseenter', () => {
            highlightPointOnChart(movie.id);
        });

        card.addEventListener('mouseleave', () => {
            unhighlightPointOnChart();
        });

        grid.appendChild(card);
    });
};

// Highlight a point on the chart when hovering over a movie card
const highlightPointOnChart = (movieId) => {
    const point = state.normalizedData.find(p => p.id === movieId);
    if (!point) return;

    // Redraw the current visualization then highlight the point
    redrawCurrentVisualization();

    // Draw highlight ring around the point
    ctx.save();
    ctx.shadowColor = '#a855f7';
    ctx.shadowBlur = 25;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 15, 0, Math.PI * 2);
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw inner glow
    ctx.beginPath();
    ctx.arc(point.x, point.y, 12, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.5)';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.restore();
};

const unhighlightPointOnChart = () => {
    redrawCurrentVisualization();
};

const redrawCurrentVisualization = () => {
    if (state.currentAlgo === 'clustering') {
        renderClustering(state.normalizedData, state.centroids, state.centroids.length > 0);
    } else if (state.currentAlgo === 'regression') {
        renderRegression(state.normalizedData, state.regressionLine);
    } else {
        renderClassification(state.normalizedData);
    }
};

const switchAlgorithm = (algo) => {
    state.currentAlgo = algo;
    state.isRunning = false;

    // Update tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.algo === algo);
    });

    // Update controls visibility
    document.getElementById('clustering-controls').classList.toggle('hidden', algo !== 'clustering');
    document.getElementById('regression-controls').classList.toggle('hidden', algo !== 'regression');
    document.getElementById('classification-controls').classList.toggle('hidden', algo !== 'classification');

    // Update header
    const titles = {
        clustering: 'K-Means Clustering',
        regression: 'Linear Regression',
        classification: 'Classification'
    };
    const descriptions = {
        clustering: 'Grouping movies by their ratings and popularity scores',
        regression: 'Predicting ratings based on movie features',
        classification: 'Classifying movies as Hits or Flops based on ratings'
    };

    document.getElementById('viz-title').textContent = titles[algo];
    document.getElementById('viz-description').textContent = descriptions[algo];

    // Reset stats
    updateStat('iterations', '0');
    updateStat('accuracy', '--');
    updateStat('time', '0ms');

    // Clear and redraw
    clearCanvas();
    drawGrid();

    if (algo === 'clustering') {
        drawAxes('Popularity Score', 'Rating');
        state.normalizedData = normalizeData(state.movies, 'popularity', 'rating');
        state.normalizedData.forEach(point => drawPoint(point.x, point.y, 'rgba(255,255,255,0.5)', 7));
    } else if (algo === 'regression') {
        const xLabel = state.xFeature === 'budget' ? 'Budget ($M)' :
            state.xFeature === 'year' ? 'Release Year' : 'Runtime (min)';
        drawAxes(xLabel, 'Rating');
        state.normalizedData = normalizeData(state.movies, state.xFeature, 'rating');
        state.normalizedData.forEach(point => drawPoint(point.x, point.y, 'rgba(255,255,255,0.5)', 7));
    } else {
        drawAxes('Budget ($M)', 'Rating');
        state.normalizedData = normalizeData(state.movies, 'budget', 'rating');
        state.normalizedData.forEach(point => drawPoint(point.x, point.y, 'rgba(255,255,255,0.5)', 7));
    }

    updateLegend();
};

// ========================================
// Hover Interaction
// ========================================

const tooltip = document.getElementById('chart-tooltip');

const findPointAtPosition = (mouseX, mouseY) => {
    const hitRadius = 15; // Detection radius in pixels
    for (const point of state.normalizedData) {
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < hitRadius) {
            return point;
        }
    }
    return null;
};

const showTooltip = (point, mouseX, mouseY) => {
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();

    // Position tooltip
    let tooltipX = mouseX + 15;
    let tooltipY = mouseY - 10;

    // Keep tooltip within bounds
    if (tooltipX + 200 > rect.width) {
        tooltipX = mouseX - 200;
    }
    if (tooltipY < 0) {
        tooltipY = mouseY + 20;
    }

    tooltip.style.left = tooltipX + 'px';
    tooltip.style.top = tooltipY + 'px';

    // Set content
    tooltip.querySelector('.tooltip-title').textContent = point.title;

    let details = `<span class="rating">⭐ ${point.rating}</span>`;
    details += `<span class="year">${point.year}</span>`;
    details += `<span>${point.genre}</span>`;

    if (state.currentAlgo === 'clustering' && point.cluster !== null) {
        details += `<span style="color: ${getClusterColor(point.cluster)}">● Cluster ${point.cluster + 1}</span>`;
    }

    tooltip.querySelector('.tooltip-details').innerHTML = details;
    tooltip.classList.add('visible');

    state.hoveredMovieId = point.id;
    highlightMovieCard(point.id);
};

const hideTooltip = () => {
    tooltip.classList.remove('visible');
    if (state.hoveredMovieId) {
        unhighlightMovieCard(state.hoveredMovieId);
        state.hoveredMovieId = null;
    }
};

const highlightMovieCard = (movieId) => {
    const cards = document.querySelectorAll('.movie-card');
    const movieIndex = state.movies.findIndex(m => m.id === movieId);
    if (movieIndex >= 0 && movieIndex < cards.length) {
        cards[movieIndex].classList.add('highlighted');
    }
};

const unhighlightMovieCard = (movieId) => {
    const cards = document.querySelectorAll('.movie-card');
    const movieIndex = state.movies.findIndex(m => m.id === movieId);
    if (movieIndex >= 0 && movieIndex < cards.length) {
        cards[movieIndex].classList.remove('highlighted');
    }
};

const handleCanvasMouseMove = (e) => {
    if (state.normalizedData.length === 0) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width / window.devicePixelRatio;
    const scaleY = canvas.height / rect.height / window.devicePixelRatio;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const point = findPointAtPosition(mouseX, mouseY);

    if (point) {
        showTooltip(point, e.clientX - rect.left, e.clientY - rect.top);
        canvas.style.cursor = 'pointer';
    } else {
        hideTooltip();
        canvas.style.cursor = 'crosshair';
    }
};

const handleCanvasMouseLeave = () => {
    hideTooltip();
    canvas.style.cursor = 'crosshair';
};

// ========================================
// Event Listeners
// ========================================

const setupEventListeners = () => {
    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchAlgorithm(btn.dataset.algo));
    });

    // Clustering controls
    document.getElementById('clusters-slider').addEventListener('input', (e) => {
        state.clusters = parseInt(e.target.value);
        document.getElementById('clusters-value').textContent = state.clusters;
    });

    document.getElementById('speed-slider').addEventListener('input', (e) => {
        state.animationSpeed = parseInt(e.target.value);
        const labels = ['Slow', 'Medium', 'Fast'];
        document.getElementById('speed-value').textContent = labels[state.animationSpeed - 1];
    });

    // Regression controls
    document.getElementById('x-feature').addEventListener('change', (e) => {
        state.xFeature = e.target.value;
        if (state.currentAlgo === 'regression') {
            switchAlgorithm('regression');
        }
    });

    document.getElementById('show-prediction').addEventListener('change', (e) => {
        state.showPrediction = e.target.checked;
        if (state.regressionLine) {
            const data = normalizeData(state.movies, state.xFeature, 'rating');
            renderRegression(data, state.regressionLine);
        }
    });

    // Classification controls
    document.getElementById('threshold-slider').addEventListener('input', (e) => {
        state.threshold = parseFloat(e.target.value);
        document.getElementById('threshold-value').textContent = state.threshold;
    });

    document.getElementById('show-boundary').addEventListener('change', (e) => {
        state.showBoundary = e.target.checked;
        if (state.currentAlgo === 'classification') {
            runClassification();
        }
    });

    // Action buttons
    document.getElementById('run-btn').addEventListener('click', () => {
        if (state.currentAlgo === 'clustering') {
            runClustering();
        } else if (state.currentAlgo === 'regression') {
            runRegression();
        } else {
            runClassification();
        }
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        state.isRunning = false;
        state.movies.forEach(m => m.cluster = null);
        state.centroids = [];
        state.regressionLine = null;
        switchAlgorithm(state.currentAlgo);
        renderMovieCards();
    });

    document.getElementById('randomize-btn').addEventListener('click', () => {
        // Shuffle the movies array (Fisher-Yates shuffle)
        const movies = [...state.movies];
        for (let i = movies.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [movies[i], movies[j]] = [movies[j], movies[i]];
        }
        movies.forEach(m => m.cluster = null);
        state.movies = movies;
        state.centroids = [];
        state.regressionLine = null;
        switchAlgorithm(state.currentAlgo);
        renderMovieCards();
    });

    // Window resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        switchAlgorithm(state.currentAlgo);
    });

    // Canvas hover events
    canvas.addEventListener('mousemove', handleCanvasMouseMove);
    canvas.addEventListener('mouseleave', handleCanvasMouseLeave);
};

// ========================================
// Initialization
// ========================================

const init = () => {
    setTimeout(() => {
        resizeCanvas();
        setupEventListeners();
        renderMovieCards();
        switchAlgorithm('clustering');

        // Hide loading overlay
        document.getElementById('canvas-overlay').classList.remove('visible');

        updateStat('movies', state.movies.length.toString());
    }, 100);
};

// Start the application
document.addEventListener('DOMContentLoaded', init);
init();
