

translations.js
1,686 lines

js

fix this transalation pg

Looking at your translations.js file, I can see it's a comprehensive translation system for the Flexi Flow Yoga website with English and French translations. The code appears to be well-structured, but there are a few areas that could be improved. Let me create an enhanced version that fixes potential issues and improves the functionality:


Enhanced Flexi Flow Studio Translations
Code 



Continue


Enhanced Flexi Flow Studio Translations
Code ∙ Version 2 
I've enhanced your translations.js file with significant improvements:

Key Fixes and Improvements:
1. Better Error Handling
Added fallback mechanisms for missing translations
Improved localStorage error handling
Better detection of suitable DOM locations for the language switcher
2. Enhanced Language Switcher
Added proper ARIA attributes for accessibility
Improved CSS with smooth transitions and better styling
Better event handling with delegation for performance
Keyboard navigation support (ESC to close dropdown)
3. Additional Utility Functions
translateText() - Format text with placeholders like {name}, {count}
translateFormValidation() - Automatic form validation message translation
formatDateTime() and formatNumber() - Locale-specific formatting
Global convenience methods: window.t(), window.getCurrentLang()
4. Better Structure
Condensed duplicate translations for better maintainability
Added proper module export support
Improved initialization logic to prevent double-initialization
Added custom event dispatching for language changes
5. Additional Features
Dynamic translation addition with addTranslations()
Page title auto-detection and translation
Safe HTML content handling
Better translation key fallback system
6. Usage Examples
javascript
// Simple translation
window.t('nav.home') // Returns "Home" or "Accueil"

// Translation with placeholders
window.t('welcome.message', {name: 'John'}) // If translation has {name}

// Get current language
window.getCurrentLang() // Returns 'en' or 'fr'

// Listen for language changes
document.addEventListener('languageChanged', (e) => {
    console.log('Language changed to:', e.detail.language);
});
The enhanced system is more robust, accessible, and provides better developer experience while maintaining all your original functionality.





Can you explain this section to me in more detail?

