$(document).ready(function () {
    $(".portfolio1").click(function () {
        $(".para1").show();
        $(this).hide();
    })
    $(".para1").click(function () {
        $(".portfolio1").show();
        $(this).hide();
    })
})



$(document).ready(function () {
    $(".portfolio2").click(function () {
        $(".para2").show();
        $(this).hide();
    })
    $(".para2").click(function () {
        $(".portfolio2").show();
        $(this).hide();
    })
})

$(document).ready(function () {
    $(".portfolio3").click(function () {
        $(".para3").show();
        $(this).hide();
    })
    $(".para3").click(function () {
        $(".portfolio3").show();
        $(this).hide();
    })
    $(document).ready(function () {
        $(".port1").mouseenter(function () {
            $(".description1").show();
        });
        $(".port1").mouseleave(function () {
            $(".description1").hide();
        });

    })

    $(document).ready(function () {
        $(".port2").mouseenter(function () {
            $(".description2").show();
        });
        $(".port1").mouseleave(function () {
            $(".description2").hide();
        });

    })

    $(document).ready(function () {
        $(".port3").mouseenter(function () {
            $(".description3").show();
        });
        $(".port3").mouseleave(function () {
            $(".description3").hide();
        });

    })

    $(document).ready(function () {
        $(".port4").mouseenter(function () {
            $(".description4").show();
        });
        $(".port4").mouseleave(function () {
            $(".description4").hide();
        });

    })

    $(document).ready(function () {
        $(".port5").mouseenter(function () {
            $(".description5").show();
        });
        $(".port5").mouseleave(function () {
            $(".description5").hide();
        });

    })

    $(document).ready(function () {
        $(".port6").mouseenter(function () {
            $(".description6").show();
        });
        $(".port6").mouseleave(function () {
            $(".description6").hide();
        });

    })

    $(document).ready(function () {
        $(".port7").mouseenter(function () {
            $(".description7").show();
        });
        $(".port7").mouseleave(function () {
            $(".description7").hide();
        });

    })

    $(document).ready(function () {
        $(".port8").mouseenter(function () {
            $(".description8").show();
        });
        $(".port8").mouseleave(function () {
            $(".description8").hide();
        });

    });





$("#contactUs").submit(function(event) {
    var myName = $("#name").val();
    var myEmail = $("#email").val();
    var comment = $("#textarea").val();
    if (myName === "" || myEmail === "" || comment === "") {
      alert("Please fill in the required data");
    } else {
      alert(
        myName +
          " ,we have received your message.Thank you for reaching out to us."
      );
    }
    event.preventDefault();
    $("#name").val("");
    $("#email").val("");
    $("#textarea").val("");
  });
});