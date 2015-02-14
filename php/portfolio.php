<?php if(!defined('OK')){die("Forbidden Fruit");} ?>
<section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading"><?php echo $portfolio_title;?></h2>
                    <h3 class="section-subheading text-muted"><?php echo $portfolio_text_muted;?></h3>
                </div>
            </div>
            <div class="row">
                <?php include("portfolioModalSection/portfolioModal1t.php"); ?>
                <?php include("portfolioModalSection/portfolioModal2t.php"); ?>
                <?php include("portfolioModalSection/portfolioModal3t.php"); ?>
                <?php include("portfolioModalSection/portfolioModal4t.php"); ?>
                <?php include("portfolioModalSection/portfolioModal5t.php"); ?> 
                <?php include("portfolioModalSection/portfolioModal6t.php"); ?> 
 			</div>
        </div>
    </section>