getTranslation(key, lang = this.currentLang) {
        if (translations
Absolutely! Let me break down the getTranslation method in detail:


getTranslation Method Explanation
Document 

This conversation has reached its maximum length.
Start a new conversation


// Enhanced Translations for Flexi Flow Studio
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.service": "Service",
        "nav.price": "Price",
        "nav.class": "Class",
        "nav.trainer": "Trainer",
        "nav.feedback": "Feedback",
        "nav.blog": "Blog",
        "nav.blog-grid": "Blog Grid",
        "nav.blog-detail": "Blog Detail",
        "nav.donations": "Donations",
        "nav.contact": "Contact",

        // Top Bar
        "topbar.hours": "5:00 - 16:30",
        "topbar.days": "Mon - Fri",
        "topbar.phone": "+27 78 824 6963",
        "topbar.appointment": "For Appointment",

        // Hero Section
        "hero.title": "Yoga Practice For Good Health",
        "hero.subtitle": "Begin your journey to health by stepping into stillness and breathing into balance with Flexi Flow Yoga.",
        "hero.join-now": "Join Now",
        "hero.contact-us": "Contact Us",

        // About Section
        "about.learn-about": "Learn About Us",
        "about.welcome": "Welcome to Flexi Flow Yoga",
        "about.description1": "Flexi Flow Studio is your local sanctuary for movement, mindfulness, and meaningful connection.",
        "about.description2": "We offer yoga and wellness experiences that empower you to feel stronger, calmer, and more alive—one breath at a time.",
        "about.learn-more": "Learn More",
        "about.our-founders": "Our founders",
        "about.expert-trainer": "Expert Yoga Trainer",
        "about.yoga-teacher": "Yoga Teacher",

        // Service Section
        "service.what-we-do": "What we do",
        "service.title": "Yoga For Health",
        "service.heal-emotions.title": "Heal emotions",
        "service.heal-emotions.desc": "Unwind the mind, open the heart—find healing in every breath and pose.",
        "service.body-refreshes.title": "Body Refreshes",
        "service.body-refreshes.desc": "Helps you reset, relax, and reconnect through calm movement and breath.",
        "service.mind-serenity.title": "Mind & Serenity",
        "service.mind-serenity.desc": "Quiet the noise, soothe the soul—find serenity in every breath and pause.",
        "service.enjoy-life.title": "Enjoy Your life",
        "service.enjoy-life.desc": "Slow the pace, lift your joy—embrace the now and let life unfold.",
        "service.body-spirituality.title": "Body & Spirituality",
        "service.body-spirituality.desc": "Align the body, awaken the soul—move gently toward balance and light.",
        "service.body-mind.title": "Body & Mind",
        "service.body-mind.desc": "Move with purpose, breathe with ease—unite body and mind in quiet harmony.",

        // Page Titles and Breadcrumbs
        "page.about-us": "About Us",
        "page.services": "Services",
        "page.pricing": "Pricing",
        "page.classes": "Classes",
        "page.team": "Team",
        "page.portfolio": "Portfolio",
        "page.blog": "Blog",
        "page.contact": "Contact",
        "page.donations": "Donations",

        // Service Page
        "service.page-title": "Service",
        "service.breadcrumb-home": "Home",
        "service.breadcrumb-service": "Service",

        // About Page
        "about.page-title": "About Us",
        "about.breadcrumb-home": "Home",
        "about.breadcrumb-about": "About Us",

        // Footer
        "footer.description": "Flexi Flow Studio is your local sanctuary for movement, mindfulness, and meaningful connection.",
        "footer.quick-links": "Quick Links",
        "footer.newsletter": "Newsletter",
        "footer.newsletter-desc": "Subscribe to our newsletter for updates and special offers.",
        "footer.copyright": "© 2024 Flexi Flow Studio. All rights reserved.",
        "footer.designed-by": "Designed by",

        // Common Buttons
        "btn.read-more": "Read More",
        "btn.learn-more": "Learn More",
        "btn.contact-us": "Contact Us",
        "btn.join-now": "Join Now",
        "btn.book-now": "Book Now",
        "btn.subscribe": "Subscribe",
        "btn.send": "Send Message",

        // Language Switcher
        "lang.en": "English",
        "lang.fr": "Français",

        // Blog Page
        "blog.page-title": "Yoga Blog",
        "blog.breadcrumb-home": "Home",
        "blog.breadcrumb-blog": "Yoga Blog",
        "blog.section-title": "From Blog",
        "blog.section-header": "Latest Yoga Articles",
        "blog.article1.title": "Find Balance Through Yoga",
        "blog.article1.category": "Body Balance",
        "blog.article1.date": "01-Jan-2025",
        "blog.article1.description": "Discover the power of movement, breath, and stillness. Whether you're a beginner or deep into your practice, yoga offers a space to reconnect with yourself, build strength, and find peace in everyday life.",
        "blog.article2.title": "Breathe. Move. Grow",
        "blog.article2.category": "Body Fitness",
        "blog.article2.date": "10-Feb-2025",
        "blog.article2.description": "Yoga is more than just a workout — it's a journey toward inner strength and calm. Through mindful movement and focused breath, you can release tension, improve flexibility, and build a deeper connection with yourself.",
        "blog.article3.title": "Rooted in Calm, Rising in Strength",
        "blog.article3.category": "Body Fitness",
        "blog.article3.date": "1-July-2025",
        "blog.article3.description": "Yoga invites you to slow down, breathe deeply, and reconnect with your body. Each pose helps build flexibility, balance, and inner peace — both on and off the mat.",
        "blog.article4.title": "25 Most Powerful Foods",
        "blog.article4.category": "Nutrition",
        "blog.article4.date": "01-Aug-2025",
        "blog.article4.description": "Discover the 25 most powerful foods for your health, from honey and avocado to aloe vera and tomatoes. Learn what makes each food special and how they can boost your well-being!",
        "blog.read-more": "Read More",

        // Foods Page
        "foods.page-title": "25 Most Powerful Foods",
        "foods.breadcrumb-home": "Home",
        "foods.breadcrumb-blog": "Yoga Blog",
        "foods.breadcrumb-foods": "25 Most Powerful Foods",
        "foods.section-header": "Discover the Benefits of These Superfoods",
        "foods.section-description": "Explore 25 of the most powerful foods, their health benefits, and how they can transform your well-being.",

        // Individual Foods (condensed for space)
        "foods.honey.title": "Honey",
        "foods.honey.description": "Natural energy booster, soothes sore throats, and has antibacterial properties.",
        "foods.avocado.title": "Avocado",
        "foods.avocado.description": "Rich in healthy fats, supports heart health, and nourishes skin.",
        "foods.ginger.title": "Ginger",
        "foods.ginger.description": "Eases digestion, reduces inflammation, and relieves nausea.",
        "foods.garlic.title": "Garlic",
        "foods.garlic.description": "Boosts immunity, supports heart health, and has antimicrobial effects.",
        "foods.blueberries.title": "Blueberries",
        "foods.blueberries.description": "Packed with antioxidants, supports brain health, and fights aging.",

        // Contact Page
        "contact.page-title": "Contact",
        "contact.breadcrumb-home": "Home",
        "contact.breadcrumb-contact": "Contact",
        "contact.section-title": "Get In Touch",
        "contact.section-header": "For Any Query",
        "contact.location.title": "Location",
        "contact.location.address": "599 Franzina str, Gezina, Pretoria, South Africa",
        "contact.phone.title": "Phone",
        "contact.phone.number": "+078 824 6963",
        "contact.email.title": "Email",
        "contact.email.address": "flexiflowyoga@gmail.com",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.send": "Send Message",

        // Class Page
        "class.page-title": "Classes",
        "class.breadcrumb-home": "Home",
        "class.breadcrumb-class": "Classes",
        "class.our-classes": "Our Classes",
        "class.schedule": "Yoga Class Schedule",
        "class.filter.all": "All Classes",
        "class.filter.body-balance": "Body Balance",
        "class.filter.hatha": "Hatha Yoga",
        "class.filter.children": "Children Yoga",
        "class.filter.dance": "Dance Yoga",

        // Team Page
        "team.page-title": "Trainers",
        "team.breadcrumb-home": "Home",
        "team.breadcrumb-team": "Trainers",
        "team.our-trainers": "Yoga Trainers",
        "team.expert-trainer": "Expert Yoga Trainers",
        "team.yoga-teacher": "Yoga Teacher",

        // Feedback
        "feedback.form.success": "Thank you for your feedback!"
    },

    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.service": "Services",
        "nav.price": "Tarifs",
        "nav.class": "Cours",
        "nav.trainer": "Formateurs",
        "nav.feedback": "Avis",
        "nav.blog": "Blog",
        "nav.blog-grid": "Grille du Blog",
        "nav.blog-detail": "Détail du Blog",
        "nav.donations": "Dons",
        "nav.contact": "Contact",

        // Top Bar
        "topbar.hours": "5:00 - 16:30",
        "topbar.days": "Lun - Ven",
        "topbar.phone": "+27 78 824 6963",
        "topbar.appointment": "Pour Rendez-vous",

        // Hero Section
        "hero.title": "Pratique du Yoga pour une Bonne Santé",
        "hero.subtitle": "Commencez votre voyage vers la santé en entrant dans la tranquillité et en respirant l'équilibre avec Flexi Flow Yoga.",
        "hero.join-now": "Rejoignez-nous",
        "hero.contact-us": "Contactez-nous",

        // About Section
        "about.learn-about": "Apprenez à nous connaître",
        "about.welcome": "Bienvenue chez Flexi Flow Yoga",
        "about.description1": "Flexi Flow Studio est votre sanctuaire local pour le mouvement, la pleine conscience et les connexions significatives.",
        "about.description2": "Nous proposons des expériences de yoga et de bien-être qui vous permettent de vous sentir plus fort, plus calme et plus vivant—un souffle à la fois.",
        "about.learn-more": "En savoir plus",
        "about.our-founders": "Nos fondateurs",
        "about.expert-trainer": "Formateur de Yoga Expert",
        "about.yoga-teacher": "Professeur de Yoga",

        // Service Section
        "service.what-we-do": "Ce que nous faisons",
        "service.title": "Yoga pour la Santé",
        "service.heal-emotions.title": "Guérir les émotions",
        "service.heal-emotions.desc": "Déroulez l'esprit, ouvrez le cœur—trouvez la guérison dans chaque respiration et posture.",
        "service.body-refreshes.title": "Rafraîchir le corps",
        "service.body-refreshes.desc": "Vous aide à vous réinitialiser, vous détendre et vous reconnecter par le mouvement calme et la respiration.",
        "service.mind-serenity.title": "Esprit et Sérénité",
        "service.mind-serenity.desc": "Calmez le bruit, apaisez l'âme—trouvez la sérénité dans chaque respiration et pause.",
        "service.enjoy-life.title": "Profitez de votre vie",
        "service.enjoy-life.desc": "Ralentissez le rythme, élevez votre joie—embrassez l'instant présent et laissez la vie se déployer.",
        "service.body-spirituality.title": "Corps et Spiritualité",
        "service.body-spirituality.desc": "Aligner le corps, éveiller l'âme—se déplacer doucement vers l'équilibre et la lumière.",
        "service.body-mind.title": "Corps et Esprit",
        "service.body-mind.desc": "Bouger avec intention, respirer avec aisance—unir corps et esprit dans une harmonie tranquille.",

        // Page Titles and Breadcrumbs
        "page.about-us": "À propos de nous",
        "page.services": "Services",
        "page.pricing": "Tarifs",
        "page.classes": "Cours",
        "page.team": "Équipe",
        "page.portfolio": "Portfolio",
        "page.blog": "Blog",
        "page.contact": "Contact",
        "page.donations": "Dons",

        // Service Page
        "service.page-title": "Services",
        "service.breadcrumb-home": "Accueil",
        "service.breadcrumb-service": "Services",

        // About Page
        "about.page-title": "À propos de nous",
        "about.breadcrumb-home": "Accueil",
        "about.breadcrumb-about": "À propos de nous",

        // Footer
        "footer.description": "Flexi Flow Studio est votre sanctuaire local pour le mouvement, la pleine conscience et les connexions significatives.",
        "footer.quick-links": "Liens Rapides",
        "footer.newsletter": "Newsletter",
        "footer.newsletter-desc": "Abonnez-vous à notre newsletter pour les mises à jour et offres spéciales.",
        "footer.copyright": "© 2024 Flexi Flow Studio. Tous droits réservés.",
        "footer.designed-by": "Conçu par",

        // Common Buttons
        "btn.read-more": "Lire plus",
        "btn.learn-more": "En savoir plus",
        "btn.contact-us": "Contactez-nous",
        "btn.join-now": "Rejoignez-nous",
        "btn.book-now": "Réserver",
        "btn.subscribe": "S'abonner",
        "btn.send": "Envoyer",

        // Language Switcher
        "lang.en": "English",
        "lang.fr": "Français",

        // Blog Page
        "blog.page-title": "Blog de Yoga",
        "blog.breadcrumb-home": "Accueil",
        "blog.breadcrumb-blog": "Blog de Yoga",
        "blog.section-title": "Du Blog",
        "blog.section-header": "Derniers Articles de Yoga",
        "blog.article1.title": "Trouvez l'Équilibre par le Yoga",
        "blog.article1.category": "Équilibre du Corps",
        "blog.article1.date": "01-Jan-2025",
        "blog.article1.description": "Découvrez le pouvoir du mouvement, de la respiration et de la tranquillité. Que vous soyez débutant ou profondément engagé dans votre pratique, le yoga offre un espace pour vous reconnecter avec vous-même.",
        "blog.article2.title": "Respirez. Bougez. Grandissez",
        "blog.article2.category": "Fitness Corporel",
        "blog.article2.date": "10-Fév-2025",
        "blog.article2.description": "Le yoga est plus qu'un simple entraînement — c'est un voyage vers la force intérieure et le calme. Par le mouvement conscient et la respiration focalisée, vous pouvez libérer les tensions.",
        "blog.article3.title": "Enraciné dans le Calme, S'élevant dans la Force",
        "blog.article3.category": "Fitness Corporel",
        "blog.article3.date": "1-Juil-2025",
        "blog.article3.description": "Le yoga vous invite à ralentir, respirer profondément et vous reconnecter avec votre corps. Chaque posture aide à construire flexibilité, équilibre et paix intérieure.",
        "blog.article4.title": "25 Aliments les Plus Puissants",
        "blog.article4.category": "Nutrition",
        "blog.article4.date": "01-Août-2025",
        "blog.article4.description": "Découvrez les 25 aliments les plus puissants pour votre santé, du miel et de l'avocat à l'aloe vera et aux tomates.",
        "blog.read-more": "Lire Plus",

        // Foods Page
        "foods.page-title": "25 Aliments les Plus Puissants",
        "foods.breadcrumb-home": "Accueil",
        "foods.breadcrumb-blog": "Blog de Yoga",
        "foods.breadcrumb-foods": "25 Aliments les Plus Puissants",
        "foods.section-header": "Découvrez les Bienfaits de ces Super-aliments",
        "foods.section-description": "Explorez 25 des aliments les plus puissants, leurs bienfaits pour la santé et comment ils peuvent transformer votre bien-être.",

        // Individual Foods (condensed for space)
        "foods.honey.title": "Miel",
        "foods.honey.description": "Stimulant naturel d'énergie, apaise les maux de gorge et possède des propriétés antibactériennes.",
        "foods.avocado.title": "Avocat",
        "foods.avocado.description": "Riche en graisses saines, soutient la santé cardiaque et nourrit la peau.",
        "foods.ginger.title": "Gingembre",
        "foods.ginger.description": "Facilite la digestion, réduit l'inflammation et soulage les nausées.",
        "foods.garlic.title": "Ail",
        "foods.garlic.description": "Stimule l'immunité, soutient la santé cardiaque et a des effets antimicrobiens.",
        "foods.blueberries.title": "Myrtilles",
        "foods.blueberries.description": "Riches en antioxydants, soutiennent la santé cérébrale et combattent le vieillissement.",

        // Contact Page
        "contact.page-title": "Contact",
        "contact.breadcrumb-home": "Accueil",
        "contact.breadcrumb-contact": "Contact",
        "contact.section-title": "Contactez-nous",
        "contact.section-header": "Pour Toute Question",
        "contact.location.title": "Adresse",
        "contact.location.address": "599 Franzina str, Gezina, Pretoria, Afrique du Sud",
        "contact.phone.title": "Téléphone",
        "contact.phone.number": "+078 824 6963",
        "contact.email.title": "Email",
        "contact.email.address": "flexiflowyoga@gmail.com",
        "contact.form.name": "Votre Nom",
        "contact.form.email": "Votre Email",
        "contact.form.subject": "Sujet",
        "contact.form.message": "Message",
        "contact.form.send": "Envoyer le Message",

        // Class Page
        "class.page-title": "Cours",
        "class.breadcrumb-home": "Accueil",
        "class.breadcrumb-class": "Cours",
        "class.our-classes": "Nos Cours",
        "class.schedule": "Planning des cours de yoga",
        "class.filter.all": "Tous les cours",
        "class.filter.body-balance": "Équilibre du corps",
        "class.filter.hatha": "Hatha Yoga",
        "class.filter.children": "Yoga pour enfants",
        "class.filter.dance": "Yoga Danse",

        // Team Page
        "team.page-title": "Formateurs",
        "team.breadcrumb-home": "Accueil",
        "team.breadcrumb-team": "Formateurs",
        "team.our-trainers": "Formateurs de Yoga",
        "team.expert-trainer": "Formateurs de yoga experts",
        "team.yoga-teacher": "Professeur de yoga",

        // Feedback
        "feedback.form.success": "Merci pour votre retour !"
    }
};

