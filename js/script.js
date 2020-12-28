// Business Logic
function Contact(first, last) {
    this.firstName = first;
    this.firstName = last;
}

// User Interface Logic
$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").appended("<li><span class='contact'>" + newContact.firstName + "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
    })
})