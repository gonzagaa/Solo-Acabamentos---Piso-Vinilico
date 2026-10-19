// Swiper só com os módulos usados no site (navegação, paginação e autoplay)
import Swiper from "./swiper.min.js?v=2026101902";
import Navigation from "./modules/navigation.min.js?v=2026101902";
import Pagination from "./modules/pagination.min.js?v=2026101902";
import Autoplay from "./modules/autoplay.min.js?v=2026101902";

Swiper.use([Navigation, Pagination, Autoplay]);
window.Swiper = Swiper;
