
// var taskLinks = document.getElementsByClassName("taskLinks");
function hiddenRightmenu() {
    document.getElementsByClassName("right-pana")[0].style.display = "none";
    document.getElementsByClassName("main-content")[0].style.marginRight = "0";

}
//Hidden right-menu
var bodyElement = document.body;
function hdmenu(event) {
    var header = document.getElementsByClassName("header")[1];
    var tas = document.getElementsByClassName("tasklist");
    var rightpara = document.getElementsByClassName("right-pana")[0];
    var complete = document.getElementById("showcompleteid");
    var usertool = document.getElementsByClassName("user-toolbar")[0];
    var leftwrapper = document.getElementsByClassName("left-wrapper")[0];
    var createlist = document.getElementById("createlistid");
    var buttonlist = document.getElementsByClassName("button-list")[0];
    var currentE = event.target;
    if ((header.contains(currentE) == false) && (tas[0].contains(currentE) == false) && (tas[1].contains(currentE) == false) && (usertool.contains(currentE) == false) && (rightpara.contains(currentE) == false) && (complete.contains(currentE) == false) && (leftwrapper.contains(currentE) == false) && (createlist.contains(currentE) == false) && (buttonlist.contains(currentE) == false)) {
        hiddenRightmenu();
    }
};
bodyElement.addEventListener("click", function (event) {
    hdmenu(event);
});
document.getElementsByClassName("button-list")[0].addEventListener("click", function () {
    var rem = document.getElementsByClassName("loverem");
    var resize = document.getElementsByClassName("resize");
    var remhi = document.getElementsByClassName("antirem");
    var maincon = document.getElementsByClassName("main-content")[0];
    var user = document.getElementsByClassName("user")[0];
    var leftwrapper = document.getElementsByClassName("left-wrapper")[0];
    if (window.innerWidth >= 1000) {
        for (i = 0; i < rem.length; i++) {
            rem[i].classList.toggle("mehi");
        }
        for (i = 0; i < resize.length; i++) {
            resize[i].classList.toggle("resizehi");
        }
        maincon.classList.toggle("main-contenthi");
        user.classList.toggle("resizehi");
        user.classList.toggle("resize-user");
    } else {
        for (i = 0; i < remhi.length; i++) {
            remhi[i].classList.toggle("rem");
        }
        for (i = 0; i < resize.length; i++) {
            resize[i].classList.toggle("resize-less");
        }
        maincon.classList.toggle("main-content-less-thousand");
        leftwrapper.classList.toggle("resize-less-wrapper");
        user.classList.toggle("resize-user");
    }
});
window.addEventListener("resize", function () {
    var maincon = document.getElementsByClassName("main-content")[0];
    var resize = document.getElementsByClassName("resize");
    var rem = document.getElementsByClassName("loverem");
    var user = document.getElementsByClassName("user")[0];
    var leftwrapper = document.getElementsByClassName("left-wrapper")[0];
    var remhi = document.getElementsByClassName("antirem");
    if (window.innerWidth < 1000) {
        for (i = 0; i < resize.length; i++) {
            resize[i].classList.remove("resizehi");
        }
        for (i = 0; i < rem.length; i++) {
            rem[i].classList.remove("mehi");
        }
        maincon.classList.remove("main-contenthi");
        user.classList.remove("resizehi");
    } else {
        leftwrapper.classList.remove("resize-less-wrapper");
        maincon.classList.remove("main-content-less-thousand");
        for (i = 0; i < resize.length; i++) {
            resize[i].classList.remove("resize-less");
        }
        for (i = 0; i < remhi.length; i++) {
            remhi[i].classList.add("rem");
        }
    }
})
function menuChange(event) {
    var menulinks = document.getElementsByClassName("menuLinks");
    for (i = 0; i < menulinks.length; i++) {
        menulinks[i].classList.remove("list-scroll-active");
    }
    event.currentTarget.classList.add("list-scroll-active");
    document.getElementsByTagName("h1")[0].innerHTML = event.currentTarget.getElementsByTagName("span")[0].innerHTML;
}
function createANewTask(value) {
    var taskListE = document.getElementsByClassName("tasklist")[0].getElementsByTagName("ul")[0];
    var liE = document.createElement("li");
    var taskLinksE = document.createElement("div");
    taskLinksE.setAttribute("class", "taskLinks");
    taskLinksE.setAttribute("onclick", "oneClick(event)");
    taskLinksE.setAttribute("ondblclick", "openRightMenu(event)");
    taskLinksE.setAttribute("oncontextmenu", "opentContextTask(event)")
    var inputcheckE = document.createElement("div");
    inputcheckE.setAttribute("class", "input-check");
    inputcheckE.setAttribute("onclick", "changeComplete(event)");
    var linkE = document.createElement("a");
    linkE.setAttribute("href", "#");
    var iE1 = document.createElement("i");
    iE1.setAttribute("class", "flaticon-button");
    linkE.appendChild(iE1);
    inputcheckE.appendChild(linkE);
    var titleTask = document.createElement("div");
    titleTask.setAttribute("class", "title-task");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(value));
    titleTask.appendChild(span);
    var inputfav = document.createElement("div");
    inputfav.setAttribute("class", "input-favorite");
    var linkE2 = document.createElement("a");
    linkE2.setAttribute("href", "#");
    var iE2 = document.createElement("i");
    iE2.setAttribute("class", "flaticon-favorite");
    inputfav.appendChild(linkE2.appendChild(iE2));
    taskLinksE.appendChild(inputcheckE);
    taskLinksE.appendChild(titleTask);
    taskLinksE.appendChild(inputfav);
    liE.appendChild(taskLinksE);
    taskListE.appendChild(liE);
}
// Function change current task to complete task
function changeCompleteTask(newElement, complete) {
    newElement.style.display = "block";
    newElement.classList.add("iscomplete");
    var taskLinkElement = newElement.getElementsByClassName("taskLinks")[0];
    taskLinkElement.parentElement.style.opacity = "0.6";
    // clearEvent.classList.remove("taskLinks");
    var valueendTask = newElement.getElementsByTagName("span")[0].innerHTML;
    var endTask = document.createElement("span");

    newElement.getElementsByClassName("input-check")[0].classList.add("mehi");
    newElement.getElementsByClassName("title-task")[0].classList.add("mehi");
    console.log(newElement);
    //
    var inputcheck = newElement.getElementsByClassName("input-check-complete")[0];
    var infodetailcheck = newElement.getElementsByClassName("info-detail")[0];
    if (inputcheck === undefined) {
        var newInput = document.createElement("div");
        newInput.setAttribute("class", "input-check-complete");
        newInput.setAttribute("onclick", "changeTask(event)");
        var newA = document.createElement("a");
        newA.setAttribute("href", "#");
        var newChecked = document.createElement("i");
        newChecked.setAttribute("class", "flaticon-check-square");
        newA.appendChild(newChecked);
        newInput.appendChild(newA);

        //
        var newDetail = document.createElement("div");
        newDetail.setAttribute("class", "info-detail");
        endTask.setAttribute("class", "end-task");
        endTask.appendChild(document.createTextNode(valueendTask));
        var timedetail = document.createElement("div");
        timedetail.setAttribute("class", "time-detail");
        timedetail.appendChild(document.createTextNode("a few seconds before"));
        newDetail.appendChild(endTask);
        newDetail.appendChild(timedetail);
        //
        taskLinkElement.appendChild(newInput);
        taskLinkElement.appendChild(newDetail);
    } else {
        inputcheck.classList.remove("mehi");
        infodetailcheck.classList.remove("mehi");
    }


    // var getNodeClear = newElement.getElementsByClassName("taskLinks")[0];
    // getNodeClear.removeChild(newElement.getElementsByClassName("input-check")[0]);
    // getNodeClear.removeChild(newElement.getElementsByClassName("title-task")[0])
    complete.appendChild(newElement);
}
//Change complete task to current task
function changeCurrentTask(newElement) {
    newElement.style.display = "block";
    newElement.style.opacity = "1";
    newElement.classList.remove("iscomplete");
    var taskLinkElement = document.getElementsByClassName("tasklist")[0].getElementsByTagName("ul")[0];
    // newElement.getElementsByClassName("input-check")[0].style.display = "block";
    // newElement.getElementsByClassName("title-task")[0].style.display = "block";
    // newElement.getElementsByClassName("input-check-complete")[0].style.display = "none";
    // newElement.getElementsByClassName("info-detail")[0].style.display = "none";

    //Demo
    newElement.getElementsByClassName("input-check")[0].classList.remove("mehi");
    newElement.getElementsByClassName("title-task")[0].classList.remove("mehi");
    newElement.getElementsByClassName("input-check-complete")[0].classList.add("mehi");
    newElement.getElementsByClassName("info-detail")[0].classList.add("mehi");
    //
    console.log(newElement);
    taskLinkElement.appendChild(newElement);
}
//Event change current task to complete task
function changeComplete(event) {
    var complete = document.getElementsByClassName("tasklist")[1].getElementsByTagName("ul")[0];
    event.currentTarget.parentElement.parentElement.style.display = "none";
    var newElement = event.currentTarget.parentElement.parentElement;
    changeCompleteTask(newElement, complete);
};

