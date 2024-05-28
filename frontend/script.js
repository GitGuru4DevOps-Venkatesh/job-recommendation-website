$(document).ready(function() {
    $('#jobForm').on('submit', function(e) {
        e.preventDefault();

        const jobDescription = $('#jobDescription').val();
        const responsibilities = $('#responsibilities').val();

        $.ajax({
            url: '/analyze', // Use relative URL since the frontend and backend are on the same server
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                job_description: jobDescription,
                responsibilities: responsibilities
            }),
            success: function(data) {
                $('#recommendationsList').empty();
                data.suggestions.forEach(function(suggestion) {
                    $('#recommendationsList').append('<li>' + suggestion + '</li>');
                });
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});

