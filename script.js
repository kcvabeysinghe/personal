document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize skill bars animation
    function initSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        
        skillLevels.forEach(level => {
            const width = level.style.width;
            level.style.width = '0';
            
            ScrollTrigger.create({
                trigger: level,
                start: 'top bottom-=100',
                onEnter: () => {
                    gsap.to(level, {
                        width: width,
                        duration: 1.2,
                        ease: 'power2.out'
                    });
                },
                once: true
            });
        });
    }
    
    // Initialize service cards animation
    function initServiceCards() {
        const cards = document.querySelectorAll('.service-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            ScrollTrigger.create({
                trigger: card,
                start: 'top bottom-=50',
                onEnter: () => {
                    gsap.to(card, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'power2.out'
                    });
                },
                once: true
            });
        });
    }
    
    // Initialize timeline animation
    function initTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            ScrollTrigger.create({
                trigger: item,
                start: 'top bottom-=50',
                onEnter: () => {
                    gsap.to(item, {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        delay: index * 0.2,
                        ease: 'power2.out'
                    });
                },
                once: true
            });
        });
    }
    
    // Initialize code editor typing animation
    function initCodeEditor() {
        const lines = document.querySelectorAll('.editor-content .line');
        
        lines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(10px)';
            
            gsap.to(line, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                delay: 0.1 * index,
                ease: 'power2.out'
            });
        });
    }
    
    // Copy email to clipboard
    const copyEmailBtn = document.getElementById('copy-email');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function() {
            const email = "chethanaabeysinghe95@gmail.com";
            navigator.clipboard.writeText(email).then(
                function() {
                    const originalText = copyEmailBtn.innerHTML;
                    copyEmailBtn.innerHTML = '<i class="fas fa-check"></i> Email Copied!';
                    
                    setTimeout(function() {
                        copyEmailBtn.innerHTML = originalText;
                    }, 2000);
                },
                function() {
                    alert('Could not copy email. Please select and copy manually.');
                }
            );
        });
    }
    
    // Navigation active state
    function setActiveNav() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.side-nav li');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight/3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if(item.querySelector('a').getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    }
    
    // Initialize all animations
    initSkillBars();
    initServiceCards();
    initTimeline();
    initCodeEditor();
    setActiveNav();
});