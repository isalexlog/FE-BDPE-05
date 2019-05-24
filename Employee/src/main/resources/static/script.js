$(document).ready(function () {

    var inputs = [
        {
            element: 'input',
            name: 'firstName',
            restrictedValue: ''
        },
        {
            element: 'input',
            name: 'lastName',
            restrictedValue: ''
        },
        {
            element: 'input',
            name: 'birthDate',
            restrictedValue: ''
        },
        {
            element: 'select',
            name: 'position',
            restrictedValue: 0
        }
    ];

    var $employeeForm = $('#employee_form');
    $employeeForm.submit(function(event) {
        event.preventDefault();

        inputs.forEach(function (input) {
            var $currentInput = getInput(input);
            $($currentInput).focus(function(){
                $currentInput.parent().next().hide();
            });
        });

        if (!isFormValid(inputs))
            return;
        var formData = $employeeForm.serializeToJSON();
        var id = $('#employee_form input[name=id]').val();
        var method = 'POST';
        if (id) {
            formData['id'] = id;
            method = 'PUT';
        }
        var payloadAsString = JSON.stringify(formData);

        $.ajax({
            url: "/employee",
            type: method,
            dataType: 'json',
            contentType: 'application/json',
            data: payloadAsString,
            success: function(data) {
                fillEmployeesTable();
                cleanEmployeeForm($('#employee_form'));
                $('#employee_form input[type=submit]').val('Create employee');
            },
            error: function() {
                alert(`Action ${method} with new employee failed`);
            }
        });
    });

    $.ajax({
        url: "/position",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function(positions) {
            fillEmployeeFormSelectPositionOptions(positions);
            mapPosition = createPositionMapper(positions);
            fillEmployeesTable();
        },
        error: function() {
            alert("Can't download employees");
        }
    });

});