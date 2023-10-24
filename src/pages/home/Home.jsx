import React from 'react'

export const Home = () => {
  return (
    <>
     
      

      <header className="header">
			<div className="header-top">
				<div className="header-top__wrp">
					<div className="header-top__info">
						<div className="header-top__hours"><span>Доставка: от</span><span className="bold">39 минут</span></div>
						<div className="header-top__tel">
							<div className="header-top__tel-img">
								<svg className="icon icon-tel ">
									<use xlinkHref="/img/svg/symbol/sprite.svg#tel"></use>
								</svg>
							</div>
							<div className="header-top__tel-links"><a href="tel:+375 (29) 333-19-33">+375 (29) 333-19-13</a></div>
						</div>
					</div>
					<div className="header-top__account"><a className="header-top__person" href="#">
							<svg className="icon icon-acc ">
								<use xlinkHref="/img/svg/symbol/sprite.svg#acc"></use>
							</svg>
							<div className="header-top__person-text"><span>Ковалева Елизавета</span><span className="bold">Баллов: 30</span></div></a><a className="header-top__person _basket" href="#">
							<svg className="icon icon-basket ">
								<use xlinkHref="/img/svg/symbol/sprite.svg#basket"></use>
							</svg>
							<div className="header-top__person-text"><span>Товаров: 1</span><span className="bold">Сумма: 25 BYN</span></div></a></div>
				</div>
			</div><a className="header-logo" href="/"><img className="lazy" src="/img/src.gif" /></a>
			<div className="header-menu">
				<ul>
					<li className="active"><a href="#"><img src="/img/svg/pizza.svg" /><span>Пицца</span></a></li>
					<li><a href="#"><img src="/img/svg/roll-sets.svg" /><span>Ролл-сеты</span></a></li>
					<li><a href="#"><img src="/img/svg/baked-rolls.svg" /><span>Запеченные роллы</span></a></li>
					<li><a href="#"><img src="/img/svg/rolls.svg" /><span>Роллы</span></a></li>
					<li><a href="#"><img src="/img/svg/tempura.svg" /><span>Темпура-роллы</span></a></li>
					<li><a href="#"><img src="/img/svg/maki.svg" /><span>Маки роллы</span></a></li>
					<li><a href="#"><img src="/img/svg/nigiri.svg" /><span>Нигири, гунканы, сашими</span></a></li>
					<li><a href="#"><img src="/img/svg/garnish.svg" /><span>Гарниры</span></a></li>
					<li><a href="#"><img src="/img/svg/drinks.svg" /><span>Напитки</span></a></li>
				</ul>
				<div className="header-menu__footer"></div>
				
			</div>
			<div className="header-socials js-header__socials">
				<div className="header-socials__zag">Мы в социальных сетях</div>
				<div className="header-socials__items"><a className="header-socials__item" href="https://vk.com/durov">
						<svg className="icon icon-vk ">
							<use xlinkHref="/img/svg/symbol/sprite.svg#vk"></use>
						</svg></a><a className="header-socials__item" href="https://www.facebook.com/TheElonmusk/">
						<svg className="icon icon-fb ">
							<use xlinkHref="/img/svg/symbol/sprite.svg#fb"></use>
						</svg></a><a className="header-socials__item" href="https://www.instagram.com/joypizza.by/">
						<svg className="icon icon-inst ">
							<use xlinkHref="/img/svg/symbol/sprite.svg#inst"></use>
						</svg></a><a className="header-socials__item" href="https://youtu.be/2H0-uqGNDtw">
						<svg className="icon icon-youtube ">
							<use xlinkHref="/img/svg/symbol/sprite.svg#youtube"></use>
						</svg></a></div>
			</div>
			<div className="header-burger xmd-show">
				<div className="hamburger" id="hamburger"><span className="line"></span><span className="line"></span><span className="line"></span></div>
			</div>
		</header>
		<main>
			<div className="wrp">
				<div className="ms-banner"><a className="ms-banner__item" href="#">
						<picture>
							<source className="lazy" data-srcset="/img/stocks1.png" media="(max-width: 600px)" /><img className="lazy" src="/img/src.gif" data-src="/img/ms-banner__item.jpg" />
						</picture></a><a className="ms-banner__item" href="#">
						<picture>
							<source srcset="/img/stocks1.png" media="(max-width: 600px)" /><img className="lazy" src="/img/src.gif" data-src="/img/ms-banner__item.jpg" />
						</picture></a><a className="ms-banner__item" href="#">
						<picture>
							<source srcset="/img/stocks1.png" media="(max-width: 600px)" /><img className="lazy" src="/img/src.gif" data-src="/img/ms-banner__item.jpg" />
						</picture></a><a className="ms-banner__item" href="#">
						<picture>
							<source srcset="/img/stocks1.png" media="(max-width: 600px)" /><img className="lazy" src="/img/src.gif" data-src="/img/ms-banner__item.jpg" />
						</picture></a><a className="ms-banner__item" href="#">
						<picture>
							<source srcset="/img/stocks1.png" media="(max-width: 600px)" /><img className="lazy" src="/img/src.gif" data-src="/img/ms-banner__item.jpg" />
						</picture></a><a className="ms-banner__item" href="#">
						<picture>
							<source srcset="/img/stocks1.png" media="(max-width: 600px)" /><img className="lazy" src="/img/src.gif" data-src="/img/ms-banner__item.jpg" />
						</picture></a><a className="ms-banner__item" href="#">
						<picture>
							<source srcset="/img/stocks1.png" media="(max-width: 600px)" /><img className="lazy" src="/img/src.gif" data-src="/img/ms-banner__item.jpg" />
						</picture></a></div>
				<div className="ms-ct">
					<div className="ms-ct__wrp">
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Пицца</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item2.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Ролл-сеты</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item3.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Суши-сеты</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Пицца</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item2.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Ролл-сеты</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item3.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Суши-сеты</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Пицца</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item2.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Ролл-сеты</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item3.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Суши-сеты</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Пицца</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item2.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Ролл-сеты</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item3.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Суши-сеты</div>
						</div>
						<div className="ms-ct__item"><a className="ms-ct__item-img" href="#">
								<picture><img className="lazy" data-src="/img/ct-item3.png" src="/img/src.gif" /></picture></a>
							<div className="ms-ct__item-zag">Напитки</div>
						</div>
						<div className="ms-ct__info">
							<div className="ms-ct__info-left">
								<div className="ms-ct__info-title">Вкусная пицца и суши с доставкой<br  /> в Гомеле</div>
								<div className="ms-ct__info-desc">
									<p>В нашем меню каждый найдет для себя подходящую порцию и сочетание<br /> ингредиентов на свой вкус.</p>
									<p>Для приготовления пиццы используется только итальянская мука, фирменный<br /> томатный соус, свежие ингредиенты и натуральные специи, которые не оставят<br /> никого равнодушными.</p>
									<p>Суши и роллы мы готовим из свежесваренного риса, приготовленного по особой технологии,<br /> свежие морепродукты отличного качества, овощи и соусы.</p>
									<p>Не храним продукты, а готовим пиццу и суши только из свежих продуктов, не используя никаких<br /> полуфабрикатов и усилителей вкуса.</p>
								</div>
								<div className="ms-ct__img-left"><img src="/img/ms-ct__left.png" /></div>
							</div>
							<div className="ms-ct__info-right">
								<div className="ms-ct__info-zag">Быстро доставим Ваш заказ домой,<br /> в офис или по любому указанному адресу.</div>
								<div className="ms-ct__info-btn"><span>Работаем без выходных</span></div>
								<div className="ms-ct__info-zag">Прием заказов с 10:20 до 22:20<br /> по телефону:</div><a className="ms-ct__info-btn" href="tel:+375333331716"><span>+375 33 333-17-16</span></a><a className="ms-ct__info-btn" href="tel:+375255153696"><span>+375 25 515-36-96</span></a>
							</div>
							<div className="ms-ct__img-right"><img src="/img/ms-ct__right.png" /></div>
						</div>
					</div>
				</div>
				<div className="main-text">
					<div className="main-text__zag">Вкусная пицца и суши с доставкой по Гомелю</div>
					<div className="main-text__info">
						<div className="main-text__info-active">
							<p>Заказывайте на нашем сайте JOY pizza&sushi пиццу и суши с доставкой по городу Гомелю!
								<p>В нашем меню каждый найдет для себя подходящую порцию и сочетание ингредиентов на свой вкус. Для приготовления пиццы используется только итальянская мука, фирменный томатный соус, свежие  ингредиенты и натуральные специи, которые не оставят никого равнодушными.</p>
								<p>Суши  и роллы мы готовим из свеже-сваренного риса, приготовленного по особой технологии, свежие морепродукты отличного качества, овощи и соусы.</p>
							</p>
						</div>
						<div className="main-text__info-wrp">
							<p>Не храним продукты, а готовим пиццу и суши только из свежих продуктов, не используя никаких полуфабрикатов и усилителей вкуса.</p>
							<p>Мы быстро доставим Ваш заказ домой, в офис или по любому указанному адресу. Работаем <b>без выходных.</b></p>
							<p>Прием заказов с 11:00 до 23:00 по телефону:&nbsp;<a href="tel:+375333331716">+375 (33) 333-17-16</a>&nbsp;и&nbsp;<a href="tel:+375255153696">+375 (25) 515-36-96.</a></p>
						</div>
					</div>
					<div className="main-text__btn"><a className="btn-green js-main__btn" href="#" data-after="Скрыть" data-before="Показать полностью"></a></div>
				</div>
			</div>
		</main>
		<footer className="footer">
			<div className="footer-wrp">
				<div className="footer-menu">
					<ul>
						<div className="footer-menu__zag">Компания</div>
						<li><a href="#">Контакты</a></li>
						<li><a href="#">Доставка и оплата</a></li>
						<li><a href="#">Вакансии</a></li>
						<li><a href="#">Отзывы и предложения</a></li>
					</ul>
					<ul>
						<div className="footer-menu__zag">Контакты для заказа</div>
						<li className="_tel"><a href="tel:+375333331716">+375 <b>(33) 333-17-16</b></a></li>
						<li className="_tel"><a href="tel:+375295153696">+375 <b>(29) 515-36-96</b></a></li>
						<li><span>Прием заказов с 10:20 до 22:20</span></li>
						<li><span>г. Гомель, ул. Свиридова 15-4</span></li>
					</ul>
				</div>
				<div className="footer-links">
					<div className="header-socials">
						<div className="header-socials__zag">Мы в социальных сетях</div>
						<div className="header-socials__items"><a className="header-socials__item" href="https://vk.com/durov">
								<svg className="icon icon-vk ">
									<use xlinkHref="/img/svg/symbol/sprite.svg#vk"></use>
								</svg></a><a className="header-socials__item" href="https://www.facebook.com/TheElonmusk/">
								<svg className="icon icon-fb ">
									<use xlinkHref="/img/svg/symbol/sprite.svg#fb"></use>
								</svg></a><a className="header-socials__item" href="https://www.instagram.com/joypizza.by/">
								<svg className="icon icon-inst ">
									<use xlinkHref="/img/svg/symbol/sprite.svg#inst"></use>
								</svg></a><a className="header-socials__item" href="https://www.tiktok.com/@joysushipizza">
								<svg className="icon icon-tiktok ">
									<use xlinkHref="/img/svg/symbol/sprite.svg#tiktok"></use>
								</svg></a></div>
					</div>
					<div className="footer-payments">
						<div className="header-socials__zag">Способы оплаты</div>
						<div className="footer-payments__img">
							<picture><img className="lazy" src="/img/svg/visa.svg" /></picture>
							<picture><img className="lazy" src="/img/svg/visa2.svg" /></picture>
							<picture><img className="lazy" src="/img/svg/alfa.svg" /></picture>
							<picture><img className="lazy" src="/img/svg/mastercard2.svg" /></picture>
							<picture><img className="lazy" src="/img/svg/mastercard.svg" /></picture>
							<picture><img className="lazy" src="/img/svg/belkart.svg" /></picture>
							<picture><img className="lazy" src="/img/svg/belkart2.svg" /></picture>
							<picture><img className="lazy" src="/img/svg/pay.svg" /></picture>
							<picture><img className="lazy" src="/img/svg/pay2.svg" /></picture>
						</div>
					</div>
				</div>
				<div className="footer-app">
					<div className="footer-app__img">
						<picture><img className="lazy" src="/img/src.gif" data-src="/img/footer-tel.png" /></picture>
					</div>
					<div className="footer-app__info">
						<div className="header-socials__zag">Скачайте наше мобильное приложение и совершайте быстрые заказы</div>
						<div className="footer-app__desc">После скачивания приложения пройдите небольшую регистрацию, совершайте покупки и накапливайте баллы</div>
						<div className="footer-app__btns"><a className="btn-green" href="#">
								<svg className="icon icon-play ">
									<use xlinkHref="/img/svg/symbol/sprite.svg#play"></use>
								</svg><span>Скачать в Google Play</span></a><a className="btn-green" href="#">
								<svg className="icon icon-apple ">
									<use xlinkHref="/img/svg/symbol/sprite.svg#apple"></use>
								</svg><span>Скачать в App Store</span></a></div>
					</div>
				</div>
			</div>
			<div className="footer-info">
				<div className="footer-info__copyright">2021 © ООО «ДжойСтрит». Использование материалов сайта только с разрешения владельца</div>
				<div className="footer-info__links"><a href="#">Договор публичной оферты</a><a href="#">Политика конфиденциальности</a><a href="#">Политика обработки данных</a></div>
			</div>
		</footer>
    </>
  )
}