// Complete to Current Task
function changeTask(event) {
    var newElement = event.currentTarget.parentElement.parentElement;
    event.currentTarget.parentElement.parentElement.style.display = "none";
    changeCurrentTask(newElement);
};
//Event for click complete
function showCompleteTask() {
    document.getElementsByClassName("tasklist")[1].classList.toggle("mehi");
}
//Event click input to do
document.getElementById("inputtodoid").addEventListener("keyup", function (event) {
    event.preventDefault;
    if (event.keyCode === 13) {
        createANewTask(this.value);
        this.value = "";
    }

});
// var taskLinks = document.getElementsByClassName("tasklist")[1].getElementsByClassName("taskLinks");
// if (taskLinks !== undefined) {
//     for (i = 0; i < taskLinks.length; i++) {
//         taskLinks[i].addEventListener("dblclick", function (event) {
//             document.getElementsByClassName("right-pana")[0].style.display = "block";
//             document.getElementsByClassName("main-content")[0].style.marginRight = "367px";
//             document.getElementById("task-info-menu").innerHTML = event.currentTarget.getElementsByTagName("span")[0].innerHTML;
//         });
//         taskLinks[i].addEventListener("click", function (event) {
//             document.getElementById("task-info-menu").innerHTML = event.currentTarget.getElementsByTagName("span")[0].innerHTML;
//         });
//     };
// }

