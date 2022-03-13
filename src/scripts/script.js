const convertcsv = () => {
    const csv = document.getElementById("frmcsv").value.trim();
    const lines = csv.split("\n");
    const keyline = lines.shift();
    const keywords = keyline
        .split(",")
        .map((itm) => itm.trim())
        .map((itm) => itm.replace(/\"/g, ""));
    const arr = new Array();
    for (let i = 0; i < lines.length; i++) {
        let ob = Object.create(null);
        let line = lines[i]
            .split(",")
            .map((itm) => itm.trim())
            .map((itm) => itm.replace(/\"/g, ""));
        if (line.length == keywords.length) {
            for (let j = 0; j < keywords.length; j++) {
                ob[keywords[j]] = line[j];
            }
            arr.push(ob);
        }
    }
    document.getElementById("tojson").value = JSON.stringify(arr);
};

const covertjson = (arr) => {
    let csv = new String();
    csv = Object.keys(arr[0]).join(",");
    for (let i = 0; i < arr.length; i++) {
        csv = csv + "\n" + Object.values(arr[i]).join(",");
    }
    return csv;
};

const dflt = () => {
    console.log(
        covertjson([
            {
                Name: "Alex",
                Sex: "M",
                Age: "41",
                "Height (in)": "74",
                "Weight (lbs)": "170",
            },
            {
                Name: "Bert",
                Sex: "M",
                Age: "42",
                "Height (in)": "68",
                "Weight (lbs)": "166",
            },
            {
                Name: "Carl",
                Sex: "M",
                Age: "32",
                "Height (in)": "70",
                "Weight (lbs)": "155",
            },
            {
                Name: "Dave",
                Sex: "M",
                Age: "39",
                "Height (in)": "72",
                "Weight (lbs)": "167",
            },
            {
                Name: "Elly",
                Sex: "F",
                Age: "30",
                "Height (in)": "66",
                "Weight (lbs)": "124",
            },
            {
                Name: "Fran",
                Sex: "F",
                Age: "33",
                "Height (in)": "66",
                "Weight (lbs)": "115",
            },
            {
                Name: "Gwen",
                Sex: "F",
                Age: "26",
                "Height (in)": "64",
                "Weight (lbs)": "121",
            },
            {
                Name: "Hank",
                Sex: "M",
                Age: "30",
                "Height (in)": "71",
                "Weight (lbs)": "158",
            },
            {
                Name: "Ivan",
                Sex: "M",
                Age: "53",
                "Height (in)": "72",
                "Weight (lbs)": "175",
            },
            {
                Name: "Jake",
                Sex: "M",
                Age: "32",
                "Height (in)": "69",
                "Weight (lbs)": "143",
            },
            {
                Name: "Kate",
                Sex: "F",
                Age: "47",
                "Height (in)": "69",
                "Weight (lbs)": "139",
            },
            {
                Name: "Luke",
                Sex: "M",
                Age: "34",
                "Height (in)": "72",
                "Weight (lbs)": "163",
            },
            {
                Name: "Myra",
                Sex: "F",
                Age: "23",
                "Height (in)": "62",
                "Weight (lbs)": "98",
            },
            {
                Name: "Neil",
                Sex: "M",
                Age: "36",
                "Height (in)": "75",
                "Weight (lbs)": "160",
            },
            {
                Name: "Omar",
                Sex: "M",
                Age: "38",
                "Height (in)": "70",
                "Weight (lbs)": "145",
            },
            {
                Name: "Page",
                Sex: "F",
                Age: "31",
                "Height (in)": "67",
                "Weight (lbs)": "135",
            },
            {
                Name: "Quin",
                Sex: "M",
                Age: "29",
                "Height (in)": "71",
                "Weight (lbs)": "176",
            },
            {
                Name: "Ruth",
                Sex: "F",
                Age: "28",
                "Height (in)": "65",
                "Weight (lbs)": "131",
            },
        ])
    );
    document.getElementById("frmcsv").value = `
    "Name",     "Sex", "Age", "Height (in)", "Weight (lbs)"
    "Alex",       "M",   41,       74,      170
    "Bert",       "M",   42,       68,      166
    "Carl",       "M",   32,       70,      155
    "Dave",       "M",   39,       72,      167
    "Elly",       "F",   30,       66,      124
    "Fran",       "F",   33,       66,      115
    "Gwen",       "F",   26,       64,      121
    "Hank",       "M",   30,       71,      158
    "Ivan",       "M",   53,       72,      175
    "Jake",       "M",   32,       69,      143
    "Kate",       "F",   47,       69,      139
    "Luke",       "M",   34,       72,      163
    "Myra",       "F",   23,       62,       98
    "Neil",       "M",   36,       75,      160
    "Omar",       "M",   38,       70,      145
    "Page",       "F",   31,       67,      135
    "Quin",       "M",   29,       71,      176
    "Ruth",       "F",   28,       65,      131
    
    `;
};
