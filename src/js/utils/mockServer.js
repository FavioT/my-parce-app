import { createServer } from 'miragejs';

const BASE_URL = 'http://127.0.0.1:8000/api/v1';

createServer({
    routes() {
        this.get(`${BASE_URL}/home-catalog`, () => {
            return [
                {
                    "id": 29,
                    "name": "Muebles",
                    "slug": "muebles",
                    "icon": "muebles.png",
                    "image": null,
                    "type": "category",
                    "capitalized_name": "Muebles",
                    "icon_url": "https://www.herrajesoeste.com/assets/images/categories/muebles.png"
                },
                {
                    "id": 1,
                    "name": "Hogar",
                    "slug": "hogar",
                    "icon": "hogar.png",
                    "image": null,
                    "type": "category",
                    "capitalized_name": "Hogar",
                    "icon_url": "https://www.herrajesoeste.com/assets/images/categories/hogar.png"
                },
                {
                    "id": 62,
                    "name": "Obra",
                    "slug": "obra",
                    "icon": "obra.png",
                    "image": null,
                    "type": "category",
                    "capitalized_name": "Obra",
                    "icon_url": "https://www.herrajesoeste.com/assets/images/categories/obra.png"
                },
            ]
        }),
        this.get(`${BASE_URL}/products`, () => {
            return {
                "data": [
                    {
                        "id": 8805,
                        "shop_category_id": 68,
                        "name": "TOR JAP 5 X 1 1/4 TEL",
                        "slug": "tor-jap-5-x-1-14-tel",
                        "sku": null,
                        "code": "TEL006",
                        "barcode": null,
                        "short_description": null,
                        "description": null,
                        "qty": 0,
                        "price": "35902.58",
                        "int_price": 3590258,
                        "formatted_price": "35.902,58",
                        "seo_title": null,
                        "seo_description": null,
                        "seo_keywords": null,
                        "image": "wIfnIO0lmTYgdvFAtgAv7FhvnK.png",
                        "fallback_image": "no-image.webp",
                        "image_url": "https://admin.herrajesoeste.com/storage/products/media/wIfnIO0lmTYgdvFAtgAv7FhvnK.png",
                        "category": {
                            "id": 68,
                            "parent_id": 63,
                            "shop_product_id": null,
                            "name": "Tornillos, bulones y mas ...",
                            "slug": "tornillos",
                            "description": null,
                            "image": null,
                            "image_url": null,
                            "icon": null,
                            "parent": {
                                "id": 63,
                                "parent_id": 62,
                                "shop_product_id": null,
                                "name": "Armado y terminación",
                                "slug": "armado-y-terminacion",
                                "description": null,
                                "image": null,
                                "image_url": null,
                                "icon": null,
                                "parent": {
                                    "id": 62,
                                    "parent_id": null,
                                    "shop_product_id": null,
                                    "name": "Obra",
                                    "slug": "obra",
                                    "description": null,
                                    "image": null,
                                    "image_url": null,
                                    "icon": null,
                                    "parent": null,
                                    "benefit": null
                                },
                                "benefit": null
                            },
                            "benefit": null
                        },
                        "tags": []
                    },
                    {
                        "id": 8803,
                        "shop_category_id": 68,
                        "name": "TOR JAP 10 X 2 (X UNIDAD)",
                        "slug": "tor-jap-10-x-2-x-unidad",
                        "sku": null,
                        "code": "TEL003",
                        "barcode": null,
                        "short_description": null,
                        "description": null,
                        "qty": 562,
                        "price": "113.93",
                        "int_price": 11393,
                        "formatted_price": "113,93",
                        "seo_title": null,
                        "seo_description": null,
                        "seo_keywords": null,
                        "image": "Hw4Js5Z1NjlrwlI4ejkeVPOY2n.png",
                        "fallback_image": "no-image.webp",
                        "image_url": "https://admin.herrajesoeste.com/storage/products/media/Hw4Js5Z1NjlrwlI4ejkeVPOY2n.png",
                        "category": {
                            "id": 68,
                            "parent_id": 63,
                            "shop_product_id": null,
                            "name": "Tornillos, bulones y mas ...",
                            "slug": "tornillos",
                            "description": null,
                            "image": null,
                            "image_url": null,
                            "icon": null,
                            "parent": {
                                "id": 63,
                                "parent_id": 62,
                                "shop_product_id": null,
                                "name": "Armado y terminación",
                                "slug": "armado-y-terminacion",
                                "description": null,
                                "image": null,
                                "image_url": null,
                                "icon": null,
                                "parent": {
                                    "id": 62,
                                    "parent_id": null,
                                    "shop_product_id": null,
                                    "name": "Obra",
                                    "slug": "obra",
                                    "description": null,
                                    "image": null,
                                    "image_url": null,
                                    "icon": null,
                                    "parent": null,
                                    "benefit": null
                                },
                                "benefit": null
                            },
                            "benefit": null
                        },
                        "tags": []
                    },
                    {
                        "id": 8813,
                        "shop_category_id": 68,
                        "name": "TOR JAP 6 X 1 FN (X 500)",
                        "slug": "tor-jap-6-x-1-fn-x-500",
                        "sku": null,
                        "code": "TEL014",
                        "barcode": null,
                        "short_description": null,
                        "description": null,
                        "qty": 4,
                        "price": "19226.30",
                        "int_price": 1922630,
                        "formatted_price": "19.226,30",
                        "seo_title": null,
                        "seo_description": null,
                        "seo_keywords": null,
                        "image": "CofotObuU9TmNZwzoUf102aHWc.png",
                        "fallback_image": "no-image.webp",
                        "image_url": "https://admin.herrajesoeste.com/storage/products/media/CofotObuU9TmNZwzoUf102aHWc.png",
                        "category": {
                            "id": 68,
                            "parent_id": 63,
                            "shop_product_id": null,
                            "name": "Tornillos, bulones y mas ...",
                            "slug": "tornillos",
                            "description": null,
                            "image": null,
                            "image_url": null,
                            "icon": null,
                            "parent": {
                                "id": 63,
                                "parent_id": 62,
                                "shop_product_id": null,
                                "name": "Armado y terminación",
                                "slug": "armado-y-terminacion",
                                "description": null,
                                "image": null,
                                "image_url": null,
                                "icon": null,
                                "parent": {
                                    "id": 62,
                                    "parent_id": null,
                                    "shop_product_id": null,
                                    "name": "Obra",
                                    "slug": "obra",
                                    "description": null,
                                    "image": null,
                                    "image_url": null,
                                    "icon": null,
                                    "parent": null,
                                    "benefit": null
                                },
                                "benefit": null
                            },
                            "benefit": null
                        },
                        "tags": []
                    },
                    {
                        "id": 7676,
                        "shop_category_id": 68,
                        "name": "TOR JAP 6 X 3/4 (X 100)",
                        "slug": "tor-jap-6-x-34-x-100",
                        "sku": null,
                        "code": "HGR02",
                        "barcode": null,
                        "short_description": null,
                        "description": null,
                        "qty": 15,
                        "price": "15665.87",
                        "int_price": 1566587,
                        "formatted_price": "15.665,87",
                        "seo_title": null,
                        "seo_description": null,
                        "seo_keywords": null,
                        "image": "ka7tJhwPNmZzGkZbqeElHLYnKQ.png",
                        "fallback_image": "no-image.webp",
                        "image_url": "https://admin.herrajesoeste.com/storage/products/media/ka7tJhwPNmZzGkZbqeElHLYnKQ.png",
                        "category": {
                            "id": 68,
                            "parent_id": 63,
                            "shop_product_id": null,
                            "name": "Tornillos, bulones y mas ...",
                            "slug": "tornillos",
                            "description": null,
                            "image": null,
                            "image_url": null,
                            "icon": null,
                            "parent": {
                                "id": 63,
                                "parent_id": 62,
                                "shop_product_id": null,
                                "name": "Armado y terminación",
                                "slug": "armado-y-terminacion",
                                "description": null,
                                "image": null,
                                "image_url": null,
                                "icon": null,
                                "parent": {
                                    "id": 62,
                                    "parent_id": null,
                                    "shop_product_id": null,
                                    "name": "Obra",
                                    "slug": "obra",
                                    "description": null,
                                    "image": null,
                                    "image_url": null,
                                    "icon": null,
                                    "parent": null,
                                    "benefit": null
                                },
                                "benefit": null
                            },
                            "benefit": null
                        },
                        "tags": []
                    },
                    {
                        "id": 7677,
                        "shop_category_id": 68,
                        "name": "TOR JAP 8 X 3 H",
                        "slug": "tor-jap-8-x-3-h",
                        "sku": null,
                        "code": "HGR03",
                        "barcode": null,
                        "short_description": null,
                        "description": null,
                        "qty": 0,
                        "price": "46585.00",
                        "int_price": 4658500,
                        "formatted_price": "46.585,00",
                        "seo_title": null,
                        "seo_description": null,
                        "seo_keywords": null,
                        "image": "Ai0LgU5DBLXCoi0nWRN2G4pYlw.png",
                        "fallback_image": "no-image.webp",
                        "image_url": "https://admin.herrajesoeste.com/storage/products/media/Ai0LgU5DBLXCoi0nWRN2G4pYlw.png",
                        "category": {
                            "id": 68,
                            "parent_id": 63,
                            "shop_product_id": null,
                            "name": "Tornillos, bulones y mas ...",
                            "slug": "tornillos",
                            "description": null,
                            "image": null,
                            "image_url": null,
                            "icon": null,
                            "parent": {
                                "id": 63,
                                "parent_id": 62,
                                "shop_product_id": null,
                                "name": "Armado y terminación",
                                "slug": "armado-y-terminacion",
                                "description": null,
                                "image": null,
                                "image_url": null,
                                "icon": null,
                                "parent": {
                                    "id": 62,
                                    "parent_id": null,
                                    "shop_product_id": null,
                                    "name": "Obra",
                                    "slug": "obra",
                                    "description": null,
                                    "image": null,
                                    "image_url": null,
                                    "icon": null,
                                    "parent": null,
                                    "benefit": null
                                },
                                "benefit": null
                            },
                            "benefit": null
                        },
                        "tags": []
                    },
                ]
            }
        }),
        this.get(`${BASE_URL}/posts`, () => {
            return {
                "data": [
                    {
                        "id": 5,
                        "post_id": 5,
                        "title": "Detalles que hacen que tus muebles se vean mejor",
                        "subtitle": "Ofrecemos herrajes funcionales, resistentes y con diseño, para que cada mueble que hacés no solo se vea bien, sino que se sienta mejor.",
                        "slug": "detalles-que-hacen-que-tus-muebles-se-vean-mejor",
                        "short_description": "Ofrecemos herrajes funcionales, resistentes y con diseño, para que cada mueble que hacés no solo se vea bien, sino que se sienta mejor.",
                        "content": "<p>En carpinter&iacute;a, como en tantos oficios, los detalles no son solo un agregado: son lo que realmente define la calidad del trabajo</p>\n<p>Los cortes precisos, las terminaciones prolijas, la elecci&oacute;n de materiales y, por supuesto, los herrajes correctos, son los elementos que elevan un mueble com&uacute;n a uno que se destaca.</p>\n<p>Un cliente puede no notar a simple vista qu&eacute; tipo de corredera elegiste, pero sin dudas va a percibir si el caj&oacute;n se desliza suave o si la puerta se cierra con firmeza y sin ruidos.</p>\n<p>Esa diferencia, sutil pero poderosa, es la que deja una buena impresi&oacute;n y hace que te recomienden.</p>\n<p>Los herrajes no solo cumplen una funci&oacute;n t&eacute;cnica, tambi&eacute;n aportan al dise&ntilde;o y a la experiencia de uso.</p>\n<p>Un buen tirador, una bisagra de cierre suave, un tapacanto bien aplicado o incluso un sistema oculto que optimiza el espacio pueden transformar por completo la percepci&oacute;n de tu trabajo.</p>\n<p>En Herrajes Oeste, entendemos que cada pieza que eleg&iacute;s habla de tu oficio.</p>\n<p>Por eso ofrecemos herrajes funcionales, resistentes y con dise&ntilde;o, para que cada mueble que hac&eacute;s no solo se vea bien, sino que se sienta mejor.</p>\n<p>Invert&iacute; en detalles. Tu trabajo lo vale.</p>\n<p>Consultanos y llev&aacute; tus proyectos al pr&oacute;ximo nivel.</p>",
                        "image": "01JS75WRM68T2XKFFJ5QZW201C.jpg",
                        "image_url": "https://admin.herrajesoeste.com/storage/posts/media/01JS75WRM68T2XKFFJ5QZW201C.jpg",
                        "created_at": "hace 2 semanas"
                    },
                    {
                        "id": 4,
                        "post_id": 4,
                        "title": "Porta residuos: practicidad y orden en tu cocina",
                        "subtitle": "No importa el tamaño de tu cocina o el estilo de tus muebles, hay un herraje para porta residuos que se adapta a tus necesidades",
                        "slug": "porta-residuos-practicidad-y-orden-en-tu-cocina",
                        "short_description": "No importa el tamaño de tu cocina o el estilo de tus muebles, hay un herraje para porta residuos que se adapta a tus necesidades",
                        "content": "<p>La cocina es uno de los espacios m&aacute;s utilizados del hogar, por lo que mantenerla ordenada y funcional es clave para la comodidad diaria.</p>\n<p>Cada detalle cuenta cuando se trata de optimizar el espacio y mejorar la experiencia de uso.</p>\n<p>Los porta residuos marcan una gran diferencia en t&eacute;rminos de organizaci&oacute;n, higiene y est&eacute;tica.</p>\n<p>Si te gustar&iacute;a mantener el tacho de basura fuera de la vista y hacer que su uso sea m&aacute;s pr&aacute;ctico, estos sistemas son una excelente opci&oacute;n.</p>\n<p>No solo te permiten aprovechar mejor los muebles, sino que tambi&eacute;n facilitan el acceso sin necesidad de movimientos innecesarios.</p>\n<p>En Herrajes Oeste, contamos con distintos modelos que se adaptan a cada necesidad y tipo de mueble.</p>\n<p>Eleg&iacute; el modelo ideal para tu cocina</p>\n<p>No importa el tama&ntilde;o de tu cocina o el estilo de tus muebles, hay un herraje para porta residuos que se adapta a tus necesidades. Ya sea que busques una soluci&oacute;n simple o un sistema totalmente automatizado, en Herrajes Oeste tenemos la opci&oacute;n perfecta para vos.</p>\n<p>Consultanos y llev&aacute; funcionalidad y orden a tu cocina con la mejor calidad en herrajes.</p>",
                        "image": "01JPN058W893YP1XXPWYJ3GAD6.jpg",
                        "image_url": "https://admin.herrajesoeste.com/storage/posts/media/01JPN058W893YP1XXPWYJ3GAD6.jpg",
                        "created_at": "hace 1 mes"
                    },
                    {
                        "id": 3,
                        "post_id": 3,
                        "title": "Kits de herrajes para puertas granero: opciones para cada necesidad",
                        "subtitle": "Las puertas corredizas estilo granero se han convertido en una tendencia en diseño de interiores por su estética rústica y funcionalidad. Conocé el kit granero",
                        "slug": "kits-de-herrajes-para-puertas-granero-opciones-para-cada-necesidad",
                        "short_description": "Las puertas corredizas estilo granero se han convertido en una tendencia en diseño de interiores por su estética rústica y funcionalidad. Conocé el kit granero",
                        "content": "<p>Las puertas corredizas estilo granero se han convertido en una tendencia en dise&ntilde;o de interiores por su est&eacute;tica r&uacute;stica y funcionalidad. Adem&aacute;s de ahorrar espacio, aportan un toque distintivo a cualquier ambiente.</p>\n<p>Existen diferentes variantes del Kit Granero, cada una dise&ntilde;ada para necesidades espec&iacute;ficas. En este art&iacute;culo, exploramos las principales opciones disponibles en Herrajes Oeste</p>\n<p>🔹 Kit Granero de doble puerta: permite instalar dos hojas corredizas sobre un mismo riel, ideal para accesos amplios y ambientes integrados.</p>\n<p>🔹 Kit Granero curvo: con un dise&ntilde;o de herrajes que presenta un elegante acabado curvo en la parte superior, aportando un toque distintivo y sofisticado.</p>\n<p>🔹 Kit Granero plegable: pensado para espacios reducidos, permite que la puerta se pliegue sobre s&iacute; misma en lugar de deslizarse lateralmente.</p>\n<p>Cada variante del Kit Granero tiene caracter&iacute;sticas &uacute;nicas que se adaptan a diferentes necesidades y estilos de decoraci&oacute;n.</p>\n<p>Ya sea que busques una opci&oacute;n cl&aacute;sica de doble puerta, una soluci&oacute;n innovadora como el curvo, o una alternativa funcional como el plegable, en Herrajes Oeste contamos con la mejor calidad en herrajes y accesorios para garantizar un resultado impecable.</p>\n<p>&iexcl;Consultanos y renov&aacute; tus ambientes con estilo y calidad!</p>",
                        "image": "01JM3B6WEKQVVKDGHEJ58K9R3C.jpg",
                        "image_url": "https://admin.herrajesoeste.com/storage/posts/media/01JM3B6WEKQVVKDGHEJ58K9R3C.jpg",
                        "created_at": "hace 2 meses"
                    },
                    {
                        "id": 2,
                        "post_id": 2,
                        "title": "Año nuevo, hogar renovado: pequeños cambios para grandes  transformaciones",
                        "subtitle": "En Herrajes Oeste te ofrecemos todo lo que necesitás para comenzar el año renovando tu hogar con calidad y estilo.",
                        "slug": "ano-nuevo-hogar-renovado-pequenos-cambios-para-grandes-transformaciones",
                        "short_description": "En Herrajes Oeste te ofrecemos todo lo que necesitás para comenzar el año renovando tu hogar con calidad y estilo.",
                        "content": "<p>El comienzo de un nuevo a&ntilde;o <em>es el momento perfecto para renovar tu hogar</em> y darle un aire fresco a tus espacios.</p>\n<p>No hace falta realizar grandes reformas ni invertir en cambios costosos; a veces, los peque&ntilde;os detalles son los que marcan la diferencia.</p>\n<p>Uno de los ajustes m&aacute;s simples y efectivos que pod&eacute;s hacer es actualizar las correderas de los cajones. Este cambio no solo mejora la funcionalidad de tus muebles, sino que tambi&eacute;n les aporta un toque de modernidad y comodidad que notar&aacute;s en tu d&iacute;a a d&iacute;a.</p>\n<p><span style=\"color: #e89440;\"><strong>Beneficios de cambiar las correderas</strong></span></p>\n<ul>\n<li><em><span style=\"color: #e89440;\">Deslizamiento suave y silencioso:</span></em> Las correderas con cierre suave eliminan los molestos ruidos al abrir y cerrar cajones, aportando una experiencia m&aacute;s agradable.</li>\n<li><em><span style=\"color: #e89440;\">Mayor capacidad de carga:</span></em> Con opciones que soportan hasta 35 kg, pod&eacute;s reorganizar tus muebles sin preocuparte por el peso.</li>\n<li><em><span style=\"color: #e89440;\">Dise&ntilde;o moderno:</span></em> Disponibles en colores como blanco, gris y antracita, estas correderas combinan con cualquier estilo de decoraci&oacute;n.</li>\n<li><em><span style=\"color: #e89440;\">Hacelo vos mismo:</span></em> simple y pr&aacute;ctico Renovar los espacios no solo transforma tu hogar, tambi&eacute;n te da una sensaci&oacute;n de renovaci&oacute;n personal. Este a&ntilde;o, apost&aacute; por cambios simples que tengan un gran impacto.</li>\n</ul>\n<p>En Herrajes Oeste te ofrecemos todo lo que necesit&aacute;s para comenzar el a&ntilde;o renovando tu hogar con calidad y estilo.</p>\n<p>&iexcl;Consultanos y encontr&aacute; las correderas ideales para tus proyectos!</p>",
                        "image": "01JH95GQKTR7DW1A226YHNHKMH.jpg",
                        "image_url": "https://admin.herrajesoeste.com/storage/posts/media/01JH95GQKTR7DW1A226YHNHKMH.jpg",
                        "created_at": "hace 3 meses"
                    }
                ],
                "links": {
                    "first": "https://admin.herrajesoeste.com/api/v1/posts?page=1",
                    "last": "https://admin.herrajesoeste.com/api/v1/posts?page=1",
                    "prev": null,
                    "next": null
                },
                "meta": {
                    "current_page": 1,
                    "from": 1,
                    "last_page": 1,
                    "links": [
                        {
                            "url": null,
                            "label": "&laquo; Anterior",
                            "active": false
                        },
                        {
                            "url": "https://admin.herrajesoeste.com/api/v1/posts?page=1",
                            "label": "1",
                            "active": true
                        },
                        {
                            "url": null,
                            "label": "Siguiente &raquo;",
                            "active": false
                        }
                    ],
                    "path": "https://admin.herrajesoeste.com/api/v1/posts",
                    "per_page": 20,
                    "to": 4,
                    "total": 4
                },
                "pagination": {
                    "total": 4,
                    "per_page": 20,
                    "current_page": 1,
                    "last_page": 1,
                    "next_page_url": null,
                    "next_page_with_filters": null,
                    "prev_page_url": null,
                    "prev_page_with_filters": null,
                    "from": 1,
                    "to": 4
                }
            }
        })
    }
});