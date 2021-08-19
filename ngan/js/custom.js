$(document).ready(function () {
  //  menu dropdown khi hover
  $(".dropdown").hover(
    function () {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .delay(100)
        .slideDown();
    },
    function () {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .delay(50)
        .slideUp();
    }
  );

  // scroll menu hiện ra
  window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");

    header.classList.toggle("scrolling_active", window.scrollY > 300);
  });

  // back to top button
  $("#backtotop").click(function () {
    // $('html,body').animate({scrollTop : 0}, 800)
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // tăng giảm số lượng

  $(".Subtract").on("click", function () {
    $(this).parents(".quantity").find("input")[0].stepDown(1);
  });
  $(".Add").on("click", function () {
    $(this).parents(".quantity").find("input")[0].stepUp(1);
  });

  //Xóa giỏ hàng -->
  $("#nothing").hide();
  $("#deleteall").click(function () {
    $("#tablecart").hide();
    $("#nothing").show();
  });
  $("#delete_01").click(function () {
    $("#dishcart_01").hide();
    document.querySelector(".total_cart").textContent = "59.000đ";
  });
  $("#delete_02").click(function () {
    $("#dishcart_02").hide();
    document.querySelector(".total_cart").textContent = "49.000đ";
  });
  $("#delete_03").click(function () {
    $("#dishcart_03").hide();
    $("#dishcart_031").hide();
    document.querySelector(".total_cart").textContent = "59.000đ";
  });
  $("#delete_04").click(function () {
    $("#dishcart_04").hide();
    $("#dishcart_041").hide();
    document.querySelector(".total_cart").textContent = "49.000đ";
  });
  // thả tim
  $(".fa-heart").click(function () {
    $(this).toggleClass("presslike");
  });

  // button bên cạnh
  $(".toggle_class").click(function () {
    $(".grr").toggleClass("toglrrrr");
    $(".fa-chevron-left").toggleClass("spinnnn");
  });
  // timeline -->

  $("#timeline_01").click(function () {
    $("#pic_tl1").css({ opacity: "1" });
    $("#pic_tl2").css({ opacity: "0" });
    $("#pic_tl3").css({ opacity: "0" });
    $(".h3_01").show();
  });
  $("#timeline_02").click(function () {
    $("#pic_tl2").css({ opacity: "1" });
    $("#pic_tl1").css({ opacity: "0" });
    $("#pic_tl3").css({ opacity: "0" });
  });
  $("#timeline_03").click(function () {
    $("#pic_tl3").css({ opacity: "1" });
    $("#pic_tl2").css({ opacity: "0" });
    $("#pic_tl1").css({ opacity: "0" });
  });
  $("#timeline_04").click(function () {
    $("#pic_tl3").css({ opacity: "0" });
    $("#pic_tl2").css({ opacity: "0" });
    $("#pic_tl1").css({ opacity: "0" });
  });
  // slick
  $(".promo_slick").slick({
    arrows: true,
    autoplay: true,
    slideToShow: 1,
    speed: 700,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  });

  //modal pop up
  setTimeout(function () {
    $("#popup_modal").modal("show");
  }, 3000);
  //table
  $(".more_detail").click(function () {
    $(this).parents("table").find(".hiding").toggleClass("hereur");
    $(this).parents("table").find(".other_dish").toggleClass("dissapear");
    if ($(this).text() == "Xem chi tiết") {
      $(this).text("Thu gọn");
    } else {
      $(this).text("Xem chi tiết");
    }
  });
  //remove
  $(".remove_this").click(function () {
    // $(this).closest('.card').hide();
    if (confirm("Bạn chắc chắn muốn xóa chứ ?")) {
      $(this).closest(".card").hide();
    } else {
      return false;
    }
  });
  //unlike
  
  $(".unlike").click(function () {
    $(this).parent(".fav_item").toggleClass('missthis');
  });
  //edit
  $(".edit_this").click(function () {
    $(this)
      .parents(".card-body")
      .find(".my_address")
      .attr("contentEditable", "true");
    $(this)
      .parents(".card-body")
      .find(".my_address")
      .css({ "background-color": "white" });
    $(this).parents(".card-body").find(".editbtn").show();
  });
  $(".editbtn").click(function () {
    $(this).hide();
    $(this)
      .parents(".card-body")
      .find(".my_address")
      .attr("contentEditable", "false");
    $(this)
      .parents(".card-body")
      .find(".my_address")
      .css({ "background-color": "transparent" });
  });
  $(".press_to_change").click(function () {
    $(this)
      .parents(".my_second_profile")
      .find(".change_this")
      .attr("contentEditable", "true");
    $(this)
      .parents(".my_second_profile")
      .find(".change_this")
      .css({ "background-color": "white" });
    $(this).hide();
    $(".press_again").show();
  });
  $(".press_again").click(function () {
    $(this).hide();
    $(".press_to_change").show();
    $(this)
      .parents(".my_second_profile")
      .find(".change_this")
      .attr("contentEditable", "false");
    $(this)
      .parents(".my_second_profile")
      .find(".change_this")
      .css({ "background-color": "transparent" });
  });
  //accordion
  $(".click_acc").click(function () {
    $(this).find(".fa-caret-left").toggleClass("spinnnn");
  });
  // $('#accordion').on('shown.bs.collapse', function () {
  //     $('.fa-caret-left').toggleClass('spinnnn');
  // });
  // $('#accordion').on('hide.bs.collapse', function () {
  //     $('.fas-caret-left').css({"transform":"rotate(90deg"});
  // });
});
