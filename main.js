/**
 * Возвращает возраст по дате рождения
 *
 * @param dateString - дата рождения в формате '1990,05,25'
 * @return int сколько лет
 */
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
alert(getAge('1988, 05, 25'));