function openRightMenu(event) {
    document.getElementsByClassName("right-pana")[0].style.display = "block";
    document.getElementsByClassName("main-content")[0].style.marginRight = "367px";
    document.getElementById("task-info-menu").innerHTML = event.currentTarget.getElementsByTagName("span")[0].innerHTML;
    if (event.currentTarget.parentElement.classList.contains("iscomplete") === true) {
        document.getElementById("label1id").style.display = "none";
        document.getElementById("label2id").style.display = "block";
    } else {
        document.getElementById("label1id").style.display = "block";
        document.getElementById("label2id").style.display = "none";
    }
};
function oneClick(event) {
    document.getElementById("task-info-menu").innerHTML = event.currentTarget.getElementsByTagName("span")[0].innerHTML;
    if (event.currentTarget.parentElement.classList.contains("iscomplete") === true) {
        document.getElementById("label1id").style.display = "none";
        document.getElementById("label2id").style.display = "block";
    } else {
        document.getElementById("label1id").style.display = "block";
        document.getElementById("label2id").style.display = "none";
    }
    taskChange(event);
};

//Function choose List Task active

// function taskChange(event) {
//     for (i = 0; i < taskLinks.length; i++) {
//         taskLinks[i].className = taskLinks[i].className.replace(" list-scroll-active", "");
//     }
//     event.currentTarget.className += " list-scroll-active";
// };

function taskChange(event) {
    var taskLinks = document.getElementsByClassName("taskLinks");
    for (i = 0; i < taskLinks.length; i++) {
        taskLinks[i].className = taskLinks[i].className.replace(" list-scroll-active", "");
    }
    event.currentTarget.className += " list-scroll-active";
};
//Event choose List Task to Active

// for (var i = 0; i < taskLinks.length; i++) {
//     taskLinks[i].addEventListener("click", function (event) {
//         taskChange(event);
//     });
// }

//Open menu
var icon = document.getElementsByClassName("icon")[0].getElementsByTagName("li");
for (var i = 0; i < icon.length; i++) {
    icon[0].addEventListener("click", function () {
        document.getElementById("").classList.toggle("show");
    });
    icon[1].addEventListener("click", function () {
        document.getElementById("sortmenuid").classList.toggle("show");
    });
    icon[2].addEventListener("click", function () {
        document.getElementById("moremenuid").classList.toggle("show");
    })
};
//Open account menu setting
document.getElementsByClassName("user")[0].addEventListener("click", function () {
    document.getElementById("user-menu").classList.toggle("show");
})
document.getElementsByClassName("main-content")[0].addEventListener("click", function () {
    var ele = document.getElementById("user-menu");
    if (ele.classList.contains("show") === true) {
        ele.classList.remove("show");
    }
});
//Open account setting modal
var settingModal = document.getElementById("setting-modal");
function openAccountSetting() {
    settingModal.classList.add("show");
}
function closeAccountSetting() {
    settingModal.classList.remove("show");
}
var tab = document.getElementsByClassName("modal-tab");
var tablinks = document.getElementsByClassName("setting-tab-detail");
console.log(tab.length);
function openSettingTab(event, tabid) {
    for (var i = 0; i < tab.length; i++) {
        tab[i].classList.add("mehi");
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" setting-tab-active", "");
    }
    console.log(tabid);
    document.getElementById(tabid).classList.remove("mehi");
    event.currentTarget.className += " setting-tab-active";
}

