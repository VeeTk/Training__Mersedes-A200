import tabs from "./modules/tabs";
import smoothScroll from "./modules/smoothScroll";
import sendForm from "./modules/sendForm";
import modal from "./modules/modal";
import burger from "./modules/burger";
import accordion from "./modules/accordion";

tabs(".design__title", "[data-tabs-handler]", "[data-tabs-field]");
smoothScroll(".menu-list__link", ".main__scroll");
sendForm(".form-test-drive");
modal(".more", ".modal");
burger(".humburger-menu", ".menu", ".menu-list__link");
accordion(".feature__link", ".feature-sub");
