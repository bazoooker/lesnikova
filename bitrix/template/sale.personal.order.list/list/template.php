<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?><?
?>

<div class="data">
<h1>��� ������ </h1>
<?
//	print_r($arResult);
?>
			<?
			$bNoOrder = true;
			foreach($arResult["ORDER_BY_STATUS"] as $key => $val)
			{
				$bShowStatus = true;
				foreach($val as $vval)
				{
					$bNoOrder = false;
					if($bShowStatus)
					{
						?><h2><?echo GetMessage("STPOL_STATUS")?> "<?=$arResult["INFO"]["STATUS"][$key]["NAME"] ?>"</h2>
						<small><?=$arResult["INFO"]["STATUS"][$key]["DESCRIPTION"] ?></small>
					<?
					}
					$bShowStatus = false;
					?>
					



					<section class="order-list">
						<div class="personal-order wow fadeInLeft">
							<div class="personal-order__heading">
								
								<h2>����� � 
									<?=$vval["ORDER"]["ACCOUNT_NUMBER"]?>
									<?echo GetMessage("STPOL_FROM")?>
									<?= $vval["ORDER"]["DATE_INSERT"]; ?>
								</h2>

							</div>

							<div class="personal-order__detail">
								<table>
									<tr>
										<td><b><?echo GetMessage("STPOL_SUM")?></b></td>
										<td><?=$vval["ORDER"]["FORMATED_PRICE"]?></td>
									</tr>
									<tr>
										<td><b><?echo GetMessage("STPOL_STATUS_T")?></b> </td>
										<td>
											<?
												if ($vval["ORDER"]['STATUS_ID']=="N" && $vval['ORDER']['PAY_SYSTEM_ID']==2) {
														echo "����� ������, ������ ��� ��������� ������";
												}
												else{
													echo $arResult["INFO"]["STATUS"][$vval["ORDER"]["STATUS_ID"]]["NAME"];
												}
											?>
									</td>
									</tr>
									<tr>
										<td><b>��������� ��������:</b></td>
										<td><?=CurrencyFormat($vval['ORDER']['PRICE_DELIVERY'], 'RUB');?></td>
									</tr>
									<tr>
										<td><b>������ ������:</b></td>
										<td>
											<?
												$pay = CSalePaySystemAction::GetByID($vval['ORDER']['PAY_SYSTEM_ID']);
												if ($pay)
												{
												  echo $pay["NAME"];
												}
											?>
										</td>
									</tr>
									<tr>
										<td><b>������ ��������:</b></td>
										<td>
											<?
												$arDeliv = CSaleDelivery::GetByID($vval['ORDER']['DELIVERY_ID']);
												if ($arDeliv)
												{
												  echo $arDeliv["NAME"];
												}
											?>
										</td>
									</tr>
									<tr>
										<td><b>���������� �������:</b></td>
										<td></b><?=count($vval["BASKET_ITEMS"])?></td>
									</tr>
								</table>
							</div>

							<div class="personal-order__list" style="display: none;" id=vv<?=$vval["ORDER"]["ACCOUNT_NUMBER"]?>>
								<div class="table-resp table-resp_type-overflow-x">
									<table>
										<tr>
											<td><b><?echo GetMessage("STPOL_CONTENT")?></b></td>
											<td><b>����������:</b></td>
											<td><b>����:</b></td>
											<td><b>�����:</b></td>
										</tr>
										<?
										$allsum=0;
										foreach ($vval["BASKET_ITEMS"] as $vvval)
										{
											$measure = (isset($vvval["MEASURE_TEXT"])) ? $vvval["MEASURE_TEXT"] :GetMessage("STPOL_SHT");
											?>
											<tr>
												<td nowrap>

													<?
													if (strlen($vvval["DETAIL_PAGE_URL"]) > 0)
														echo "<a href=\"".$vvval["DETAIL_PAGE_URL"]."\">";
													echo $vvval["NAME"];
													if (strlen($vvval["DETAIL_PAGE_URL"]) > 0)
														echo "</a>";
													?>
												</td>
												<?

												$count_prise=$vvval['BASE_PRICE']*$vvval["QUANTITY"];
												$allsum=$count_prise+$allsum;
												?>
												<td nowrap><?=$vvval["QUANTITY"]?> <?=$vvval['MEASURE_TEXT'];?> </td>
												<td nowrap><?=CurrencyFormat($vvval["BASE_PRICE"], 'RUB');?> �� <?=$vvval['MEASURE_TEXT'];?></td>											
												<td  nowrap>�����: <?=CurrencyFormat($count_prise, 'RUB');?></td>
												
											</tr>
											<?
										}?>
									</table>
								</div>
							</div>

							<div class="personal-order__controls">
								<a href="javascript:" onClick="$('#vv<?=$vval["ORDER"]["ACCOUNT_NUMBER"]?>').toggle(300)" class="btn btn_outline btn_size-m">��������� � ������</a>

								<?
								if ($vval["ORDER"]["CANCELED"] == "Y")
									echo GetMessage("STPOL_CANCELED")."";
								?>

								<?
								if ($vval["ORDER"]['STATUS_ID']=="N") {
									if ($vval['ORDER']['PAY_SYSTEM_ID']!=3) {
									?>
										<a class="btn btn_main btn_size-m" href="/personal/order/payment/?ORDER_ID=<?=$vval["ORDER"]["ACCOUNT_NUMBER"]?>&oplata=da">�������� �����</a>
									<?
									}
								}
								?>

							</div>

						</div>
					</section>










					<table class="sale_personal_order_list" style="border-bottom:2px solid #eee"></table>
				<?
				}
				?>
				<br />
				<?
			}

			if ($bNoOrder)
			{
				?><center><?echo GetMessage("STPOL_NO_ORDERS")?></center><?
			}
			?>

			</div>
