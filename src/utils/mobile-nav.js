const mobile_nav = () => {
    const header_btn = document.querySelector('.header__menu-bar-btn');
    const mobile_nav = document.querySelector('.mobile-nav');
    const mobile_links = document.querySelectorAll('.mobile-nav__link');

    // const header = document.querySelector('header');

    let is_mobile_nav_open = false;

    header_btn.addEventListener('click', () => {
        is_mobile_nav_open = !is_mobile_nav_open;

        // header.classList.toggle('show-menu');
        
        if (is_mobile_nav_open)
        {
            mobile_nav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }
        else
        {
            mobile_nav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobile_links.forEach(link => {
        link.addEventListener('click', () => {
            is_mobile_nav_open = false;

            mobile_nav.style.display = 'none';

            document.body.style.overflowY = 'auto';
        });
    });
};

export default mobile_nav;
