# Eneba's internship task: backend

> [!IMPORTANT]
> This project is a non-commercial demo backend built as part of a technical assignment for Eneba. **All trademarks and images belong to their respective owners**.

## Tech stack
 - NodeJs
 - PostgreSQL
 - Prisma ORM

## Description
This backend application was built with NodeJs, PostgreSQL and Prisma ORM, it contains a few public api endpoints. The backend app is separated into two main parts: searchRoutes and productRoutes. searchRoutes handle the /list endpoint, whereas the productRoutes handle /product routes.

### Search routes
|          **Route**         |                     **Use case**                     | **Limitations** |
|:--------------------------:|:----------------------------------------------------:|:---------------:|
| **GET /list**              | For listing all products                             | LIMIT 100       |
| **GET /list?search=query** | For listing the products that match the search query | LIMIT 100       |

### Product routes
|          **Route**          |              **Use case**              |                                                                                                **Limitations**                                                                                                |
|:---------------------------:|:--------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| **GET /product/:productId** | For retrieving a product's information | -                                                                                                                                                                                                             |
| **POST /product**           | For adding a new product               | One product per query. Must include title, description, price (price must also be a non-negative integer), currency, vendor name, must also include at least one image, only one image can be the cover image |


### Creating a new product
Fetch a POST request to /product with the following body to create a new product:
```JSON
{
    "name": "Game title",
    "description": "Game description",
    "priceCents": 1000,
    "currency": "EUR",
    "market": "Europe",
    "cashbackPercent": 10,
    "discountPercent": 10,
    "vendorName": "EA App",
    "images": {
        "image1": {
            "imageUrl": "URL",
            "isCover": "false"
        },
        "image2": {
            "imageUrl": "URL",
            "isCover": "true"
        }
    }
}
```

> [!CAUTION]
> Please note that the imageUrl parameter must include a valid image URL. Right now, all URLs will be accepted by the backend, yet the frontend application will only display images that originate from https://imgproxy.eneba.games/ and https://static.eneba.games. As this project is a non-commercial demo backend built as part of a technical assignment for Eneba, I used Eneba’s public image CDN for realism, but the project is non-commercial and solely built for evaluation. **All trademarks and images belong to their respective owners**.

## Running the backend
This repository contains docker files for easy setup.

The following command installs dependencies and starts the application on port ***6003***:
```bash
sudo docker-compose up --build
```

Note that the database attempts to start on port ***6002***.
