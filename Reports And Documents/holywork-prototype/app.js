/**
 * HOLYWORK - Main JavaScript
 * Handles interactions and basic functionality
 */

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('HolyWork app initialized');

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active filter chip toggle
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', function() {
            // Remove active from siblings
            this.parentElement.querySelectorAll('.chip').forEach(c => {
                c.classList.remove('active');
            });
            // Add active to clicked chip
            this.classList.add('active');
        });
    });

    // Track page views (for analytics)
    const pageName = document.title.replace('HolyWork - ', '');
    console.log(`Page viewed: ${pageName}`);
});

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
});

// Escape key closes modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Add haptic feedback for buttons (if supported)
document.querySelectorAll('.btn, .chip, .nav-item').forEach(element => {
    element.addEventListener('click', function() {
        if ('vibrate' in navigator) {
            navigator.vibrate(10); // 10ms vibration
        }
    });
});

// Simple notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-size: 14px;
        max-width: 90%;
        animation: slideDown 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Service Worker registration (for PWA functionality - optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you want to add offline support
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Export functions for use in other files
window.HolyWork = {
    showNotification: showNotification
};

console.log('HolyWork JavaScript loaded successfully ✅');
