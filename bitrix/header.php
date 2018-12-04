<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="windows-1251">
	<title><?$APPLICATION->ShowTitle()?></title>

	
	<?
	$APPLICATION->ShowHead();
	use Bitrix\Main\Page\Asset;
	
	// CSS
	Asset::getInstance()->addCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
	Asset::getInstance()->addCss('/local/templates/prodasch/animate.css');
	
	// JS
    //CJSCore::Init(array("jquery"));
    //Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/jquery.min.js');
    //Asset::getInstance()->addJs('https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
    //Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/prodasch.js');
	//Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/jquery.stellar.min.js');
	//Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/jquery.waypoints.min.js');
	//Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/jquery.easing.1.3.js');
    Asset::getInstance()->addJs('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
	Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/script.js');
	Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/animate.js');
    Asset::getInstance()->addJs('https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js');
    Asset::getInstance()->addJs('https://oss.maxcdn.com/respond/1.4.2/respond.min.js');
	
    //ICONS
    Asset::getInstance()->addString("<link rel='apple-touch-icon' sizes='180x180' href='/local/templates/prodasch/icons/apple-touch-icon.png?v=LbWA2BMR8w'>");
    Asset::getInstance()->addString("<link rel='icon' type='image/png' sizes='32x32' href='/local/templates/prodasch/icons/favicon-32x32.png?v=LbWA2BMR8w'>");
    Asset::getInstance()->addString("<link rel='icon' type='image/png' sizes='16x16' href='/local/templates/prodasch/icons/favicon-16x16.png?v=LbWA2BMR8w'>");
    Asset::getInstance()->addString("<link rel='manifest' href='/local/templates/prodasch/icons/site.webmanifest?v=LbWA2BMR8w'>");
    Asset::getInstance()->addString("<link rel='mask-icon' href='/local/templates/prodasch/icons/safari-pinned-tab.svg?v=LbWA2BMR8w' color='#353534'>");
    Asset::getInstance()->addString("<link rel='shortcut icon' href='/local/templates/prodasch/icons/favicon.ico?v=LbWA2BMR8w'>");
    Asset::getInstance()->addString("<meta name='apple-mobile-web-app-title' content='Школа Продашь!'>");
    Asset::getInstance()->addString("<meta name='application-name' content='Школа Продашь!'>");
    Asset::getInstance()->addString("<meta name='msapplication-TileColor' content='#2d89ef'>");
    Asset::getInstance()->addString("<meta name='msapplication-config' content='/local/templates/prodasch/icons/browserconfig.xml?v=LbWA2BMR8w'>");
    Asset::getInstance()->addString("<meta name='theme-color' content='#ffffff'>");
    
    //ANOTHER
    //Asset::getInstance()->addString("<meta name='viewport' content='width=device-width, initial-scale=1'>");
    Asset::getInstance()->addString("<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>");
    Asset::getInstance()->addString("<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;subset=cyrillic' rel='stylesheet'>");
    
	?>
	<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">

	
</head>
<body>
	<?$APPLICATION->ShowPanel();?>

	<div class="container color-1280">
		<div class="content">
			
			<header class="clearfix">
				<div class="col-lg-5 col-lg-3-1280 col-xs-9 logo__block">
					<a href="/" class="logo"></a>
					<a data-fancybox href="https://www.youtube.com/watch?v=rJ3y-_qks0M" class="logo-after">А почему название напи&shy;сано "с ошибкой"? <svg x="0px" y="0px" width="20px" height="20px" viewBox="0 0 66 66" enable-background="new 0 0 66 66" xml:space="preserve">
<path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15
	C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884
	c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"/>
</svg></a>
				</div>
				<div class="col-lg-7 col-lg-8-1280 hidden__640" style="padding-top: 10px;text-align: right;">
					<?$APPLICATION->IncludeFile("/include/phone-8800.php", Array(), Array());?>
					<?$APPLICATION->IncludeFile("/include/phone-3852.php", Array(), Array());?>
					<span class="soc">
						<?$APPLICATION->IncludeFile("/include/link-icon-mail.php", Array(), Array());?>
						<?$APPLICATION->IncludeFile("/include/link-icon-fb.php", Array(), Array());?>
						<?$APPLICATION->IncludeFile("/include/link-icon-vk.php", Array(), Array());?>
						<?$APPLICATION->IncludeFile("/include/link-icon-instagram.php", Array(), Array());?>
						<?$APPLICATION->IncludeFile("/include/link-icon-telegram.php", Array(), Array());?>
						<?$APPLICATION->IncludeFile("/include/link-icon-youtube.php", Array(), Array());?>
					</span>
					<span id="basket-container">
				               <?$APPLICATION->IncludeComponent(
						    "bazarow:basket.small.bazarow",
						    "ajax",
						    Array(
						        "COMPONENT_TEMPLATE" => "ajax",
						        "PATH_TO_BASKET" => "/personal/cart",
						        "PATH_TO_ORDER" => "/personal/cart",
						        "SHOW_DELAY" => "N",
						        "SHOW_NOTAVAIL" => "Y",
						        "SHOW_SUBSCRIBE" => "Y"
						    )
						);?>
					</span>
				</div>
				<div class="col-lg-1 col-lg-1-1280 col-xs-3 hidden__lg visible__1280 a__right">
					<div class="mobile">
						<div class="burger">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		</div>
	</div>

	<div class="container">

			<?if (CSite::InDir('/programmy-treningov/')):?>
				<a class="btn__fixed btn__trainings-js yellow__block hidden__lg visible__960"><span>Тренинги</span></a>
			<script>
			$(document).ready(function ($) {
				$(".btn__trainings-js").click(function(e) {
			            $(".section__menu__0").fadeToggle(300);
			            $(this).toggleClass("opened");
			        })
			});
			</script>
			<?endif?>
	</div>



	<div class="container color-1280">
		<div class="content">

			<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"main", 
	array(
		"ALLOW_MULTI_SELECT" => "N",
		"CHILD_MENU_TYPE" => "section",
		"DELAY" => "N",
		"MAX_LEVEL" => "2",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"ROOT_MENU_TYPE" => "main",
		"USE_EXT" => "Y",
		"COMPONENT_TEMPLATE" => "main"
	),
	false
);?>
		</div>
	</div>



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js"></script>

