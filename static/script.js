$(function() {
  var INDEX = 0; 
  var meAvatar = "static/me.png"; // Your profile image
  var botAvatar = "static/ai.png"; // Chatbot's profile image
  
  // Function to send a message
  function sendMessage() {
    var msg = $("#chat-input").val().trim();
    if(msg == ''){
      return false;
    }
    generate_message(msg, 'self');
    $("#chat-input").val('');
    $.ajax({
      type: "POST",
      url: "/chat",
      contentType: 'application/json',
      data: JSON.stringify({message: msg}),
      success: function(response) {
        generate_message(response.message, 'user');
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  }

  // Function to generate a message
  function generate_message(msg, type) {
    INDEX++;
    var str="";
    var avatar = (type === 'self') ? meAvatar : botAvatar;
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"" + avatar + "\">"; // Updated to use the avatar variable
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  }

  // Automatically open the chatbox when the page loads
  $("#chat-circle").toggle('scale');
  $(".chat-box").toggle('scale');

  // Submit message on button click
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    sendMessage();
  });

  // Submit message on pressing Enter key
  $("#chat-input").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
      sendMessage();
    }
  });

});
