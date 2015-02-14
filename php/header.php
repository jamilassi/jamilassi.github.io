<?php if(!defined('OK')){die("Forbiden Fruit");} ?>
<header>
        <div class="container">
            <div class="intro-text">
            	
                <div class="intro-lead-in"><?php echo $intro_lead_in; ?></div>
                <div class="row">
                <div class="col-xs-4"></div>
                <div class="form-group col-xs-4 floating-label-form-group controls">
                            <input type="text" class="form-control" placeholder="Please enter your name here" id="name_session" required="" data-validation-required-message="Please enter your name." aria-invalid="false">
                            <p class="help-block text-danger"></p>
                </div>
                <div class="col-xs-1">
                <button class="page-scroll btn btn-md" onClick="bienvenue()">Ok</button>
                </div>
                <div class="col-xs-3"></div>
                </div>
                <div class="intro-heading" style="opacity:0;"><?php echo $intro_heading; ?></div>
                <a href="#<?php echo $button_where_to_id; ?>" class="page-scroll btn btn-md my" id="continue" style="opacity:0;"><?php echo $button_title; ?></a>
            </div>
        </div>
    </header>
    