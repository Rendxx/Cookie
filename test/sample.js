
$(function () {
    var secureVal = false;
    var btn = {};
    btn["set"] = $(".btn-set");
    btn["get"] = $(".btn-get");
    btn["del"] = $(".btn-del");

    var info = {};
    info["name"] = $("input[name=input-name]");
    info["value"] = $("input[name=input-value]");
    info["expires"] = $("input[name=input-expires]");
    info["domain"] = $("input[name=input-domain]");
    info["path"] = $("input[name=input-path]");
    info["secure"] = {
        "yes": $(".radio-btn-yes"),
        "no": $(".radio-btn-no")
    };

    rstPanel = $(".wrap-result");

    btn["set"].click(function () {
        var opts = {};
        if (info["name"].val() != "") opts["name"] = info["name"].val();
        if (info["value"].val() != "") opts["value"] = info["value"].val();
        if (info["expires"].val() != "") opts["expires"] = info["expires"].val();
        if (info["domain"].val() != "") opts["domain"] = info["domain"].val();
        if (info["path"].val() != "") opts["path"] = info["path"].val();
        opts["secure"] = secureVal;

        if ($$.cookie.set(opts) == null)
            rstPanel.text("set cookie: failed").fadeIn(100);
        else
            rstPanel.text("set cookie: " + opts["name"]).fadeIn(100);
    });

    btn["get"].click(function () {
        var rst = $$.cookie.get(info["name"].val());
        rstPanel.text(rst).fadeIn(100);
    });

    btn["del"].click(function () {
        var opts = {};
        if (info["name"].val() != "") opts["name"] = info["name"].val();
        if (info["domain"].val() != "") opts["domain"] = info["domain"].val();
        if (info["path"].val() != "") opts["path"] = info["path"].val();

        $$.cookie.del(opts);
        rstPanel.text("delete cookie: " + info["name"].val()).fadeIn(100);
    });

    info["secure"]["yes"].click(function () {
        info["secure"]["yes"].addClass("checked");
        info["secure"]["no"].removeClass("checked");
        secureVal = true;
    });

    info["secure"]["no"].click(function () {
        info["secure"]["yes"].removeClass("checked");
        info["secure"]["no"].addClass("checked");
        secureVal = false;
    });

    info["secure"]["no"].click();
});