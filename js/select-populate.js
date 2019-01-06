function populateSelect() {
    // THE JSON ARRAY.
    var countries = [
        {
            "ID": "001",
            "Country": "Australia",
            "Capital":   "Canberra"
        },
        {
            "ID": "002",
            "Country": "The Philippines",
            "Capital": "Manila"
        },
        {
            "ID": "003",
            "Country": "England",
            "Capital": "London"
        },
    ];

    var ele = document.getElementById('sel');
        countries.map(country => {
             // POPULATE SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                `<option value=${country['ID']}> ${country['Capital']}, ${country['Country']}</option>`;
        });
       

}

function show(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var msg = document.getElementById('msg');
    msg.innerHTML = `Selected Country: <br><b> ${ele.options[ele.selectedIndex].text} </b> </br>
    ID: <b> ${ele.value}  </b>`;
}