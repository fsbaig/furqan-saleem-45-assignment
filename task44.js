function make_Sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("make sandwich with help ".concat(item.join(', '), ". "));
}
make_Sandwich("cheese", "ham");
make_Sandwich("turkey", "lettuce", "tommato");
make_Sandwich("avacado", "mayo", "sprouts", "mustard");
