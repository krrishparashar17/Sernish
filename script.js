document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });

    // Inspirational Quotes
    const quotes = [
        {
            text: "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
            author: "Unknown"
        },
        {
            text: "The greatest weapon against stress is our ability to choose one thought over another.",
            author: "William James"
        },
        {
            text: "You are not your illness. You have an individual story to tell. You have a name, a history, a personality. Staying yourself is part of the battle.",
            author: "Julian Seifter"
        },
        {
            text: "There is hope, even when your brain tells you there isn't.",
            author: "John Green"
        },
        {
            text: "Self-care is not self-indulgence, it is self-preservation.",
            author: "Audre Lorde"
        },
        {
            text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
            author: "J.K. Rowling"
        },
        {
            text: "You don't have to control your thoughts. You just have to stop letting them control you.",
            author: "Dan Millman"
        },
        {
            text: "Just because no one else can heal or do your inner work for you doesn't mean you can, should, or need to do it alone.",
            author: "Lisa Olivera"
        }
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        
        // Fade out
        quoteText.classList.add('fade-out');
        quoteAuthor.classList.add('fade-out');
        
        setTimeout(() => {
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = `— ${quote.author}`;
            
            // Fade in
            quoteText.classList.remove('fade-out');
            quoteAuthor.classList.remove('fade-out');
            quoteText.classList.add('fade-in');
            quoteAuthor.classList.add('fade-in');
            
            setTimeout(() => {
                quoteText.classList.remove('fade-in');
                quoteAuthor.classList.remove('fade-in');
            }, 500);
        }, 500);
    }

    newQuoteBtn.addEventListener('click', showRandomQuote);
    
    // Show initial quote
    showRandomQuote();

    // Wellness Exercises Modal
    const modal = document.getElementById('exercise-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close-modal');
    const exerciseButtons = document.querySelectorAll('[data-exercise]');

    const exercises = {
        breathing: {
            title: "Deep Breathing Exercise",
            content: `
                <div class="exercise-instructions">
                    <h3>Follow these steps:</h3>
                    <ol>
                        <li>Find a comfortable seated position with your back straight.</li>
                        <li>Place one hand on your chest and the other on your abdomen.</li>
                        <li>Breathe in slowly through your nose, feeling your abdomen expand.</li>
                        <li>Hold your breath for a moment.</li>
                        <li>Exhale slowly through your mouth, feeling your abdomen contract.</li>
                        <li>Repeat for 5-10 breaths.</li>
                    </ol>
                </div>
                <div class="breathing-circle">
                    <span id="breathing-text">Breathe In</span>
                </div>
                <div class="timer-controls">
                    <button id="start-breathing" class="primary-button">Start Exercise</button>
                </div>
            `
        },
        walking: {
            title: "Mindful Walking Practice",
            content: `
                <div class="exercise-instructions">
                    <h3>Instructions:</h3>
                    <p>Mindful walking is about being fully present as you walk. You can practice this anywhere, even for just a few minutes.</p>
                    <ol>
                        <li>Stand tall and feel your feet firmly on the ground.</li>
                        <li>Begin walking at a natural pace.</li>
                        <li>Notice the sensation of lifting your foot, moving it forward, and placing it back on the ground.</li>
                        <li>Pay attention to the shifting of your weight and balance.</li>
                        <li>When your mind wanders, gently bring your attention back to the physical sensations of walking.</li>
                        <li>Notice your surroundings - colors, sounds, smells - without judgment.</li>
                    </ol>
                </div>
                <div class="exercise-timer">
                    <div class="timer-display" id="walking-timer">05:00</div>
                    <div class="timer-controls">
                        <button id="start-walking" class="primary-button">Start Timer</button>
                        <button id="reset-walking" class="secondary-button">Reset</button>
                    </div>
                </div>
            `
        },
        stretching: {
            title: "Quick Stretching Routine",
            content: `
                <div class="exercise-instructions">
                    <h3>Simple Stretches:</h3>
                    <p>Hold each stretch for 15-30 seconds, breathing deeply.</p>
                    <ul>
                        <li><strong>Neck Stretch:</strong> Gently tilt your head to each side, bringing your ear toward your shoulder.</li>
                        <li><strong>Shoulder Rolls:</strong> Roll your shoulders forward and backward in large circles.</li>
                        <li><strong>Chest Opener:</strong> Clasp your hands behind your back and gently lift your arms.</li>
                        <li><strong>Side Stretch:</strong> Raise one arm overhead and lean to the opposite side.</li>
                        <li><strong>Forward Fold:</strong> From a standing position, hinge at your hips and let your upper body hang forward.</li>
                    </ul>
                </div>
                <div class="exercise-timer">
                    <div class="timer-display" id="stretch-timer">00:30</div>
                    <div class="timer-controls">
                        <button id="start-stretch" class="primary-button">Start Timer</button>
                        <button id="next-stretch" class="secondary-button" disabled>Next Stretch</button>
                    </div>
                </div>
            `
        },
        meditation: {
            title: "Simple Meditation Practice",
            content: `
                <div class="exercise-instructions">
                    <h3>Getting Started:</h3>
                    <ol>
                        <li>Find a quiet place where you won't be disturbed.</li>
                        <li>Sit comfortably with your back straight, either on a chair or on the floor.</li>
                        <li>Close your eyes or maintain a soft gaze.</li>
                        <li>Focus on your breath - the sensation of air moving in and out.</li>
                        <li>When your mind wanders (which is normal), gently bring your attention back to your breath.</li>
                        <li>Start with just 5 minutes and gradually increase your time.</li>
                    </ol>
                </div>
                <div class="exercise-timer">
                    <div class="timer-display" id="meditation-timer">05:00</div>
                    <div class="timer-controls">
                        <button id="start-meditation" class="primary-button">Start Meditation</button>
                        <button id="reset-meditation" class="secondary-button">Reset</button>
                    </div>
                </div>
            `
        }
    };

    exerciseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const exerciseType = button.getAttribute('data-exercise');
            const exercise = exercises[exerciseType];
            
            if (exercise) {
                modalTitle.textContent = exercise.title;
                modalContent.innerHTML = exercise.content;
                modal.style.display = 'block';
                
                // Initialize exercise-specific functionality
                if (exerciseType === 'breathing') {
                    initBreathingExercise();
                } else if (exerciseType === 'walking' || exerciseType === 'meditation') {
                    initTimer(exerciseType);
                } else if (exerciseType === 'stretching') {
                    initStretchTimer();
                }
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        // Stop any running timers or animations
        if (breathingInterval) clearInterval(breathingInterval);
        if (timerInterval) clearInterval(timerInterval);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            // Stop any running timers or animations
            if (breathingInterval) clearInterval(breathingInterval);
            if (timerInterval) clearInterval(timerInterval);
        }
    });

    // Breathing Exercise
    let breathingInterval;
    
    function initBreathingExercise() {
        const breathingCircle = document.querySelector('.breathing-circle');
        const breathingText = document.getElementById('breathing-text');
        const startBreathingBtn = document.getElementById('start-breathing');
        
        startBreathingBtn.addEventListener('click', () => {
            if (startBreathingBtn.textContent === 'Start Exercise') {
                startBreathingBtn.textContent = 'Stop Exercise';
                breathingCircle.classList.add('breathing-animation');
                
                // Breathing instructions
                breathingInterval = setInterval(() => {
                    // Inhale for 4 seconds
                    breathingText.textContent = 'Breathe In';
                    setTimeout(() => {
                        // Hold for 2 seconds
                        breathingText.textContent = 'Hold';
                        setTimeout(() => {
                            // Exhale for 4 seconds
                            breathingText.textContent = 'Breathe Out';
                        }, 2000);
                    }, 4000);
                }, 10000); // Full cycle is 10 seconds
                
            } else {
                startBreathingBtn.textContent = 'Start Exercise';
                breathingCircle.classList.remove('breathing-animation');
                clearInterval(breathingInterval);
                breathingText.textContent = 'Breathe In';
            }
        });
    }

    // Timer functionality
    let timerInterval;
    let currentTime = 0;
    
    function initTimer(type) {
        const timerDisplay = document.getElementById(`${type}-timer`);
        const startButton = document.getElementById(`start-${type}`);
        const resetButton = document.getElementById(`reset-${type}`);
        
        // Set initial time (5 minutes)
        currentTime = 5 * 60;
        updateTimerDisplay(timerDisplay, currentTime);
        
        startButton.addEventListener('click', () => {
            if (startButton.textContent === `Start ${type === 'walking' ? 'Timer' : 'Meditation'}`) {
                startButton.textContent = 'Pause';
                
                timerInterval = setInterval(() => {
                    currentTime--;
                    updateTimerDisplay(timerDisplay, currentTime);
                    
                    if (currentTime <= 0) {
                        clearInterval(timerInterval);
                        startButton.textContent = `Start ${type === 'walking' ? 'Timer' : 'Meditation'}`;
                        showNotification('Exercise complete! Great job!', 'success');
                    }
                }, 1000);
            } else {
                clearInterval(timerInterval);
                startButton.textContent = `Start ${type === 'walking' ? 'Timer' : 'Meditation'}`;
            }
        });
        
        resetButton.addEventListener('click', () => {
            clearInterval(timerInterval);
            currentTime = 5 * 60;
            updateTimerDisplay(timerDisplay, currentTime);
            startButton.textContent = `Start ${type === 'walking' ? 'Timer' : 'Meditation'}`;
        });
    }
    
    function initStretchTimer() {
        const timerDisplay = document.getElementById('stretch-timer');
        const startButton = document.getElementById('start-stretch');
        const nextButton = document.getElementById('next-stretch');
        
        const stretches = [
            'Neck Stretch',
            'Shoulder Rolls',
            'Chest Opener',
            'Side Stretch',
            'Forward Fold'
        ];
        
        let currentStretchIndex = 0;
        currentTime = 30; // 30 seconds per stretch
        
        updateTimerDisplay(timerDisplay, currentTime);
        
        startButton.addEventListener('click', () => {
            if (startButton.textContent === 'Start Timer') {
                startButton.textContent = 'Pause';
                nextButton.disabled = true;
                
                showNotification(`Current stretch: ${stretches[currentStretchIndex]}`, 'info');
                
                timerInterval = setInterval(() => {
                    currentTime--;
                    updateTimerDisplay(timerDisplay, currentTime);
                    
                    if (currentTime <= 0) {
                        clearInterval(timerInterval);
                        
                        if (currentStretchIndex < stretches.length - 1) {
                            currentStretchIndex++;
                            currentTime = 30;
                            updateTimerDisplay(timerDisplay, currentTime);
                            startButton.textContent = 'Start Timer';
                            nextButton.disabled = false;
                            showNotification(`Next stretch: ${stretches[currentStretchIndex]}`, 'info');
                        } else {
                            // All stretches complete
                            startButton.textContent = 'Start Timer';
                            nextButton.disabled = true;
                            currentStretchIndex = 0;
                            showNotification('Stretching routine complete! Great job!', 'success');
                        }
                    }
                }, 1000);
            } else {
                clearInterval(timerInterval);
                startButton.textContent = 'Start Timer';
                nextButton.disabled = false;
            }
        });
        
        nextButton.addEventListener('click', () => {
            clearInterval(timerInterval);
            
            if (currentStretchIndex < stretches.length - 1) {
                currentStretchIndex++;
                showNotification(`Current stretch: ${stretches[currentStretchIndex]}`, 'info');
            } else {
                currentStretchIndex = 0;
                showNotification(`Back to first stretch: ${stretches[currentStretchIndex]}`, 'info');
            }
            
            currentTime = 30;
            updateTimerDisplay(timerDisplay, currentTime);
            startButton.textContent = 'Start Timer';
        });
    }
    
    function updateTimerDisplay(display, timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Habit Tracker
    const habitNameInput = document.getElementById('habit-name');
    const habitFrequencyInput = document.getElementById('habit-frequency');
    const habitAlternativeInput = document.getElementById('habit-alternative');
    const trackHabitBtn = document.getElementById('track-habit-btn');
    const habitProgress = document.getElementById('habit-progress');
    
    // Load habits from localStorage
    let habits = JSON.parse(localStorage.getItem('habits')) || [];
    
    // Display habits
    function displayHabits() {
        if (habits.length === 0) {
            habitProgress.innerHTML = '<p class="empty-state">Your habit tracking data will appear here</p>';
            return;
        }
        
        habitProgress.innerHTML = '';
        
        // Sort habits by date (newest first)
        habits.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        habits.forEach((habit, index) => {
            const habitEntry = document.createElement('div');
            habitEntry.classList.add('habit-entry');
            
            const date = new Date(habit.date);
            const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });
            
            habitEntry.innerHTML = `
                <h4>
                    ${habit.name}
                    <span class="habit-count">(${habit.frequency}x)</span>
                    <button class="delete-habit" data-index="${index}">&times;</button>
                </h4>
                <div class="habit-date">${formattedDate}</div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${calculateProgressWidth(habit.frequency)}%"></div>
                </div>
                ${habit.alternative ? `<div class="habit-alternative">Try instead: ${habit.alternative}</div>` : ''}
            `;
            
            habitProgress.appendChild(habitEntry);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-habit').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                deleteHabit(index);
            });
        });
    }
    
    function calculateProgressWidth(frequency) {
        // Lower frequency is better progress
        // Scale: 0 = 100%, 10+ = 0%
        const progress = Math.max(0, 10 - frequency) * 10;
        return progress;
    }
    
    // Track new habit
    trackHabitBtn.addEventListener('click', () => {
        const name = habitNameInput.value.trim();
        const frequency = parseInt(habitFrequencyInput.value);
        const alternative = habitAlternativeInput.value.trim();
        
        if (name && !isNaN(frequency)) {
            const newHabit = {
                name,
                frequency,
                alternative,
                date: new Date().toISOString()
            };
            
            habits.unshift(newHabit);
            
            // Save to localStorage
            localStorage.setItem('habits', JSON.stringify(habits));
            
            // Clear form
            habitNameInput.value = '';
            habitFrequencyInput.value = '';
            habitAlternativeInput.value = '';
            
            // Update display
            displayHabits();
            
            // Show success notification
            showNotification('Habit tracked successfully!', 'success');
        } else {
            showNotification('Please enter a habit name and valid frequency', 'error');
        }
    });
    
    // Delete habit
    function deleteHabit(index) {
        habits.splice(index, 1);
        localStorage.setItem('habits', JSON.stringify(habits));
        displayHabits();
        showNotification('Habit deleted', 'info');
    }
    
    // Display initial habits
    displayHabits();
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove any existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // CTA Button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        document.getElementById('wellness').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // In a real application, you would send this to your server
                console.log('Newsletter signup:', email);
                emailInput.value = '';
                showNotification('Thank you for subscribing!', 'success');
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Add active class to navigation based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imgOptions = {
            threshold: 0,
            rootMargin: "0px 0px 300px 0px"
        };
        
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }
                
                observer.unobserve(img);
            });
        }, imgOptions);
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imgObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
    
    // Theme toggle (bonus feature)
    const createThemeToggle = () => {
        const footer = document.querySelector('.footer-content');
        
        const themeToggle = document.createElement('div');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = `
            <p>Theme Mode</p>
            <label class="switch">
                <input type="checkbox" id="theme-switch">
                <span class="slider round"></span>
            </label>
        `;
        
        footer.appendChild(themeToggle);
        
        const themeSwitch = document.getElementById('theme-switch');
        
        // Check if user has a preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeSwitch.checked = true;
        }
        
        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    };
    
    // Uncomment to enable theme toggle
    // createThemeToggle();
});