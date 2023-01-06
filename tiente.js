function ChangeMoney() {
    let A = document.getElementById("A").value;
    let F = document.getElementById("F").value;
    let T = document.getElementById("T").value;
    let Result ;

    if (F == "VND" && T == "USD")
    {
        Result = "Result:" + (A/23000) + "$";
    }
    else
        if (F == "USD" && T == "VND")
    {
        Result = "Result:"+ (A*23000)+"VND";
    }
    else
        if (F  == "USD" && T =="USD" )
    {
        Result = "Result:"+ A + "$";
    }
    else
    {
        Result = "Result:"+ A + "VND";
    }
   document.getElementById("Result").innerHTML = Result;

}
