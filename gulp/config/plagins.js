import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обраобтка ошибок
import notify from "gulp-notify"; // Сообщение (подсказки)
import browsersync from "browser-sync"; // Локальный сервер

export const plugins = {
    replace : replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync 
}