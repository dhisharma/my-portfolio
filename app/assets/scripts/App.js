import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll'
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/modal'

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'),'80%');
new RevealOnScroll($('.testimonial'),'60%');
var stickyHeader = new StickyHeader();
var modal =new Modal();