//Create List open Modal
var createlist = document.getElementById("modal-createlist");
document.getElementById("createlistid").addEventListener("click", function () {
    createlist.classList.remove("mehi");
})
// Create list close
function closeCreateList() {
    createlist.classList.add("mehi");
}
function editList(event) {
    var value = event.currentTarget.parentElement.getElementsByTagName("span")[0].innerHTML;
    createlist.classList.remove("mehi");
    document.getElementById("input-create-list").value = value;
}
//Context menu
var val = undefined;
var cuElement = undefined;
var deletelistmodal = document.getElementById("modal-delete-task");
function opentContextTask(event) {
    event.preventDefault();
    var taskmenu = document.getElementById("menu-task");
    taskmenu.classList.remove("mehi");
    var realY = window.innerHeight - event.pageY;
    var realX = window.innerWidth - event.pageX;
    if (realY < 350) {
        taskmenu.removeAttribute("style");
        taskmenu.style.bottom = realY + "px";
    } else {
        taskmenu.removeAttribute("style");
        taskmenu.style.top = event.pageY + "px";
    }
     cuElement = event.currentTarget;
     val = cuElement.getElementsByTagName("span")[0].innerHTML;
    //Open Delete List modal
    taskmenu.style.left = event.pageX + "px";
    document.body.addEventListener("click", function () {
        taskmenu.classList.add("mehi");
    });
    console.log(cuElement);
}
//Close delete list modal
function closeDeleteModal() {
    deletelistmodal.classList.add("mehi");
}
document.getElementById("deletetodoid").addEventListener("click", function() {
    deletelistmodal.classList.remove("mehi");
    document.getElementById("detail-delete-id").innerHTML = val;
    //Save deletet
    document.getElementById("savedeletetaskid").addEventListener("click", function () {
        cuElement.parentElement.parentElement.removeChild(cuElement.parentElement);
        closeDeleteModal();
    })
});

//Add a comment
document.getElementById("addcommentid").addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        createComment(this.value);
    }
})
//Creaete comment element
function createComment(valu) {
    var liE = document.createElement("li");
    var commentwrapper = document.createElement("div");
    commentwrapper.setAttribute("class", "commentlistwrap");
    var logocomwrapper = document.createElement("div");
    logocomwrapper.setAttribute("class", "logocomwrap");
    var logo = document.createElement("img");
    logo.setAttribute("src", "resource/image/A.png");
    logo.setAttribute("style", "width: 32px;height: 32px;");
    logocomwrapper.appendChild(logo);
    var sectionCom = document.createElement("div");
    sectionCom.setAttribute("class", "commentwrap");
    var name = document.createElement("span");
    name.style.fontWeight = "bold";
    name.appendChild(document.createTextNode("Pham Xuan Thuy"));
    var time = document.createElement("span");
    time.style.color = "#737272";
    time.appendChild(document.createTextNode("a second before"));
    var comment = document.createElement("div");
    comment.appendChild(document.createTextNode(valu));
    sectionCom.appendChild(name);
    sectionCom.appendChild(time);
    sectionCom.appendChild(comment);

    commentwrapper.appendChild(logocomwrapper);
    commentwrapper.appendChild(sectionCom);
    liE.appendChild(commentwrapper);
    document.getElementById("commentlistid").getElementsByTagName("ul")[0].appendChild(liE);
}
function createList(value) {
    var listul = document.getElementById("liststoredid");
    var listli = document.createElement("li");
    listli.setAttribute("class", "menuLinks");
    listli.setAttribute("onclick", "menuChange(event)");
    var aE = document.createElement("a");
    aE.setAttribute("href", "#");
    var icon = document.createElement("i");
    icon.setAttribute("style", "color: #c9c9c9");
    icon.setAttribute("class", "flaticon-list-menu");
    var spanE = document.createElement("span");
    spanE.setAttribute("class", "loverem rem antirem");
    spanE.appendChild(document.createTextNode(value));
    var editE = document.createElement("span");
    editE.setAttribute("class", "loverem rem antirem flaticon-edit");
    editE.setAttribute("style", "float:right;padding: 2px 5px 0px 0px;");
    editE.setAttribute("onclick", "editList(event)");
    aE.appendChild(icon);
    aE.appendChild(spanE);
    aE.appendChild(editE);
    listli.appendChild(aE);
    listul.appendChild(listli);
}
document.getElementById("list-save").addEventListener("click", function () {
    createList(document.getElementById("input-create-list").value);
    closeCreateList();
})