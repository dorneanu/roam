// Topic search and filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    // References to the DOM elements
    const searchInput = document.getElementById('topic-search');
    const categoryFilter = document.getElementById('category-filter');
    const topicsList = document.getElementById('topics-list');
    const topicItems = document.querySelectorAll('.topic-item');
    const topicCategories = document.querySelectorAll('.topic-category');
    const alphabetLinks = document.querySelectorAll('.alphabet-link');
    const clearButton = document.getElementById('clear-filters');

    // Function to filter topics based on search input and category selection
    function filterTopics() {
        const searchTerm = searchInput.value.toLowerCase();
        const categoryTerm = categoryFilter.value;
        
        // Hide all topics initially
        topicItems.forEach(item => {
            item.style.display = 'none';
        });

        // Hide all category sections initially
        topicCategories.forEach(category => {
            category.style.display = 'none';
        });

        // Show topics that match both the search term and category filter
        topicItems.forEach(item => {
            const title = item.querySelector('.topic-title').textContent.toLowerCase();
            const category = item.getAttribute('data-category');
            const letter = item.getAttribute('data-letter');

            // Check if the topic matches both filters
            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = categoryTerm === '' || category === categoryTerm;

            if (matchesSearch && matchesCategory) {
                item.style.display = 'block';
                
                // Show the parent category
                const parentCategory = document.querySelector(`.topic-category[data-letter="${letter}"]`);
                if (parentCategory) {
                    parentCategory.style.display = 'block';
                }
            }
        });

        // Update active state of alphabet links
        updateAlphabetLinks();
    }

    // Function to scroll to a specific letter section
    function scrollToLetter(letter) {
        const section = document.getElementById(letter.toLowerCase());
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }

    // Function to update the active state of alphabet links
    function updateAlphabetLinks() {
        const visibleCategories = Array.from(document.querySelectorAll('.topic-category[style="display: block;"]'));
        const visibleLetters = visibleCategories.map(cat => cat.getAttribute('data-letter').toLowerCase());
        
        alphabetLinks.forEach(link => {
            const letter = link.getAttribute('data-letter').toLowerCase();
            if (visibleLetters.includes(letter)) {
                link.classList.remove('disabled');
            } else {
                link.classList.add('disabled');
            }
        });
    }

    // Function to clear all filters
    function clearFilters() {
        searchInput.value = '';
        categoryFilter.value = '';
        
        topicItems.forEach(item => {
            item.style.display = 'block';
        });
        
        topicCategories.forEach(category => {
            category.style.display = 'block';
        });
        
        alphabetLinks.forEach(link => {
            link.classList.remove('disabled');
        });
    }

    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', filterTopics);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterTopics);
    }
    
    if (clearButton) {
        clearButton.addEventListener('click', clearFilters);
    }
    
    if (alphabetLinks) {
        alphabetLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (!this.classList.contains('disabled')) {
                    const letter = this.getAttribute('data-letter');
                    scrollToLetter(letter);
                }
            });
        });
    }
});
