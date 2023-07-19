function newUser(name, age, country) {
    var name = name || 'Valentin'; //Después del || es el default value
    var age = age || 29;
    var country = country || 'Colombia';
    console.log(name,age, country)
}

newUser();
newUser('david', 22, 'guatemala');

//modo de ecmascript más eficiente

function newAdmin(name = 'Valentin', age = 29, country = 'Colombia') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('David', 22, 'CL');