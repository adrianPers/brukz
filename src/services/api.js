
const urlApi = "https://api-ecomerce-lovat.vercel.app";
// const urlApi = "http://localhost:8080";


export const getProducts = async () => {

    try{

        const response = await fetch(urlApi);

        if(!response.ok){
            return {"status" : "produto inválido"};
        }

        return response.json();

    } catch (err){
        console.log("Erro na requisição :" + err);
        return {"status" : "produto inválido"};

    }

}

export const getOnlyProduct = async (category, subcategory, name) => {

    try{

        const response = await fetch(
            `${urlApi}/produtos/${category}/${subcategory}/${name}`
        );

        if(!response.ok){
            return {"status" : "produto inválido"};
        }

        return response.json();

    } catch (err){
        console.log("Erro na requisição :" + err);
        return {"status" : "produto inválido"};

    }

}