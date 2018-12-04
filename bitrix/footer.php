<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

	<div class="container">

		<?if (CSite::InDir('/index.php')):?>
		<div class="mobile">
			<div class="burger">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<?endif?>

		<?#begin Фиксированное меню при скроллинге?>
		<section class="fixed__menu">
			<div class="hidden__lg visible__1280">
				<div class="mobile">
					<div class="burger">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="clearfix">
					<div class="col-lg-1 hidden__1280 logo__block">
						<a href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="13 7 70 75" width="50" height="50"><defs><style>.cls-1{fill:#ffdc00;}.cls-2{fill:#353534;}</style></defs><g><path class="cls-1" d="M85.76,44.11a36.1,36.1,0,1,0-72.2,0,36.1,36.1,0,1,0,72.2,0"/><path class="cls-2" d="M68.59,52.14c-2.67-.8-1.65-5.43-1.65-5.43l2-10c.94-3.67.2-8-6-8.92-3-.42-6.5,1.59-6.5,1.59C60,31,59.09,35.13,59.09,35.13S57.22,44.46,56.7,47h0v0l-.11.53,0,.18a3.15,3.15,0,0,0,2.06,3.74s-2.69,1.85-4.75.73a2,2,0,0,1-.81-.76c-.67-1.07.1-4.75.1-4.75l1.78-8.81c.2-1.76.07-5.09-3.71-5.09a23.51,23.51,0,0,0-5.81.74l0,0a6.41,6.41,0,0,1-.09,1.61l-2.5,12.44a16.42,16.42,0,0,0-.35,4.78c-1.62.24-2.65.14-3.29-.89s.11-4.75.11-4.75l2-10c.94-3.67.2-8-6-8.92-3-.42-6.5,1.59-6.5,1.59,3.5,1.58,2.62,5.75,2.62,5.75L28.92,47.57c-.84,4.2-.62,8.29,3.12,10.51,4,2.34,9.69.89,12.74-.84a6.67,6.67,0,0,0,1.15.84c3.88,2.3,9.49.94,12.57-.75a5.87,5.87,0,0,0,1.21.75C64.9,60.56,69.64,58,71,55.9a17.77,17.77,0,0,0,1.72-3.73s-1.36.8-4.15,0"/></g></svg></a>
					</div>
					<div class="col-lg-11 col-lg-12-1280">
						<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"main", 
	array(
		"ALLOW_MULTI_SELECT" => "N",
		"CHILD_MENU_TYPE" => "section",
		"DELAY" => "N",
		"MAX_LEVEL" => "1",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"ROOT_MENU_TYPE" => "main",
		"USE_EXT" => "N",
		"COMPONENT_TEMPLATE" => "main"
	),
	false
);?>
					</div>
				</div>
			</div>
		</section>

		<footer class="black__block pad__top__bot__20">
			<div class="content">
				<div class="clearfix hidden__1380">
					<div class="col-lg-2 logo__block">
						<a href="/" class="logo"></a>
					</div>
					<div class="col-lg-10">
						<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"main", 
	array(
		"ALLOW_MULTI_SELECT" => "N",
		"CHILD_MENU_TYPE" => "section",
		"DELAY" => "N",
		"MAX_LEVEL" => "1",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"ROOT_MENU_TYPE" => "main",
		"USE_EXT" => "N",
		"COMPONENT_TEMPLATE" => "main"
	),
	false
);?>
					</div>
				</div>
				
				<div class="contacts pad__top__bot__20 clearfix">
					<div class="col-lg-2 hidden__1380"></div>
					<div class="col-lg-2 hidden__lg visible__1380 hidden__960 logo__block">
						<a href="/" class="logo"></a>
					</div>
					<div class="col-lg-10 col-md-12 pad__top__10__1380">
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
					</div>
				</div>
				
				<div class="clearfix hidden__640">
					<div class="col-lg-2 hidden__960"></div>
					<div class="col-lg-10 col-md-12 pad__left__20">
						<p><?$APPLICATION->IncludeFile("/include/slogan.php", Array(), Array());?></p>
					</div>
				</div>
				
				<div class="clearfix pad__top__bot__20 hidden__960">
					<div class="col-lg-2"></div>
					<div class="col-lg-10 pad__left__20">
						<strong>Другие проекты</strong>
						<div class="clearfix">
							<div class="col-lg-5">
								<p><?$APPLICATION->IncludeFile("/include/link-areteya.php", Array(), Array());?></p>
								<p><?$APPLICATION->IncludeFile("/include/link-isphere.php", Array(), Array());?></p>
							</div>
							<div class="col-lg-5">
								<p><?$APPLICATION->IncludeFile("/include/link-qs.php", Array(), Array());?></p>
								<p><?$APPLICATION->IncludeFile("/include/link-training-magic.php", Array(), Array());?></p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="clearfix">
					<div class="col-lg-2 col-lg-2-1280 hidden__lg visible__1280 hidden__960"></div>
					<div class="col-lg-7 col-lg-10-1280 col-md-12 pad__left__20__1280 pad__left__0__640">
						<div class="clearfix">
							<div class="col-lg-12">
								&copy; «Школа Продашь!», Анастасия Солнцева, iSphere 2014–<?=date('Y');?>
							</div>
							<div class="col-lg-12">
								<div class="col-lg-6 col-md-12">
									<p><a href="/policies/" target="_blank">Политика конфидициальности</a></p>
								</div>
								<div class="col-lg-6 hidden__960">
									<p><?$APPLICATION->IncludeFile("/include/link-saccade.php", Array(), Array());?></p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-2 col-lg-2-1280 hidden__lg visible__1280 hidden__960"></div>
					<div class="col-lg-5 col-lg-10-1280 col-md-12 pad__left__20__1280 pad__top__10__1280 pad__left__0__640">
						<div class="clearfix chp">
							<div class="col-lg-12">
								ИП Солнцева Анастасия Владимировна
							</div>
							<div class="col-lg-12">
								<div class="col-lg-5 col-md-6 col-xs-12">
									<p>ИНН 222202623433</p>
								</div>
								<div class="col-lg-7 col-md-6 col-xs-12">
									<p>ЕГРИП 314222509000010</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</footer>
		
	</div>

</body>

<script src="/local/templates/prodasch/js/jquery.maskedinput.min.js"></script>
<script src="/local/templates/prodasch/js/inputmask.js"></script>

</html>