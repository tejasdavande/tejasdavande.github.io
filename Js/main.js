/* ============================================================
   Tejas Davande — Portfolio interactions (dependency-free)
   ============================================================ */
(function () {
    'use strict';

    /* ---- Preloader ---- */
    window.addEventListener('load', function () {
        var pre = document.getElementById('preloader');
        if (pre) setTimeout(function () { pre.classList.add('hidden'); }, 500);
    });

    /* ---- Footer year ---- */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---- Mobile nav toggle ---- */
    var toggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');
    function closeMenu() {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            var open = navLinks.classList.toggle('open');
            toggle.classList.toggle('open', open);
            document.body.classList.toggle('no-scroll', open);
        });
        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });
    }

    /* ---- Navbar scrolled state + scroll progress + back-to-top ---- */
    var navbar = document.getElementById('navbar');
    var progress = document.getElementById('scroll-progress');
    var backTop = document.getElementById('back-to-top');
    function onScroll() {
        var y = window.scrollY || document.documentElement.scrollTop;
        if (navbar) navbar.classList.toggle('scrolled', y > 40);
        if (backTop) backTop.classList.toggle('show', y > 500);
        if (progress) {
            var h = document.documentElement.scrollHeight - window.innerHeight;
            progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---- Scroll reveal ---- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var ro = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    ro.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(function (el) { ro.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---- Active nav link on scroll ---- */
    var sections = document.querySelectorAll('main section[id]');
    var links = document.querySelectorAll('.nav-link');
    if ('IntersectionObserver' in window) {
        var so = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    var id = e.target.getAttribute('id');
                    links.forEach(function (l) {
                        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
                    });
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(function (s) { so.observe(s); });
    }

    /* ---- Animated stat counters ---- */
    function animateCount(el) {
        var target = parseFloat(el.getAttribute('data-target')) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1400, start = null;
        function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }
    var counters = document.querySelectorAll('.stat-num');
    if ('IntersectionObserver' in window) {
        var co = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
            });
        }, { threshold: 0.6 });
        counters.forEach(function (c) { co.observe(c); });
    } else {
        counters.forEach(animateCount);
    }

    /* ---- Role typewriter rotator ---- */
    var roleEl = document.getElementById('role-rotate');
    if (roleEl) {
        var roles = [
            'scalable backend systems',
            'Node.js & NestJS APIs',
            'AWS microservices',
            'real-time pipelines',
            'AI-powered backends',
            'high-performance APIs'
        ];
        var ri = 0, ci = 0, deleting = false;
        function type() {
            var word = roles[ri];
            roleEl.textContent = word.substring(0, ci);
            if (!deleting && ci < word.length) {
                ci++; setTimeout(type, 70);
            } else if (deleting && ci > 0) {
                ci--; setTimeout(type, 35);
            } else {
                if (!deleting) { deleting = true; setTimeout(type, 1600); }
                else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 250); }
            }
        }
        type();
    }
})();
