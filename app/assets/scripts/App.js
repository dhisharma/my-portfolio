import RevealOnScroll from './modules/RevealOnScroll'
import MobileMenu from './modules/MobileMenu';
import $ from 'jquery';
var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'),'80%');
new RevealOnScroll($('.testimonial'),'60%');