<?php if(!defined('OK')){die("Forbidden Fruit");} ?>
<section id="team" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading"><?php echo $team_title; ?></h2>
                    <h3 class="section-subheading text-muted"><?php echo $team_subTitle; ?></h3>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
 					<?php include('team_member1.php'); ?>             
                </div>
                <div class="col-sm-4">
                    <?php include('team_member2.php'); ?>
                </div>
                <div class="col-sm-4">
                    <?php include('team_member3.php'); ?>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <p class="large text-muted"><?php echo $team_text; ?></p>
                </div>
            </div>
        </div>
    </section>