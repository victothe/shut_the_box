function get_username() {
    let cook = document.cookie;
    let ids = cook.split("; ");
    let fspace;
    for (let i = 0; i < ids.length; i++) {
        if (ids[i].includes("=")) {
            fspace = ids[i].indexOf("=");
            ids[i] = ids[i].slice(0, fspace) + ";" + ids[i].slice(fspace + 1, ids[i].length);
            ids[i] = ids[i].split(";");
        }
        else{
            ids[i] = "" + ";" + ids[i];
            ids[i] = ids[i].split(";");
        }
    }
    const obj = Object.fromEntries(ids);
    if ("username" in obj) {
        if (obj["username"].includes(",") || obj["username"].includes(" ")) {
            return "";
        }
        return obj["username"];
    }
    return "";
}
