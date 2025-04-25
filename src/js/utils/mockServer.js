import { createServer } from 'miragejs';

createServer({
    routes() {
        this.get("http://127.0.0.1:8000/api/v1/home-catalog", () => {
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
        })
    }
});