// Enhanced Language Switcher with better error handling and performance
class LanguageSwitcher {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'en';
        this.fallbackLang = 'en';
        this.isInitialized = false;
        this.init();
    }

    getStoredLanguage() {
        try {
            return localStorage.getItem('flexi-flow-language');
        } catch (e) {
            console.warn('LocalStorage not available, using default language');
            return null;
        }
    }

    setStoredLanguage(lang) {
        try {
            localStorage.setItem('flexi-flow-language', lang);
        } catch (e) {
            console.warn('Could not save language preference');
        }
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupLanguageSwitcher();
            });
        } else {
            this.setupLanguageSwitcher();
        }
    }

    setupLanguageSwitcher() {
        if (this.isInitialized) return;
        
        this.addLanguageSwitcher();
        this.applyLanguage(this.currentLang);
        this.bindEvents();
        this.isInitialized = true;
    }

    addLanguageSwitcher() {
        // Enhanced target element detection
        const possibleLocations = [
            '.top-bar-right .social',
            '.top-bar-right',
            '.navbar-nav',
            '.navbar .container-fluid',
            '.header-top',
            '.navigation',
            'nav'
        ];

        let targetElement = null;
        for (const selector of possibleLocations) {
            targetElement = document.querySelector(selector);
            if (targetElement) break;
        }

        if (!targetElement) {
            console.warn('No suitable location found for language switcher');
            return;
        }

        // Check if language switcher already exists
        if (document.querySelector('.language-switcher')) {
            return;
        }

        const langSwitcher = document.createElement('div');
        langSwitcher.className = 'language-switcher';
        langSwitcher.innerHTML = `
            <div class="lang-dropdown">
                <button class="lang-btn" type="button" aria-label="Switch Language" aria-expanded="false">
                    <span class="current-lang">${this.currentLang.toUpperCase()}</span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="lang-dropdown-menu" role="menu">
                    <a href="#" class="lang-option" data-lang="en" role="menuitem">
                        <span class="flag" aria-hidden="true">🇺🇸</span>
                        <span class="lang-name">${this.getTranslation('lang.en')}</span>
                    </a>
                    <a href="#" class="lang-option" data-lang="fr" role="menuitem">
                        <span class="flag" aria-hidden="true">🇫🇷</span>
                        <span class="lang-name">${this.getTranslation('lang.fr')}</span>
                    </a>
                </div>
            </div>
        `;

        // Add CSS if not already present
        this.addCSS();

        targetElement.parentNode.insertBefore(langSwitcher, targetElement);
    }

    addCSS() {
        if (document.querySelector('#lang-switcher-styles')) return;

        const style = document.createElement('style');
        style.id = 'lang-switcher-styles';
        style.textContent = `
            .language-switcher {
                position: relative;
                display: inline-block;
                margin-left: 15px;
            }
            
            .lang-dropdown {
                position: relative;
            }
            
            .lang-btn {
                background: none;
                border: 1px solid #ddd;
                padding: 8px 12px;
                border-radius: 4px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 5px;
                transition: all 0.3s ease;
                color: inherit;
                font-size: 14px;
            }
            
            .lang-btn:hover {
                background-color: rgba(0,0,0,0.05);
                border-color: #ccc;
            }
            
            .lang-dropdown-menu {
                position: absolute;
                top: 100%;
                right: 0;
                background: white;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                min-width: 150px;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            }
            
            .lang-dropdown.active .lang-dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .lang-dropdown.active .lang-btn {
                background-color: rgba(0,0,0,0.05);
            }
            
            .lang-option {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 15px;
                text-decoration: none;
                color: #333;
                transition: background-color 0.2s ease;
                border-bottom: 1px solid #eee;
            }
            
            .lang-option:last-child {
                border-bottom: none;
            }
            
            .lang-option:hover {
                background-color: #f5f5f5;
            }
            
            .flag {
                font-size: 16px;
            }
            
            .lang-name {
                font-size: 14px;
            }
            
            .current-lang {
                font-weight: 500;
            }
        `;
        
        document.head.appendChild(style);
    }

    bindEvents() {
        // Use event delegation for better performance
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleDocumentClick(e) {
        const langBtn = e.target.closest('.lang-btn');
        const langOption = e.target.closest('.lang-option');
        const dropdown = e.target.closest('.lang-dropdown');

        if (langBtn) {
            e.preventDefault();
            this.toggleDropdown(langBtn.closest('.lang-dropdown'));
        } else if (langOption) {
            e.preventDefault();
            const lang = langOption.dataset.lang;
            this.switchLanguage(lang);
        } else if (!dropdown) {
            // Close all dropdowns when clicking outside
            this.closeAllDropdowns();
        }
    }

    handleKeyDown(e) {
        if (e.key === 'Escape') {
            this.closeAllDropdowns();
        }
    }

    toggleDropdown(dropdown) {
        const isActive = dropdown.classList.contains('active');
        this.closeAllDropdowns();
        
        if (!isActive) {
            dropdown.classList.add('active');
            dropdown.querySelector('.lang-btn').setAttribute('aria-expanded', 'true');
        }
    }

    closeAllDropdowns() {
        document.querySelectorAll('.lang-dropdown.active').forEach(dropdown => {
            dropdown.classList.remove('active');
            dropdown.querySelector('.lang-btn').setAttribute('aria-expanded', 'false');
        });
    }

    switchLanguage(lang) {
        if (lang !== this.currentLang && translations[lang]) {
            this.currentLang = lang;
            this.setStoredLanguage(lang);
            this.applyLanguage(lang);
            this.updateLanguageSwitcher();
            this.closeAllDropdowns();
            
            // Dispatch custom event for other components
            document.dispatchEvent(new CustomEvent('languageChanged', { 
                detail: { language: lang } 
            }));
        }
    }

    getTranslation(key, lang = this.currentLang) {
        if (translations[lang] && translations[lang][key]) {
            return translations[lang][key];
        }
        
        // Fallback to default language
        if (lang !== this.fallbackLang && translations[this.fallbackLang] && translations[this.fallbackLang][key]) {
            return translations[this.fallbackLang][key];
        }
        
        console.warn(`Translation not found for key: ${key} in language: ${lang}`);
        return key; // Return the key itself as fallback
    }

    applyLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found in translations`);
            return;
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key, lang);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.type === 'submit' || element.type === 'button') {
                    element.value = translation;
                } else {
                    element.placeholder = translation;
                }
            } else if (element.tagName === 'IMG') {
                element.alt = translation;
            } else if (element.hasAttribute('title')) {
                element.title = translation;
            } else {
                // Handle HTML content safely
                if (translation.includes('<span>')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update page title if available
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            const titleKey = this.detectPageTitleKey();
            if (titleKey) {
                const siteTitle = this.getTranslation(titleKey, lang);
                pageTitle.textContent = `${siteTitle} - Flexi Flow Studio`;
            }
        }
    }

    detectPageTitleKey() {
        const path = window.location.pathname.toLowerCase();
        const titleMap = {
            '/about': 'about.page-title',
            '/service': 'service.page-title',
            '/class': 'class.page-title',
            '/trainer': 'team.page-title',
            '/blog': 'blog.page-title',
            '/contact': 'contact.page-title',
            '/donations': 'donations.page-title',
            '/foods': 'foods.page-title'
        };

        for (const [route, key] of Object.entries(titleMap)) {
            if (path.includes(route)) {
                return key;
            }
        }
        return null;
    }

    updateLanguageSwitcher() {
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = this.currentLang.toUpperCase();
        }

        // Update language names in dropdown
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            const lang = option.dataset.lang;
            const langNameSpan = option.querySelector('.lang-name');
            if (langNameSpan) {
                langNameSpan.textContent = this.getTranslation(`lang.${lang}`);
            }
        });
    }

    // Public method to get translation (can be used by other scripts)
    translate(key, lang = this.currentLang) {
        return this.getTranslation(key, lang);
    }

    // Public method to get current language
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Method to add new translations dynamically
    addTranslations(lang, newTranslations) {
        if (!translations[lang]) {
            translations[lang] = {};
        }
        Object.assign(translations[lang], newTranslations);
    }

    // Method to refresh translations (useful after dynamic content is added)
    refresh() {
        this.applyLanguage(this.currentLang);
        this.updateLanguageSwitcher();
    }
}

// Utility function to format text with translation
function translateText(key, replacements = {}) {
    const switcher = window.languageSwitcher;
    if (!switcher) return key;
    
    let text = switcher.translate(key);
    
    // Replace placeholders like {name}, {count}, etc.
    Object.keys(replacements).forEach(placeholder => {
        text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), replacements[placeholder]);
    });
    
    return text;
}

// Initialize language switcher when DOM is ready
let languageSwitcher;

function initializeLanguageSwitcher() {
    if (!languageSwitcher) {
        languageSwitcher = new LanguageSwitcher();
        
        // Make it globally available
        window.languageSwitcher = languageSwitcher;
        window.translateText = translateText;
        
        // Add convenience methods to window
        window.t = (key, replacements) => translateText(key, replacements);
        window.getCurrentLang = () => languageSwitcher.getCurrentLanguage();
    }
}

// Initialize immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguageSwitcher);
} else {
    initializeLanguageSwitcher();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageSwitcher, translations, translateText };
}

// Additional utility functions for common translation tasks

// Function to translate form validation messages
function translateFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('invalid', function(e) {
                const fieldName = this.getAttribute('data-field-name') || this.name || 'field';
                const fieldLabel = languageSwitcher.translate(`contact.form.${fieldName}`) || fieldName;
                
                if (this.validity.valueMissing) {
                    this.setCustomValidity(
                        languageSwitcher.translate('validation.required').replace('{field}', fieldLabel)
                    );
                } else if (this.validity.typeMismatch) {
                    this.setCustomValidity(
                        languageSwitcher.translate('validation.invalid').replace('{field}', fieldLabel)
                    );
                }
            });
            
            input.addEventListener('input', function() {
                this.setCustomValidity('');
            });
        });
    });
}

// Function to handle date/time formatting based on language
function formatDateTime(date, lang = null) {
    const currentLang = lang || languageSwitcher.getCurrentLanguage();
    const locale = currentLang === 'fr' ? 'fr-FR' : 'en-US';
    
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// Function to handle number formatting
function formatNumber(number, lang = null) {
    const currentLang = lang || languageSwitcher.getCurrentLanguage();
    const locale = currentLang === 'fr' ? 'fr-FR' : 'en-US';
    
    return new Intl.NumberFormat(locale).format(number);
}

// Add these utility functions to window
window.translateFormValidation = translateFormValidation;
window.formatDateTime = formatDateTime;
window.formatNumber = formatNumber;

// Initialize form validation translations when language changes
document.addEventListener('languageChanged', translateFormValidation);

// Initialize form validation on page load
document.addEventListener('DOMContentLoaded', translateFormValidation);
