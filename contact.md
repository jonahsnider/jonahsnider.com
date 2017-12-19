---
layout: page
title: "Contact"
css: ["contact.css"]
---
<form class="col s12" action="https://formspree.io/me@jonahsnider.ninja" method="POST">
    <div class="row">
        <div class="input-field col s6">
            <input id="name" type="text" class="validate" name="name" required="" aria-required="true">
            <label for="name">Name</label>
        </div>
        <div class="input-field col s6">
            <input id="email" type="email" class="validate" name="_replyto" required="" aria-required="true">
            <label for="email">Email</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
            <textarea id="message" name="message" class="materialize-textarea" required="" aria-required="true"></textarea>
            <label for="message">Message</label>
        </div>
    </div>
    <button class="btn waves-effect waves-light orange" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
    </button>
</form>