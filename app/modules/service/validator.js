app.factory('validator', [
    'backend', function (backend) {

    var validator = {};

    var errors = [];

    backend.getValidation.async().then(function (data) {
        errors = data;
    });

    validator.getByName = function (name) {
        for (var i = 0; i < errors.length; i++) {
            if (name === errors[i].name) return errors[i];
        }
    };

    return validator;

}]);