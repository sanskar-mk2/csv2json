const convert = () => {
    const csv = document.getElementById("csv").value.trim();
    const lines = csv.split("\n");
    const keyline = lines.shift();
    const keywords = keyline.split(",").map((itm) => itm.trim()).map((itm) => itm.replace(/\"/g, ""));
    const arr = new Array();
    for (let i = 0; i < lines.length; i++) {
        let ob = Object.create(null);
        let line = lines[i].split(",").map((itm) => itm.trim()).map((itm) => itm.replace(/\"/g, ""));
        if (line.length == keywords.length) {
            for (let j = 0; j < keywords.length; j++) {
                ob[keywords[j]] = line[j];
            }
            arr.push(ob);
        }
    }
    document.getElementById("json").value = (JSON.stringify(arr));
}

const dflt = () => {
    document.getElementById("csv").value = `
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
    
    `
}