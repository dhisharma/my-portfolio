import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll'
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader'

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'),'80%');
new RevealOnScroll($('.testimonial'),'60%');
var stickyHeader = new StickyHeader();