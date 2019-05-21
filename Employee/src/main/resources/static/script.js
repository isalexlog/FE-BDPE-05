$(document).ready(function () {
    console.log('kuku');

    var mapPosition;

    var $employeeForm = $('#employee_form');
    $employeeForm.submit(function(event) {
        event.preventDefault();

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

        inputs.forEach(function (input) {
            var $currentInput = getInput(input);
            $($currentInput).focus(function(){
                $currentInput.parent().next().hide();
            });
        });

        if (!isFormValid(inputs))
            return;

        $.ajax({
            url: "/employee",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify($employeeForm.serializeToJSON()),
            success: function(data) {
                fillEmployeesTable(mapPosition);
                cleanEmployeeForm($('#employee_form'));
            },
            error: function() {
                alert("Creating new employee failed");
            }
        });
    });

    $.ajax({
        url: "/position",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function(positions) {
            console.log(positions);
            fillEmployeeFormSelectPositionOptions(positions);
            mapPosition = createPositionMapper(positions);
            fillEmployeesTable(mapPosition);
        },
        error: function() {
            alert("Can't download employees");
        }
    });

    $('table#employees button[name=edit]').each(function () {
        $(this).click(function (event) {
            console.log(event.target.id.split("_")[1]);
        })
    });

});